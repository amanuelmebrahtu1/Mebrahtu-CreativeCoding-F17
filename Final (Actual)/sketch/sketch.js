var lauryn;
var misch;
var can;
var pta;
var altman;
var kubrick;
var blackwood;
var cormac;
var pynchon;
var hopper;
var henry;
var addis;
var song;
var select;
var lh = 0;
var tm = 0;
var cann = 0;
var ptaa = 0;
var ra = 0;
var sk = 0;
var cb = 0;
var cm = 0;
var tp = 0;
var eh = 0;
var th = 0;
var ethio = 0;
var string1 = 'FILMMAKERS';
var string11 = 'FILMMAKERS';
var string2 = 'MUSICIANS';
var string22 = 'MUSICIANS';
var string3 = 'NOVELISTS';
var string33 = 'NOVELISTS';
var string4 = 'OTHER';
var string44 = 'OTHER';
var stringlh = 'LAURYN';
var stringtm = 'MISCH';
var stringcann = 'CAN';
var stringptaa = 'PTA';
var stringra = 'ALTMAN';
var stringsk = 'KUBRICK';
var stringcb = 'BLACKWOOD';
var stringcm = 'CORMAC';
var stringtp = 'PYNCHON';
var stringeh = 'HOPPER';
var stringth = 'HENRY';
var stringethio = 'ADDIS';
var state; //STATE
var sounds = 0;
var mastervid;
var mastersong;
var twbbvid;
var twbbsong;
var pdlvid;
var pdlsong;
var magnoliavid;
var magnoliasong;
var tptvid;
var tptsong;
var ptavid = 0;
var canimg;
var canimg1;
var CanSong;
var CanObject;
var vitamin;
var rain = [];
var vitVel = 2;
var hitDist;
var hit = 0;
var miss = 0;
var canbutton;
var button;
var ehimage;
var ehcolor;
var ehIndex;
var ehColor;
var canvas;
var cansong = 0;
var thesong = 0;
var ads = 600;
var tmimage;
var tmimage1;
var songMisch;
var star = [];
var speed = 1;
var tmsong;
var killing;
var lhpick = 0;
var award;
var nextButton;
var fft;
var pick = 0;
var tpnum;
var tpnumber = []
var a;





function preload(){
	lauryn = loadImage('assets/lauryn.png');
	misch = loadImage('assets/misch.png');
	can = loadImage('assets/can.png');
	pta = loadImage('assets/pta.png');
	altman = loadImage('assets/altman.png');
	kubrick = loadImage('assets/kubrick.png');
	blackwood = loadImage('assets/blackwood.png');
	cormac = loadImage('assets/cormac.png');
	pynchon = loadImage('assets/pynchon.png');
	hopper = loadImage('assets/hopper.png');
	henry = loadImage('assets/henry.png');
	addis = loadImage('assets/flag.png');
	song = loadSound('assets/sleepwalk.mp3');
	select = loadSound('assets/select.mp3');
  mastersong = loadSound('assets/master.mp3');
  twbbsong = loadSound('assets/twbb.mp3');
  pdlsong = loadSound('assets/pdl.mp3');
  magnoliasong = loadSound('assets/magnolia.mp3');
  tptsong = loadSound('assets/tpt.mp3');
  canimg = loadImage('assets/cann.png');
  canimg1 = loadImage('assets/gummy.png');
  CanSong = loadSound('assets/CAN-VitaminC.mp3');
  ehimage = loadImage('assets/hopper.jpg');
  tmimage = loadImage('assets/Left.png');
  tmimage1 = loadImage('assets/Right.png');
  tmsong = loadSound('assets/ticktock.mp3');
  killing = loadSound('assets/killing.mp3');


}

function setup() {
  // put setup code here
  state = 0;
  //state == 0
	 //createCanvas(600,600);  
	 //select.playMode('sustain');
   //console.log('state base');
  //if (state == 0)
   canvas = createCanvas(600,600); 
   background(255); 
   image(ehimage,0,0);
   rect(0,0,900,725);
   select.playMode('sustain');
   console.log('state base'); 
	 //song.play();
	//}

  //if (state == 2){
    //resizeCanvas(0,0);
  //}

  CanObject = new Cann(400, 500);

  rain[0] = new Vitamins(vitVel);

  star[0] = new Stars();
  for (var tomi=0;tomi<1000;tomi++) {
      star[tomi] = new Stars();
    }

  pixelDensity(1);
  ehimage.loadPixels();
  image(ehimage,0,0);
  rect(0,0,900,725);
  //if (state == 3) {
    //CanSong.play();
  //}

  //if (state == 4) {
  //  fill(255);
   // rect(0,0,600,600);
  //}
  angleMode(DEGREES);
  //changeSong();
  
  fft = new p5.FFT(0.9, 128);

  tpnumber[0] = new Numbers(random(width), random(height), 2);
  for (var tpi = 0; tpi < 2000; tpi++){
    tpnumber[tpi] = new Numbers(random(width), random(height), 2);
  }
}

