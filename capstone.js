var canvas = document.getElementById('canvas');
var context = canvas.getContext("2d");
var ballRadius = 15;
var x = canvas.width/2;
var y = canvas.height-30;
var dx = 3;
var dy = -3;

var cookie = document.cookie;

var xPos = 0;
var yPos = 0;

var playerX = 10;
var playerY = 10;
var endPointX = 10;
var endPointY = 10;

var xEndPos = 350;
var yEndPos = 220;

var levelNumber = 1;

var objectPosX = Math.floor(Math.random() * (canvas.width/10)) * 10;
var objectPosY = Math.floor(Math.random() * (canvas.height/10)) * 10;
var objectSize = 10;

var objectPosX1 = Math.floor(Math.random() * (canvas.width/10)) * 10;
var objectPosY1 = Math.floor(Math.random() * (canvas.height/10)) * 10;
var objectSize1 = 10;

var objectPosX2 = Math.floor(Math.random() * (canvas.width/10)) * 10;
var objectPosY2 = Math.floor(Math.random() * (canvas.height/10)) * 10;
var objectSize2 = 10;

var objectPosX3 = Math.floor(Math.random() * (canvas.width/10)) * 10;
var objectPosY3 = Math.floor(Math.random() * (canvas.height/10)) * 10;
var objectSize3 = 10;

var objectPosX4 = Math.floor(Math.random() * (canvas.width/10)) * 10;
var objectPosY4 = Math.floor(Math.random() * (canvas.height/10)) * 10;
var objectSize4 = 10;

var objectPosX5 = Math.floor(Math.random() * (canvas.width/10)) * 10;
var objectPosY5 = Math.floor(Math.random() * (canvas.height/10)) * 10;
var objectSize5 = 10;

var objectPosX6 = Math.floor(Math.random() * (canvas.width/10)) * 10;
var objectPosY6 = Math.floor(Math.random() * (canvas.height/10)) * 10;
var objectSize6 = 10;

var objectPosX7 = Math.floor(Math.random() * (canvas.width/10)) * 10;
var objectPosY7 = Math.floor(Math.random() * (canvas.height/10)) * 10;
var objectSize7 = 10;

var objectPosX8 = Math.floor(Math.random() * (canvas.width/10)) * 10;
var objectPosY8 = Math.floor(Math.random() * (canvas.height/10)) * 10;
var objectSize8 = 10;

var objectPosX9 = Math.floor(Math.random() * (canvas.width/10)) * 10;
var objectPosY9 = Math.floor(Math.random() * (canvas.height/10)) * 10;
var objectSize9 = 10;

