function setup() {
  // put setup code here
  createCanvas(600,600);
  background(220);
}

function draw() {
  // put drawing code here
  push();
  	translate(width / 2, height / 2);
	rotate(PI / 3.0);
	fill(220,0,0);
	rect(0, 0, 50, 50);
  pop();

   push();
  	translate(width / 2, height / 2);
  	fill(0,220,0);
	rotate(TWO_PI / 3.0);
	rect(0, 0, 50, 50);
  pop();

   push();
  	translate(width / 2, height / 2);
  	fill(0,0,220);
  	rotate(TWO_PI);
	rect(0, 0, 50, 50);
   pop();
}