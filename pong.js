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
}

function Ball(x, y) {
    this.x = x;
    this.y = y;
    this.x_speed = getRandInteger(-10, 10); 
    this.y_speed = getRandInteger(-10, 10); 
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
        var top_x = this.x - 8;
        var top_y = this.y - 8;
        var bottom_x = this.x + 8;
        var bottom_y = this.y + 8;

        if (top_y < 0) {
            this.y = 8;
            this.y_speed = -this.y_speed;
        } else if (bottom_y > h) {
            this.y = h - 8;
            this.y_speed = -this.y_speed;
        }

        if (top_x > (w / 2)){
            if (top_x < (paddle1.x + paddle1.width) && bottom_x > paddle1.x &&
                top_y < (paddle1.y + paddle1.height) && bottom_y > paddle1.y) {
                    this.x_speed = this.x_speed * -1;
                    this.y_speed += (paddle1.speed / 4);
                    this.x += this.x_speed;
            }
        } else {
            if (top_x < (paddle2.x + paddle2.width) && bottom_x > paddle2.x &&
                top_y < (paddle2.y + paddle2.height) && bottom_y > paddle2.y) {
                    this.x_speed = this.x_speed * -1;
                    this.y_speed += (paddle2.speed / 4);
                    this.x += this.x_speed;
            }
        }
    };
}

function render() {
    pongTable();
    player.render();
    computer.render();
    ball.render();
    ball.move(computer.paddle, player.paddle); 
}

var step = function() {
    render();
    animate(step);
}

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