function move(e){
    if(e.keyCode == 39){
        context.clearRect(0, 0, canvas.width, canvas.height);
        xPos+=10;
        if(xPos>=canvas.width){
            xPos-=10;
        }
        if(collision(objectPosX, objectPosY, xPos, yPos) <= 0){
            xPos-=10;
        }
        if(collision(objectPosX1, objectPosY1, xPos, yPos) <= 0){
            xPos-=10;
        }
        if(collision(objectPosX2, objectPosY2, xPos, yPos) <= 0){
            xPos-=10;
        }
        if(collision(objectPosX3, objectPosY3, xPos, yPos) <= 0){
            xPos-=10;
        }
        if(collision(objectPosX4, objectPosY4, xPos, yPos) <= 0){
            xPos-=10;
        }
        if(collision(objectPosX5, objectPosY5, xPos, yPos) <= 0){
            xPos-=10;
        }
        if(collision(objectPosX6, objectPosY6, xPos, yPos) <= 0){
            xPos-=10;
        }
        if(collision(objectPosX7, objectPosY7, xPos, yPos) <= 0){
            xPos-=10;
        }
        if(collision(objectPosX8, objectPosY8, xPos, yPos) <= 0){
            xPos-=10;
        }
        if(collision(objectPosX9, objectPosY9, xPos, yPos) <= 0){
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
        if(collision(objectPosX, objectPosY, xPos, yPos) <= 0){
            xPos+=10;
        }
        if(collision(objectPosX1, objectPosY1, xPos, yPos) <= 0){
            xPos+=10;
        }
        if(collision(objectPosX2, objectPosY2, xPos, yPos) <= 0){
            xPos+=10;
        }
        if(collision(objectPosX3, objectPosY3, xPos, yPos) <= 0){
            xPos+=10;
        }
        if(collision(objectPosX4, objectPosY4, xPos, yPos) <= 0){
            xPos+=10;
        }
        if(collision(objectPosX5, objectPosY5, xPos, yPos) <= 0){
            xPos+=10;
        }
        if(collision(objectPosX6, objectPosY6, xPos, yPos) <= 0){
            xPos+=10;
        }
        if(collision(objectPosX7, objectPosY7, xPos, yPos) <= 0){
            xPos+=10;
        }
        if(collision(objectPosX8, objectPosY8, xPos, yPos) <= 0){
            xPos+=10;
        }
        if(collision(objectPosX9, objectPosY9, xPos, yPos) <= 0){
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
        if(collision(objectPosX, objectPosY, xPos, yPos) <= 0){
            yPos+=10;
        }
        if(collision(objectPosX1, objectPosY1, xPos, yPos) <= 0){
            yPos+=10;
        }
        if(collision(objectPosX2, objectPosY2, xPos, yPos) <= 0){
            yPos+=10;
        }
        if(collision(objectPosX3, objectPosY3, xPos, yPos) <= 0){
            yPos+=10;
        }
        if(collision(objectPosX4, objectPosY4, xPos, yPos) <= 0){
            yPos+=10;
        }
        if(collision(objectPosX5, objectPosY5, xPos, yPos) <= 0){
            yPos+=10;
        }
        if(collision(objectPosX6, objectPosY6, xPos, yPos) <= 0){
            yPos+=10;
        }
        if(collision(objectPosX7, objectPosY7, xPos, yPos) <= 0){
            yPos+=10;
        }
        if(collision(objectPosX8, objectPosY8, xPos, yPos) <= 0){
            yPos+=10;
        }
        if(collision(objectPosX9, objectPosY9, xPos, yPos) <= 0){
            yPos+=10;
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
        if(collision(objectPosX, objectPosY, xPos, yPos) <= 0){
            yPos-=10;
        }
        if(collision(objectPosX1, objectPosY1, xPos, yPos) <= 0){
            yPos-=10;
        }
        if(collision(objectPosX2, objectPosY2, xPos, yPos) <= 0){
            yPos-=10;
        }
        if(collision(objectPosX3, objectPosY3, xPos, yPos) <= 0){
            yPos-=10;
        }
        if(collision(objectPosX4, objectPosY4, xPos, yPos) <= 0){
            yPos-=10;
        }
        if(collision(objectPosX5, objectPosY5, xPos, yPos) <= 0){
            yPos-=10;
        }
        if(collision(objectPosX6, objectPosY6, xPos, yPos) <= 0){
            yPos-=10;
        }
        if(collision(objectPosX7, objectPosY7, xPos, yPos) <= 0){
            yPos-=10;
        }
        if(collision(objectPosX8, objectPosY8, xPos, yPos) <= 0){
            yPos-=10;
        }
        if(collision(objectPosX9, objectPosY9, xPos, yPos) <= 0){
            yPos-=10;
        }
        context.fillRect(xPos, yPos, playerX, playerY);
        context.stroke();
    }
};

document.onkeydown = move;

//var objects = [];
//function objectsPos(){
    //for (var i=0; i<100; i++)
        //objects[i] = new object(Math.random(10, 790), Math.random(10, 490), 10);
//}
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
    context.fillStyle = "green";
    context.fill();
}

function drawObject(){
    context.fillRect(objectPosX, objectPosY, objectSize, objectSize)
    context.fillStyle = "green";
    context.fill();
}
function drawObject1(){
    context.fillRect(objectPosX1, objectPosY1, objectSize1, objectSize1)
    context.fillStyle = "green";
    context.fill();
}
function drawObject2(){
    context.fillRect(objectPosX2, objectPosY2, objectSize2, objectSize2)
    context.fillStyle = "green";
    context.fill();
}
function drawObject3(){
    context.fillRect(objectPosX3, objectPosY3, objectSize3, objectSize3)
    context.fillStyle = "green";
    context.fill();
}
function drawObject4(){
    context.fillRect(objectPosX4, objectPosY4, objectSize4, objectSize4)
    context.fillStyle = "green";
    context.fill();
}
function drawObject5(){
    context.fillRect(objectPosX5, objectPosY5, objectSize5, objectSize5)
    context.fillStyle = "green";
    context.fill();
}
function drawObject6(){
    context.fillRect(objectPosX6, objectPosY6, objectSize6, objectSize6)
    context.fillStyle = "green";
    context.fill();
}
function drawObject7(){
    context.fillRect(objectPosX7, objectPosY7, objectSize7, objectSize7)
    context.fillStyle = "green";
    context.fill();
}
function drawObject8(){
    context.fillRect(objectPosX8, objectPosY8, objectSize8, objectSize8)
    context.fillStyle = "green";
    context.fill();
}
function drawObject9(){
    context.fillRect(objectPosX9, objectPosY9, objectSize9, objectSize9)
    context.fillStyle = "#FF0000";
    context.fill();
}

function nextLevel(){
    context.font = "50px";
    context.textAlign = "center";
    context.fillText("Level - " + levelNumber, 350, 10);
}


function collision(x1, y1, x2, y2){
    var xDistance = x2 - x1;
    var yDistance = y2 - y1;
    
    return Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));
}

