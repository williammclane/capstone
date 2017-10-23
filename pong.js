var w = getWindowWidth(); 
var h = getWindowHeight(); 
var canvas = document.getElementById("blocPong");
var context = canvas.getContext("2d"); 
canvas.width = w;
canvas.height = h;
var player = new Player();
var computer = new Computer();
var ball = new Ball((w / 2), (h / 2));
 
var playerOneScore = 0; 
var playerTwoScore = 0; 

var animate = window.requestAnimationFrame || 
    window.webkitRequestAnimationFrame || 
    window.mozRequestAnimationFrame || 
    function(callback) { window.setTimeout(callback, 1000/60) }; 
    
var render = function() {
    pongTable();
    player.render();
    computer.render();
    ball.render();
    ball.move(computer.paddle, player.paddle);
    updateScore();
};

var update = function() {
    computer.update(ball);
};

var step = function() {
    update();
    render();
    animate(step);
};

function getRandInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

function getWindowHeight(){
    return window.innerHeight ||
        document.documentElement.clientHeight ||
        document.body.clientHeight;
}

function getWindowWidth() {
    return window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth;
}

function updateScore() {
    context.fillStyle = "white";
    context.font = "20px 'Press Start 2P'";
    context.textAlign = "center";
    context.fillText("Score - " + playerOneScore, 150, 70);
    context.fillText("Score - " + playerTwoScore, w - 150, 70);
}
    
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
        
        if (ballPos < (this.paddle.y)) { 
            this.paddle.move(-10); 
        } else if (ballPos > (this.paddle.y + 80)) {      
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
        
        scoreGoal(this); 

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

function scoreGoal(ball) { 
    if (ball.x < 0) { 
        playerTwoScore += 1; 
        ball.x_speed = 5; 
        ball.y_speed = 0; 
        ball.x = (w / 2); 
        ball.y = (h / 2); 
    } 
    if (ball.x > w) { 
        playerOneScore += 1; 
        ball.x_speed = -5; 
        ball.y_speed = 0; 
        ball.x = (w / 2); 
        ball.y = (h / 2); 
    } 
} 

function resizeCanvas() { 
    w = getWindowWidth(); 
    h = getWindowHeight(); 
    canvas.width = w; 
    canvas.height = h; 
    computer = new Computer(); 
    player = new Player();  
    render();
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

window.addEventListener("resize", resizeCanvas);