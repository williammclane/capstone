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
    this.radius = 8;
    this.render = function() {
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 2 * Math.PI, false);
        context.fillStyle = "#FFFFFF";
        context.fill();
    };
}

function render() {
    pongTable();
    player.render();
    computer.render();
    ball.render();
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
        player.paddle.move(-15);
    } else if (k == 40) {
        player.paddle.move(15);
    }
});