var colourRed;
var colourGreen;
var colourBlue;
var theangle;
function setup() {
  // put setup code here
  createCanvas(600,600);

  colourRed = random(0, 255);
  colourGreen = random(0, 255);
  colourBlue = random(0, 255);
  rectMode(CENTER);
  
}

function draw() {
  // put drawing code here
  
  background(220);
  theangle = map(mouseX,0,600, 0, 2*PI);
for(var i = 0; i<10 ; i++){
        push();
        translate(80*i+10,100);
        rotate(theangle);
        fill(colourRed, colourGreen, colourBlue);
        rect(30, 30, 50, 50);
        pop();
      }
for(var x = 0; x<10 ; x++){
  colourRed = random(0, 255);
  colourGreen = random(0, 255);
  colourBlue = random(0, 255);
        push();
        translate(80*x+10,400);
        rotate(theangle);
        fill(colourRed, colourGreen, colourBlue);
        rect(30, 30, 50, 50);
        pop();
      }
}

function mouseMoved() {


}