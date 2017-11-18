var canvas = document.getElementById('canvas');
var context = canvas.getContext("2d");

var xPos = 0;
var yPos = 0;

context.fillRect(xPos, yPos, 10, 10);
context.stroke();

function move(e){
    if(e.keyCode == 39){
        context.clearRect(0, 0, canvas.width, canvas.height);
        xPos+=10;
        context.fillRect(xPos, yPos, 10, 10);
        context.stroke();
    }
    if(e.keyCode == 37){
        context.clearRect(0, 0, canvas.width, canvas.height);
        xPos-=10;
        context.fillRect(xPos, yPos, 10, 10);
        context.stroke();
    }
    if(e.keyCode == 38){
        context.clearRect(0, 0, canvas.width, canvas.height);
        yPos-=10;
        context.fillRect(xPos, yPos, 10, 10);
        context.stroke();
    }
    if(e.keyCode == 40){
        context.clearRect(0, 0, canvas.width, canvas.height);
        yPos+=10;
        context.fillRect(xPos, yPos, 10, 10);
        context.stroke();
    }
};

document.onkeydown = move;