function draw() {
  // put drawing code here
  button = createButton('home');
  button.position(15, 15);
  button.mousePressed(home);
  button.hide();

  var ehbutton = createButton('show');
  ehbutton.position(600, 15);
  ehbutton.mousePressed(showpic);
  ehbutton.hide();


  if (state == 0) {
    //stop();
    //song.play();
    canvas.size(600,600);
 	  statezero();
    //ehbutton.hide();
    button.hide();
    ehbutton.hide();

  }
  

  if (state == 1) {
	 background(133)
   ehbutton.hide();
  }


  if (state == 2) {
    canvas.size(0,0);
    PTA();
    button.show();
    ehbutton.hide();
    //utton = createButton('home');

    
  }

  if (state == 3) {
    //noLoop();
    //CanSong.play();
    //loop();
    canState();
    button.show();
    ehbutton.hide();
  }

  if (state == 4) {
    //canvas.size(900,725);
    noStroke(); 
    smooth();
    Hopper();
    button.show();
    ehbutton.show();

    //button = createButton('home');
    //button.position(15, 15);
    //button.mousePressed(home);
  }

  if (state == 5) {
    Misch();
    button.show();
    ehbutton.hide();
  }

  if (state == 6) {
    Lauryn();
    button.show();
    ehbutton.hide();
  }
  if (state == 7) {
    Pynchon();
    button.show();
    ehbutton.hide();
  }


  if (state !== 0) {
    song.stop();
  }

  if (state !== 3) {
    CanSong.stop();
  }

  if (state !== 5) {
    tmsong.stop();
  }

  if (state !== 6) {
    killing.stop();
  }


}




function mouseClicked(){
	if (state == 0) {
		if (mouseX > 230 && mouseX < 290 && mouseY > 160 && mouseY < 230) {
			console.log('state 1')
			state = 1;
		}
    if (mouseX > 145 && mouseX < 247 && mouseY > 230 && mouseY < 290) {
      console.log('state pta');
      state = 2;
    }
    if (mouseX > 365 && mouseX < 400 && mouseY > 230 && mouseY < 290) {
      console.log('state can');
      state = 3;
    }
    if (mouseX > 385 && mouseX < 430 && mouseY > 305 && mouseY < 350) {
      console.log('state hopper');
      state = 4;
    }
    if (mouseX > 305 && mouseX < 350 && mouseY > 233 && mouseY < 290) {
      console.log('tom misch');
      state = 5;
    }
    if (mouseX > 305 && mouseX < 350 && mouseY > 160 && mouseY < 230) {
      console.log('lauryn hill');
      state = 6;
    }
    if (mouseX > 145 && mouseX < 230 && mouseY > 305 && mouseY < 350) {
      console.log('thomas pynchon');
      state = 7;

    }

	}
	
	if (state == 1) {
		if (mouseX > 300) {
			state = 0;
		}
	}



  
	
}

