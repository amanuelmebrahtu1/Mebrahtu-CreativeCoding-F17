var snareDrum;
var snareDrum1;
var snareDrum2;
var snareDrum;
var theSnare;
var theSnare1;
var theSnare2;
var theSnare3;
var soundCounter = 0;
var soundCounter1 = 0;
var soundCounter2 = 0;
var soundCounter3 = 0;
var colorRed;
var colorBlue;
var colorGreen;
var colorRed1;
var colorBlue1;
var colorGreen1;
var colorRed2;
var colorBlue2;
var colorGreen2;
var colorRed3;
var colorBlue3;
var colorGreen3;
var x1 = 65;
var x2 = 215;
var x3 = 365;
var x4 = 515;
var y = 400;
var wl = 50;



function preload(){
	snareDrum = loadSound("assets/snare1.mp3");
	snareDrum1 = loadSound("assets/snare2.mp3");
	snareDrum2 = loadSound("assets/snare3.mp3");
	snareDrum3 = loadSound("assets/snare4.mp3");

}

function setup() {
  // put setup code here
  createCanvas(600,600);
  colorRed = random(100,255);
  colorBlue = random(100,255);
  colorGreen = random(100,255);
  colorRed1 = random(100,255);
  colorBlue1 = random(100,255);
  colorGreen1 = random(100,255);
  colorRed2 = random(100,255);
  colorBlue2 = random(100,255);
  colorGreen2 = random(100,255);
  colorRed3 = random(100,255);
  colorBlue3 = random(100,255);
  colorGreen3 = random(100,255);
  //rectMode(CENTER);
    //theSnare = new drum(15, 400, 50, 50, snareDrum);
    //theSnare1 = new drum(165, 400, 50, 50, snareDrum1);
	//theSnare2 = new drum(315, 400, 50, 50, snareDrum2);
	//theSnare3 = new drum(465, 400, 50, 50, snareDrum3);

}

function draw() {
  // put drawing code here
  background(0);

  	push();

		translate(x1, y);
		rotate((soundCounter)*(PI/3));
		fill(colorRed, colorGreen, colorBlue);
		rectMode(CENTER);
		rect(0, 0, wl, wl);
	pop();

	push();

		translate(x2, y);
		rotate((soundCounter1)*(PI/3));
		fill(colorRed1, colorGreen1, colorBlue1);
		rectMode(CENTER);
		rect(0, 0, wl, wl);
	pop();

	push();

		translate(x3, y);
		rotate((soundCounter2)*(PI/3));
		fill(colorRed2, colorGreen2, colorBlue2);
		rectMode(CENTER);
		rect(0, 0, wl, wl);
	pop();

	push();

		translate(x4, y);
		rotate((soundCounter3)*(PI/3));
		fill(colorRed3, colorGreen3, colorBlue3);
		rectMode(CENTER);
		rect(0, 0, wl, wl);
	pop();

 
  //theSnare.show();
  //theSnare.play();
/*
  theSnare1.show();
  theSnare1.play();

  theSnare2.show();
  theSnare2.play();

  theSnare3.show();
  theSnare3.play();
*/
}

function mousePressed(){
	if (mouseX < (x1 + (wl/2)) && mouseX > (x1-(wl/2))) {
				if (mouseY < (y + (wl/2)) && mouseY > (y-(wl/2))) {
					if (snareDrum.isPlaying() == false) {
						snareDrum.play();
						soundCounter ++;
						//return true;
						console.log('contact');
					}
				}
			}
	if (mouseX < (x2 + (wl/2)) && mouseX > (x2-(wl/2))) {
				if (mouseY < (y + (wl/2)) && mouseY > (y-(wl/2))) {
					if (snareDrum1.isPlaying() == false) {
						snareDrum1.play();
						soundCounter1 ++;
						//return true;
						console.log('contact');
					}
				}
			}

	if (mouseX < (x3 + (wl/2)) && mouseX > (x3-(wl/2))) {
				if (mouseY < (y + (wl/2)) && mouseY > (y-(wl/2))) {
					if (snareDrum2.isPlaying() == false) {
						snareDrum2.play();
						soundCounter2 ++;
						//return true;
						console.log('contact');
					}
				}
			}

	if (mouseX < (x4 + (wl/2)) && mouseX > (x4-(wl/2))) {
				if (mouseY < (y + (wl/2)) && mouseY > (y-(wl/2))) {
					if (snareDrum3.isPlaying() == false) {
						snareDrum3.play();
						soundCounter3 ++;
						//return true;
						console.log('contact');
					}
				}
			}
}
/*
function drum(dx,dy, dh, dw, sound){

rectMode(CENTER);

	this.x = dx;
	this.y = dy;
	this.w = dw;
	this.h = dh;
	this.snare = sound;
	this.soundCounter = 0;

	this.show = function(){
		push();
		translate((this.w/2), (this.h/2));
		rotate((this.soundCounter)*(PI/3));
		fill(colorRed, colorGreen, colorBlue);
		rect(this.x, this.y, this.w, this.h);
		pop();
	}

	this.play = function(px, py){
	//if (this.snare.IsPlaying == false) {
		if (mouseIsPressed) {
			if (mouseX < this.x + this.w && mouseX > this.x) {
				if (mouseY < this.y + this.h && mouseY > this.y) {
					//if (this.snare.IsPlaying == false) {
						this.snare.play();
						this.soundCounter ++;
						return true;
						console.log('contact');
					//}
				}
			}
		}
	//}
	}






};

*/