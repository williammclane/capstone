var canvas = document.getElementById('canvas');
var context = canvas.getContext("2d");
var ballRadius = 10;
var x = canvas.width/2;
var y = canvas.height-30;
var dx = 2;
var dy = -2;

var xPos = 0;
var yPos = 0;

context.fillRect(xPos, yPos, 10, 10);
context.stroke();

function move(e){
    if(e.keyCode == 39){
        context.clearRect(0, 0, canvas.width, canvas.height);
        xPos+=10;
        if(xPos>=canvas.width){
            xPos-=10;
        }
        context.fillRect(xPos, yPos, 10, 10);
        context.stroke();
    }
    if(e.keyCode == 37){
        context.clearRect(0, 0, canvas.width, canvas.height);
        xPos-=10;
        if(xPos<=-10){
            xPos+=10;
        }
        context.fillRect(xPos, yPos, 10, 10);
        context.stroke();
    }
    if(e.keyCode == 38){
        context.clearRect(0, 0, canvas.width, canvas.height);
        yPos-=10;
        if(yPos<=-10){
            yPos+=10
        }
        context.fillRect(xPos, yPos, 10, 10);
        context.stroke();
    }
    if(e.keyCode == 40){
        context.clearRect(0, 0, canvas.width, canvas.height);
        yPos+=10;
        if(yPos>=canvas.height){
            yPos-=10
        }
        context.fillRect(xPos, yPos, 10, 10);
        context.stroke();
    }
};

document.onkeydown = move;

function drawPlayer(){
    context.fillRect(xPos, yPos, 10, 10);
    context.stroke();
}
function drawBall() {
    context.beginPath();
    context.arc(x, y, ballRadius, 0, Math.PI*2);
    context.fillStyle = "#0095DD";
    context.fill();
    context.closePath();
}

function draw() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    drawPlayer();
    
    if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
        dx = -dx;
    }
    if(y + dy > canvas.height-ballRadius || y + dy < ballRadius) {
        dy = -dy;
    }
    x += dx;
    y += dy;
}

setInterval(draw, 10);