function statezero(){
  //loop();

  if (song.isPlaying() == false) {
      song.play();
      //song.isPlaying() = true;
    }


  background(30);
  noStroke();
  fill(138,46,96);
  rect(0,0,300,300);
  fill(170,91,57);
  rect(300,0,300,300);
  fill(39,116,85);
  rect(0,300,300,300);
  fill(122,158,53);
  rect(300,300,300,300);
  
  textSize(35);
  fill(230, 230, 230, 100);
  text(string1, 10, 50);

  //if (ra == 0) {
  	image(altman, 230, 160, 50, 75);
  //}
  //if (sk == 0) {
  	image(kubrick, 205, 230, 100, 75);
 //}
  //if (ptaa == 0) {
  	image(pta, 145, 230, 100, 120);
  //}

  if (mouseX > 230 && mouseX < 290 && mouseY > 160 && mouseY < 230) {
  	string1 = stringra;
  	
  	if (sounds == 0) {
  		select.play();
  		sounds += 1;
  	}
  }
  else if (mouseX > 250 && mouseX < 290 && mouseY > 232 && mouseY < 290){
  	string1 = stringsk;

  	 if (sounds == 0) {
  		select.play();
  		sounds += 1;
  	}
  }
  else if (mouseX > 145 && mouseX < 247 && mouseY > 230 && mouseY < 290){
  	string1 = stringptaa;
  	if (sounds == 0) {
  		select.play();
  		sounds += 1;
  	}
  }
  else if (mouseX > 305 && mouseX < 350 && mouseY > 160 && mouseY < 230) {
  	string2 = stringlh;
  	if (sounds == 0) {
  		select.play();
  		sounds += 1;
  	}
  }
  else if (mouseX > 305 && mouseX < 350 && mouseY > 233 && mouseY < 290) {
  	string2 = stringtm;
  	if (sounds == 0) {
  		select.play();
  		sounds += 1;
  	}
  }
  else if (mouseX > 365 && mouseX < 400 && mouseY > 230 && mouseY < 290) {
  	string2 = stringcann;
  	if (sounds == 0) {
  		select.play();
  		sounds += 1;
  	}
  }
  else if (mouseX > 145 && mouseX < 230 && mouseY > 305 && mouseY < 350) {
  	string3 = stringtp;
  	if (sounds == 0) {
  		select.play();
  		sounds += 1;
  	}
  }
  else if (mouseX > 235 && mouseX < 290 && mouseY > 305 && mouseY < 350) {
  	string3 = stringcb;
  	if (sounds == 0) {
  		select.play();
  		sounds += 1;
  	}
  }
  else if (mouseX > 250 && mouseX < 290 && mouseY > 380 && mouseY < 430) {
  	string3 = stringcm;
  	if (sounds == 0) {
  		select.play();
  		sounds += 1;
  	}
  }
  else if (mouseX > 305 && mouseX < 353 && mouseY > 380 && mouseY < 430) {
  	string4 = stringth;
  	if (sounds == 0) {
  		select.play();
  		sounds += 1;
  	}
  }
  else if (mouseX > 385 && mouseX < 430 && mouseY > 305 && mouseY < 350) {
  	string4 = stringeh;
  	if (sounds == 0) {
  		select.play();
  		sounds += 1;
  	}
  }
  else if (mouseX > 305 && mouseX < 350 && mouseY > 305 && mouseY < 350) {
  	string4 = stringethio;
  	if (sounds == 0) {
  		select.play();
  		sounds += 1;
  	}
  }
  else{
  	string1 = string11;
  	string2 = string22;
  	string3 = string33;
  	string4 = string44;
  	sounds = 0;
  }

 

  
 // if  (mouseX > 300 || mouseY > 300){
  	//ra = 0;
  	//sk = 0;
  	//pta = 0;
  //}

  //if (ra == 1) {
  	image(altman, 230, 160, 50, 75);
  	//string1 = stringra;
  //}
  //if (sk == 1) {
  	image(kubrick, 205, 230, 100, 75);
  	//string1 = stringsk;
  //}
  //if (ptaa == 1) {
  	image(pta, 145, 230, 100, 120);
  	//string1 = stringpta;
  //}

  textSize(35);
  fill(230, 230, 230, 100);
  text(string2, 395, 50);

  //if (lh == 0) {
  	image(lauryn, 280, 160, 130, 75);
  //}
  //if (cann == 0) {
  	image(can, 385, 230, 50, 60);
  //}
  //if (tm == 0) {
  	image(misch, 300, 215, 90, 80);
  //}

  
  textSize(35);
  fill(230, 230, 230, 100);
  text(string3, 10, 580); 

  //if (cm == 0) {
  	image(cormac, 185, 380, 130, 75);
  //}
  //if (tp == 0) {
  	image(pynchon, 170, 305, 50, 60);
  //}
  //if (cb == 0) {
  	image(blackwood, 205, 300, 110, 110);
  //}



  textSize(35);
  fill(230, 230, 230, 100);
  text(string4, 450, 580);

   //if (th == 0) {
  	image(henry, 245, 350, 195, 135);
  //}
  //if (eh == 0) {
  	image(hopper, 360, 305, 110, 120);
  //}
  //if (ethio == 0) {
  	image(addis, 310, 315, 50, 50);
  //}

  //if (song.isPlaying() == false) {
     // song.play();
     // song.isPlaying() = true;
   // }


}

function PTA(){

  if (ptavid == 0) {
      noLoop();
      rect(0,0, 4,4);
    }
    
  if (ptavid == 1) {
    noLoop();
    Master();
  }
  
  else if (ptavid == 2) {
    mastervid.remove();
    mastersong.stop();
    noLoop();
    TWBB();
  }
  else if (ptavid == 3) {
    twbbvid.remove();
    twbbsong.stop();
    noLoop();
    TPT();
  }
  else if (ptavid == 4) {
    tptvid.remove();
    tptsong.stop();
    noLoop();
    PDL();
  }
  else if (ptavid == 5) {
    pdlvid.remove();
    pdlsong.stop();
    noLoop();
    Magnolia();
  }
  else if (ptavid == 6) {
    magnoliavid.remove();
    magnoliasong.stop();
  }
  //ptabutton.mousePressed(toggleVid);
  console.log(ptavid);
  if (ptavid >= 7) {
    ptavid = 0;
    state = 0;
  }
}

