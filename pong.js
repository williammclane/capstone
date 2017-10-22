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

function pongTable() {
    context.fillStyle = "#000000";
    context.fillRect(0, 0, w, h);
}

function Paddle(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.render = function() {
        context.fillStyle = "#FFFFFF";
        context.fillRect(this.x, this.y, this.width, this.height);
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

window.onload = function() {
    render();
}