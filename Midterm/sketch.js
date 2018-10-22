var buildingw = [];
var buildingh = [];
var buildingX = 0;
var buildingXlist = [];
var gameOver = 0;
var jump = 0;
var img1;
var img2;
var img3;
var img4;
var currentImage = 0;
var cactus;
var cactiList = [];
var jump;
var yPos = 250;
var sum = 0;
var bbx = 0;
var city;
var city1;
var x1 = 0;
var x2;
var speed = 2;
var speed1 = 3;
var speed2 = 4;
var velx;
var velx1;
var velx2;
var distance;
var distance1;
var distance2;
//var gameState;
var gameOver;
//var timeNow;
//var str = ' can you survive the post-apocalyptic cityscape? Click to start. Up to Jump. Down to shield';


function preload(){
	img1 = loadImage('assets/image_01.png');
	img2 = loadImage('assets/image_02.png');
	img3 = loadImage('assets/image_03.png');
	img4 = loadImage('assets/image_04.png');
	cactus = loadImage('assets/cactus_1.png');
	city = loadImage('assets/cityscape.png');
	city1 = loadImage('assets/cityscape2.png');
}

function setup() {
  // put setup code here
  createCanvas(800,400);
  x2 = width;
  velx = width;
  velx1 = width;
  velx2 = width;
  //gameOver = 0;
  //gameState = 0;
  //timeNow = minute();
}

function draw() {
  // put drawing code here
/*
  if (gameState == 0) {
  	push();
  	fill(0,0,210);
  	rect(0,0,width, height);
  	fill(255);
  	text('Can you survive the post-apocalyptic cityscape? Click to start. Up to Jump. Down to shield', 100, 30, 500, 200);
  	pop();
  	noLoop();
  }
*/
  //if (keyCode == ENTER) {
  	//ameState ++;
  //}

  //if (gameState == 1) {
  	//loop();
 background (0,191,255);

sun((width/4), 90);

image(city, x1, 0, width, height);
 image(city1, x2, 0, width, height);
  
  x1 -= speed;
  x2 -= speed;
  
  if (x1 < width*-1){
    x1 = width;
  }
  if (x2 < width * -1){
    x2 = width;
  }

//if(currentImage < 2){
//cactiList.push((random(100)));
//}


	cacti(velx);
	velx -= speed;
if (velx < (80*-1)) {
	//velx2 = width;
	cacti(velx2);
	velx2 -= speed1;
}
if (velx2< (80*-1) && velx < (80*-1)) {
	//velx1 = width;
	cacti(velx1);
	velx1 -= speed2;
}
if(velx < (80*-1) && velx1 < (80*-1) && velx2 < (80*-1)){
		velx = width;
	}



  fill('#ff4000');
  rect(0,350,800,50);

  if(frameCount % 10 == 0){
            if(currentImage < 3){
                currentImage++;
            }
            else {
                currentImage = 0;
            }
        }

if(currentImage==0){
            image(img1,width*(1/5),yPos,80,100);
}
        
	else if(currentImage==1){
            image(img2,width*(1/5),yPos,80,100);
     }
        
    else if(currentImage==2){
            image(img3,width*(1/5),yPos,80,100);
     }
     else if(currentImage==3){
            image(img4,width*(1/5),yPos,80,100);
     }

spriteMovement();

    distance = dist((width*(1/5)),yPos, velx, 300);
    distance1 = dist((width*(1/5)),yPos, velx1, 300);
    distance2 = dist((width*(1/5)),yPos, velx2, 300);

if (distance < 80 ) {
 	gameOver = 1;
 }
 else if (distance1 < 80 ) {
 	gameOver = 1;
 }
 else if (distance2 < 80 ) {
 	gameOver = 1;
 }
 

if (yPos < 250) {
	currentImage = 0;
}

//}

if (gameOver == 1) {
	push();
	fill(0);
	rect(0,0,width,height);
	textSize(40);
	fill(230,0,0);
	text('FAIL! YOU HAVE BEEN POISONED BY THE CACTI', 100, 100, 500, 300);
	pop();
}

}


function spriteMovement() {


if(keyIsDown(UP_ARROW)){
		jump = 5;
		yPos -= jump;	
	if(yPos < 190){
		jump = (2*(-1));
		yPos = 190;	
	}
	else if(yPos > 250){
		jump = (2*(-1));
		yPos = 250;
		
	}
}
else if (keyIsDown(DOWN_ARROW)) {
	if(yPos == 250){
		push();
		noFill();
		strokeWeight(4);
		stroke(220,0,220);
		ellipse(200, 300, 80,100);
		pop();
	}
}

if(yPos < 190){
		yPos += 2;
	}

if(yPos < 250){
		yPos += 2;
	}
else if(yPos > 250){
		yPos = 250;
	}

}

function keyPressed() {
	//gameState = 1;
}


function cacti(x){
    image(cactus,x, 300, 80,70);
	    
}

function sun(sx, sy){
	noStroke();
	fill(253, 184, 19);
	ellipse(sx, sy, 50, 50);

}


