var myBall;
var myBall1;
var myBall2;
var myBall3;
var myBall4;
var theBall;
var theBall1;
var theBall2;
var theBall3;
var theBall4;

function setup() {
  // put setup code here
  createCanvas(500,500);

  myBall = new Ball(300,130,3,40, color(220));
  myBall1 = new Ball(120,220,2,10, color(220));
  myBall2 = new Ball(50,180,3,50, color(220));
  myBall3 = new Ball(200,270,2,30, color(220));
  myBall4 = new Ball(400,180,5,25, color(220));

  theBall = new Ball1(300,300,3,40, color(220));
  theBall1 = new Ball1(120,120,2,10, color(220));
  theBall2 = new Ball1(50,50,3,50, color(220));
  theBall3 = new Ball1(200,200,2,30, color(220));
  theBall4 = new Ball1(400,400,5,25, color(220));
}

function draw() {
  // put drawing code here
  background(180);
  myBall.displayBall();
  myBall1.displayBall();
  myBall2.displayBall();
  myBall3.displayBall();
  myBall4.displayBall();
  myBall.animate();
  myBall1.animate();
  myBall2.animate();
  myBall3.animate();
  myBall4.animate();

  theBall.displayBall();
  theBall1.displayBall();
  theBall2.displayBall();
  theBall3.displayBall();
  theBall4.displayBall();
  theBall.animate();
  theBall1.animate();
  theBall2.animate();
  theBall3.animate();
  theBall4.animate();
}
function Ball(xVal, yVal, velVal, size, myColor){

	this.x = xVal;
	this.y = yVal;
	this.vel = velVal;
	this.size = size;

	this.color = myColor;

	this.animate = function(){
		this.y += this.vel;

		if(this.y <= 0 || this.y >= height){
			this.vel *= -1;
			this.size += 3;
			this.r = random(0,255);
			this.g = random(0,255);
			this.b = random(0,255);

			this.color = color(this.r , this.g , this.b);
		}

	}

	this.displayBall = function(){
		fill(this.color);
		ellipse((this.x), this.y, this.size, this.size);
	}


};

function Ball1(xVal, yVal, velVal, size, myColor){

	this.x = xVal;
	this.y = yVal;
	this.vel = velVal;
	this.size = size;

	this.color = myColor;

	this.animate = function(){
		this.x += this.vel;

		if(this.x <= 0 || this.x >= height){
			this.vel *= -1;
			this.size += 3;
			this.r = random(0,255);
			this.g = random(0,255);
			this.b = random(0,255);

			this.color = color(this.r , this.g , this.b);
		}

	}

	this.displayBall = function(){
		fill(this.color);
		ellipse((this.x), this.y, this.size, this.size);
	}


};