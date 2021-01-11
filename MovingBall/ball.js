var positionX = 0;
var positionY = 0;
var velocity = 10;
var reverse = false;
var ball = document.getElementById("ball");
var borderCounter = 10;


var Xmin = 0;
var Xmax = 300;
var Ymin = 0;
var Ymax = 300;

function moveBall() {
  
  if (reverse) {
   
    borderCounter += 0.5;
    //velocity + 1;
    positionX = positionX - velocity;
    positionY = positionY - velocity;
    ball.style.left = positionX + "px";
    ball.style.top = positionY + "px";
    ball.style.background = 'red';
    ball.style.borderColor = 'black';
    ball.style.borderWidth = borderCounter + 'px';
    
    
  } else {
    borderCounter += 0.5;
    //velocity += 0.05;
    positionX = positionX + velocity;
    positionY = positionY + velocity;
    ball.style.left = positionX + "px";
    ball.style.top = positionY + "px";
    ball.style.background = 'purple';
    ball.style.borderColor = 'black';
    ball.style.borderWidth = borderCounter + 'px';
    
    
  }

  if (
    positionX > Xmax ||
    positionX === Xmin ||
    positionY > Ymax ||
    positionY === Ymin
    
  ) {
    reverse = !reverse;
    
    }
    if (borderCounter >= 100) {
      borderCounter = 10;
    }
}

setInterval(moveBall, 100);