function Master() {


  mastervid = createVideo(['assets/master.mp4']);
  mastervid.loop();
  mastersong.play();
  /*
  if (ptavid !== 0) {
    mastervid.remove();
    mastersong.stop();
  }
*/

}


function TWBB() {

  twbbvid = createVideo(['assets/twbb.mp4']);
  twbbvid.loop();
  twbbsong.play();
  /*if (ptavid !== 1) {
    twbbvid.remove();
    twbbsong.stop();
  }
  */

}

function PDL() {

  pdlvid = createVideo(['assets/pdl.mp4']);
  pdlvid.loop();
  pdlsong.play();
  /*
  if (ptavid !== 3) {
    pdlvid.remove();
    pdlsong.stop();
  }
  */

}

function Magnolia() {
  magnoliavid = createVideo(['assets/magnolia.mp4']);
  magnoliavid.loop();
  magnoliasong.play();
  /*
  if (ptavid !== 4) {
    magnoliavid.remove();
    magnoliasong.stop();
  }
  */

}

function TPT() {
  
  tptvid = createVideo(['assets/tpt.mp4']);
  tptvid.loop();
  tptsong.play();
  /*
  if (ptavid !== 2) {
    tptvid.remove();
    tptsong.stop();
  }
  */

}

function keyPressed() {
  //if (key === 'h' || key === 'H') {
      //state = 0;
    //}
  if (state = 2) {
    loop();

    if (keyCode === RIGHT_ARROW) {
      ptavid += 1;
    }
    else {
      return false;
    }
  }
}

function Cann (cx, cy){
  this.x = cx;
  this.y = cy;

  this.display = function(){
    image(canimg, this.x, this.y, 100, 100);
  };

  this.move = function(){
    this.x = mouseX;
    if (mouseX >= 550) {
      this.x = 550;
    }
  };

};

function Vitamins (vVel){

  this.x = random(10, 600);
  this.y = 0;
  this.yVel = vVel;

  this.setup = function(){
    console.log('here');
  }

  this.move = function(){
    this.y += this.yVel;

    if (frameCount % 200 == 0) {
      this.yVel += 3;
    }
  }
  
  this.display = function(){
    image(canimg1, this.x, this.y, 20, 20);
  }
};

function canState() {
  // put drawing code here
  //loop();
  if (CanSong.isPlaying() == false) {
      CanSong.play();
      //song.isPlaying() = true;
    }
  background(50,65,176);
  fill(44, 84, 170);
  noStroke();
  triangle(0,0,700,700,700,0);
    
  CanObject.display();
  CanObject.move();

  if (frameCount % 50 == 0) {
    rain.push(new Vitamins(vitVel));

  }

  rain[0].setup;

  if (miss == 0) {
    //if (sounds == 0) {
     // CanSong.play();
     // sounds += 1;
    //}

    for (var i = 0; i < rain.length; i++){
      rain[i].display();
      rain[i].move();
      hitDist = dist((CanObject.x + 50), CanObject.y, rain[i].x, rain[i].y);
    if (hitDist < 50) {
      hit += 1;
      console.log('hit');
      rain.splice(i,1);
    }
    if (rain[i].y > 600) {
      noLoop();
      miss+= 1
      console.log('miss');
      }
    //console.log(i)
    }

    fill(255);
    textSize(25);
    text(hit, 550, 50);
  }

  if (miss !== 0) {
    //noLoop();
    fill(0);
    rect(0,0,ads, ads);
    rain.splice(0,rain.length);
    CanSong.stop();
    button.show();

  }

  if (frameCount % 200 == 0) {
    vitVel += 2;
  }

    
}

function home(){
  state = 0;
  miss = 0;
  hit = 0;
  ads = 0;
  //button.hide();
}

function Hopper(){
  if(mouseIsPressed){
    var ehdiff = random(-10,10);
    var ehdiff1 = random(-10,10);
    var diameter = random(4, 18);
    var ehcol = ehimage.get((mouseX+ehdiff),(mouseY+ehdiff1));
     fill(ehcol, 150);
     ellipse(mouseX + ehdiff, mouseY + ehdiff1, diameter,diameter);
  } 
}

function showpic(){



  canvas.size(900,725);
  image(ehimage, 0,0);
  if (state == 0) {
    ehbutton.hide();
  }
}