function ballMove(){
    if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
        dx = -dx;
    }
    if(y + dy > canvas.height-ballRadius || y + dy < ballRadius) {
        dy = -dy;
    }
    x += dx;
    y += dy;
}

function draw() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    ballMove();
    drawPlayer();
    drawEndPoint();
    drawObject();
    drawObject1();
    drawObject2();
    drawObject3();
    drawObject4();
    drawObject5();
    drawObject6();
    drawObject7();
    drawObject8();
    drawObject9();
    nextLevel();
    animate();
}

function animate(){
    if (levelNumber >= 6){
        alert("You Win!");
        window.location.reload();
    }
    if (collision(xPos, yPos, xEndPos, yEndPos) <= 0){
        xPos = 0;
        yPos = 0;
        levelNumber += 1;
        objectPosX = Math.floor(Math.random() * (canvas.width/10)) * 10;
        objectPosY = Math.floor(Math.random() * (canvas.height/10)) * 10;
        objectSize = 10;

        objectPosX1 = Math.floor(Math.random() * (canvas.width/10)) * 10;
        objectPosY1 = Math.floor(Math.random() * (canvas.height/10)) * 10;
        objectSize1 = 10;

        objectPosX2 = Math.floor(Math.random() * (canvas.width/10)) * 10;
        objectPosY2 = Math.floor(Math.random() * (canvas.height/10)) * 10;
        objectSize2 = 10;

        objectPosX3 = Math.floor(Math.random() * (canvas.width/10)) * 10;
        objectPosY3 = Math.floor(Math.random() * (canvas.height/10)) * 10;
        objectSize3 = 10;

        objectPosX4 = Math.floor(Math.random() * (canvas.width/10)) * 10;
        objectPosY4 = Math.floor(Math.random() * (canvas.height/10)) * 10;
        objectSize4 = 10;

        objectPosX5 = Math.floor(Math.random() * (canvas.width/10)) * 10;
        objectPosY5 = Math.floor(Math.random() * (canvas.height/10)) * 10;
        objectSize5 = 10;

        objectPosX6 = Math.floor(Math.random() * (canvas.width/10)) * 10;
        objectPosY6 = Math.floor(Math.random() * (canvas.height/10)) * 10;
        objectSize6 = 10;

        objectPosX7 = Math.floor(Math.random() * (canvas.width/10)) * 10;
        objectPosY7 = Math.floor(Math.random() * (canvas.height/10)) * 10;
        objectSize7 = 10;

        objectPosX8 = Math.floor(Math.random() * (canvas.width/10)) * 10;
        objectPosY8 = Math.floor(Math.random() * (canvas.height/10)) * 10;
        objectSize8 = 10;

        objectPosX9 = Math.floor(Math.random() * (canvas.width/10)) * 10;
        objectPosY9 = Math.floor(Math.random() * (canvas.height/10)) * 10;
        objectSize9 = 10;
    }
    if (collision(xPos, yPos, x, y) <= 15){
        alert("You Lose!");
        xPos = 0;
        yPos = 0;
    }
    //console.log(collision(xPos, yPos, xEndPos, yEndPos));
    //console.log(collision(objectPosX, objectPosY, xPos, yPos))
    //console.log(collision(objectPosX1, objectPosY1, xPos, yPos))
    //console.log(collision(xPos, yPos, x, y));
    //console.log(collision(objectPosX, objectPosY, x, y))
    //console.log(collision(objectPosX1, objectPosY1, x, y))
}

setInterval(draw, 10);