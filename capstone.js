var canvas = document.getElementById('canvas');
var context = canvas.getContext("2d");
var ballRadius = 10;
var x = canvas.width/2;
var y = canvas.height-30;
var dx = 2;
var dy = -2;

var xPos = 0;
var yPos = 0;

var playerX = 10;
var playerY = 10;
var endPointX = 10;
var endPointY = 10;

var xEndPos = 700;
var yEndPos = 450;

function move(e){
    if(e.keyCode == 39){
        context.clearRect(0, 0, canvas.width, canvas.height);
        xPos+=10;
        if(xPos>=canvas.width){
            xPos-=10;
        }
        context.fillRect(xPos, yPos, playerX, playerY);
        context.stroke();
    }
    if(e.keyCode == 37){
        context.clearRect(0, 0, canvas.width, canvas.height);
        xPos-=10;
        if(xPos<=-10){
            xPos+=10;
        }
        context.fillRect(xPos, yPos, playerX, playerY);
        context.stroke();
    }
    if(e.keyCode == 38){
        context.clearRect(0, 0, canvas.width, canvas.height);
        yPos-=10;
        if(yPos<=-10){
            yPos+=10
        }
        context.fillRect(xPos, yPos, playerX, playerY);
        context.stroke();
    }
    if(e.keyCode == 40){
        context.clearRect(0, 0, canvas.width, canvas.height);
        yPos+=10;
        if(yPos>=canvas.height){
            yPos-=10
        }
        context.fillRect(xPos, yPos, playerX, playerY);
        context.stroke();
    }
};

document.onkeydown = move;

function drawPlayer(){
    context.fillRect(xPos, yPos, playerX, playerY);
    context.fillStyle = "#BB00BB";
    context.fill();
    context.stroke();
}
function drawBall() {
    context.beginPath();
    context.arc(x, y, ballRadius, 0, Math.PI*2);
    context.fillStyle = "#0000FF";
    context.fill();
    context.closePath();
}

function drawEndPoint(){
    context.fillRect(xEndPos, yEndPos, endPointX, endPointY);
    context.fillStyle = "#FF0000";
    context.fill();
}

function collisionEnd(x1, y1, x2, y2){
    var xDistance = x2 - x1;
    var yDistance = y2 - y1;
    
    return Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));
}

function draw() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    drawPlayer();
    drawEndPoint();
    animate();
    if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
        dx = -dx;
    }
    if(y + dy > canvas.height-ballRadius || y + dy < ballRadius) {
        dy = -dy;
    }
    x += dx;
    y += dy;
}

function animate(){
    if (collisionEnd(xPos, yPos, xEndPos, yEndPos) <= 0){
        alert("You Win!");
        xPos = 0;
        yPos = 0;
    }
    console.log(collisionEnd(xPos, yPos, xEndPos, yEndPos));
}

setInterval(draw, 10);