function Misch(){
  if (tmsong.isPlaying() == false) {
      tmsong.play();
      //song.isPlaying() = true;
    }
  background(0);
  image(tmimage, 0, 0, 600,600);
 image(tmimage1, 0, 0, 600,600);


  
if (mouseIsPressed) {
  translate(width/2,height/2);
  console.log('qq');
  for (var tmi=0;tmi<star.length;tmi++) {
      if(star[tmi].starz<1) {
        star[tmi] = new Stars();
      } 
      star[tmi].update();
      star[tmi].show();

      
    }
  //image(tmimage, -300, 300, 600,600);
  //image(tmimage1, -300, 300, 600,600);

  image(tmimage, -300, 300, 600,600);
    image(tmimage1, -300, 300, 600,600);
  }

}

function Stars() {
  var starx;
  var tmx;
  var stary;
  var tmy;
  var starz;
  
    starx=random(-width/20,width/20);
    stary=random(-height/10,height/10);
    starz=random(100,1000);
  
  
this.update = function() {
  starz-=speed;
  tmx=map(starx/starz,0,1,0,width);
  tmy=map(stary/starz,0,1,0,height);
}

this.show = function() {
  fill(210);
  ellipse(tmx,tmy,500/starz,500/starz);
  stroke(255);
  //if(speed>0) {
    //line(tmx,tmy,starx+((tmx-starx)/1.1),stary+(tmy-stary)/1.1);
 // }
}
  


};

function Lauryn(){

  background(0);
  //award = new Grammy(mouseX, mouseY);
   if (killing.isPlaying() == false) {
      killing.play();
      //song.isPlaying() = true;
    }
  var spectrum = fft.analyze();


  noStroke();

  translate(width/2, height/2);

  for (var lhn = 0; lhn < spectrum.length; lhn++) {
    
      var lhangle = map(lhn, 0, spectrum.length, 0, 360);
      var lhamp = spectrum[lhn];
      var lhr = map(lhamp, 0, 256, 20, 180);
      beginShape();
    for (var lhi = 0; lhi < 360; lhi++) {
      fill(255, lhn, lhn);
      stroke(255,255,lhn);
      //var lhrr = map(lhamp, 0, 1, 10, 100);
      var lhrr = map(lhamp, 0, 256, 20, 100);
      var lhxx = lhrr * cos(lhi);
      var lhyy = lhrr * sin(lhi);
      vertex(lhxx, lhyy);
    }
    endShape();


      fill(255, lhn, lhn);
      var lhx = lhr * cos(lhangle);
      var lhy = lhr * sin(lhangle);
      stroke(255,lhn,lhn);
      line(0, 0, lhx, lhy);
      
  }
}

function Pynchon(){
   background(60);
  console.log(tpnumber.length);
  for(var tpn = 0; tpn<tpnumber.length; tpn++){
    //update every character
    tpnumber[tpn].show();
    tpnumber[tpn].move();
  }
  strokeWeight(10);
  stroke(0);
  fill(0);
  line(200,350, 350, 280);
  noFill();
  ellipse(295, 356, 80, 80);
  fill(255);
  strokeWeight(10);
  triangle(395, 280, 445, 185, 485, 310);
  triangle(350,280, 400, 200, 440, 330);
  /*
  tpnumber[0] = int(random(0,9));
  for (var tpi = 0; tpi < 2000; tpi++){
    tpnumber.push(int(random(0,9)));
  }

  for(var tpx = 0; tpx < width; tpx += 20){
    for(var tpy = 0; tpy < height; tpy += 20){
      a = tpy;
      fill(0,180,0);
      textSize(11);
      //text(tpnumber[tpy], 0, tpy);
      text(tpnumber[tpx+tpy], tpx, a);
      console.log(tpnumber[tpy])

    }
  }

 */   
   
}

function Numbers(tpx, tpy ,tpvel){
  this.x = tpx;
  this.y = tpy;
  this.vel = tpvel;

  
  this.move = function(){
  this.y -= this.vel;
  if(this.y < 0){
    //this.y -= this.vel;
      this.y = random(height);
  }

  }
  this.show = function(){
    fill(0,180,0);
    //noStroke();
      textSize(18);
      //text(tpnumber[tpy], 0, tpy);
      text(int(random(0,10)), this.x, this.y);
      console.log();
      
  }
}
/*
function songs(){
  if (state == 0) {
    if (song.isPlaying() == false) {
      song.play();
      song.isPlaying() = true;
    }
  }
  if (state == 3) {
    CanSong.play();
  }
  if (state == 4) {
    tmsong.play();
  }
  
}
*/