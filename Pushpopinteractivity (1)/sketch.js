var colourRed;
var colourGreen;
var colourBlue;

function setup() {
  // put setup code here
  createCanvas(600,600);
  background(220);
  angleMode(DEGREES);
  colourRed = random(0, 255);
  colourGreen = random(0, 255);
  colourBlue = random(0, 255);

}

function draw() {
  // put drawing code here
 for(var i = 0; i<360 ; i+=72){
        push();
        translate((width/2),(height/2));
        rotate(i);
        fill(colourRed, colourGreen, colourBlue);
        rect(0, 0, 50, 50);
        pop();
      }
}