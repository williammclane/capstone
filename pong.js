var w = window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth;

var h = window.innerHeight ||
        document.documentElement.clientHeight ||
        document.body.clientHeight;

var canvas = document.getElementById("blocPong");
canvas.width = w;
canvas.height = h;
var context = canvas.getContext("2d");
var player = new Player();
var computer = new Computer();
var ball = new Ball((w / 2), (h / 2));
 
function getRandInteger(min, max) { 
    return Math.floor(Math.random() * (max - min) ) + min; 
} 

var animate = window.requestAnimationFrame || 
    window.webkitRequestAnimationFrame || 
    window.mozRequestAnimationFrame || 
    function(callback) { window.setTimeout(callback, 1000/60) }; 
    
function pongTable() {
    context.fillStyle = "#000000";
    context.fillRect(0, 0, w, h);
}

function Paddle(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.speed = 0; 
    this.render = function() {
        context.fillStyle = "#FFFFFF";
        context.fillRect(this.x, this.y, this.width, this.height);
    };
    this.move = function(y) { 
        this.y += y; 
        this.speed = y; 
        if (this.y < 4) { 
            this.y = 4; 
            this.speed = 0; 
        } else if (this.y + this.height > h) { 
            this.y = h - this.height; 
            this.speed = 0; 
        } 
    }; 
}

function Player() {
    this.paddle = new Paddle(2, (h / 2.5), 18, 100);
    this.render = function() {
        this.paddle.render();
    };
}

function Computer() {
    this.paddle = new Paddle((w - 21), (h / 2.5), 18, 100);
    this.render = function() {
        this.paddle.render();
    };
    this.update = function(ball) { 
        var ballPos = ball.y; 
        
        if (ballPos < (this.paddle.y + (this.paddle.height / 2) + 20)) { 
            this.paddle.move(-10); 
        } else if (ballPos > (this.paddle.y + (this.paddle.height / 2) + 20)) { 
            this.paddle.move(10); 
        } 
    }; 
}

function Ball(x, y) {
    this.x = x;
    this.y = y;
    this.x_speed = -5;  
    this.y_speed = 0;
    this.radius = 8;
    this.render = function() {
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 2 * Math.PI, false);
        context.fillStyle = "#FFFFFF";
        context.fill();
    };
    this.move = function(paddle1, paddle2) {
        this.x += this.x_speed;
        this.y += this.y_speed;
        this.left = this.x - 8;
        this.top = this.y - 8; 
        this.right = this.x + 8; 
        this.bottom = this.y + 8;

        if (this.top < 0) {
            this.y = 8;
            this.y_speed = -this.y_speed;
        } else if (this.bottom > h) {
            this.y = h - 8;
            this.y_speed = -this.y_speed;
        }
        if (this.x < 0 || this.x > w) { 
            this.x_speed = -5; 
            this.y_speed = 0; 
            this.x = (w / 2); 
            this.y = (h / 2); 
        } 
        if (this.left > (w / 2)){ 
            if (this.left < (paddle1.x + paddle1.width) && this.right > paddle1.x && 
                this.top < (paddle1.y + paddle1.height) && this.bottom > paddle1.y) { 
                    this.x_speed *=  -1;
                    this.y_speed += (paddle1.speed / 4);
                    this.x += this.x_speed;
            }
        } else {
            if (this.left < (paddle2.x + paddle2.width) && this.right > paddle2.x &&
                this.top < (paddle2.y + paddle2.height) && this.bottom  > paddle2.y) {
                    this.x_speed *= -1;
                    this.y_speed += (paddle2.speed / 4);
                    this.x += this.x_speed;
            }
        }
    };
}

var render = function() {
    pongTable();
    player.render();
    computer.render();
    ball.render();
    ball.move(computer.paddle, player.paddle); 
}; 

var update = function() { 
    computer.update(ball); 
}; 

var step = function() {
    update(); 
    render();
    animate(step);
};

window.onload = function() {
    animate(step);
}

window.addEventListener("keydown", function(event) {
    var k = event.keyCode;
    if (k == 38) {
        player.paddle.move(-35);
    } else if (k == 40) {
        player.paddle.move(35);
    }
});