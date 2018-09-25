//Baloon Game

//Play Sound
import ddf.minim.*;

Minim minim;

AudioPlayer player;
AudioPlayer myPlayer;
AudioPlayer myPlayer1;


// The immense number of variables
float x1 =random(600);
float x2 =random(600);
float x3 =random(600);
float x4 =random(600);
float x5 =random(600);
float x6 =random(600);
float x7 =random(600);
float x8 =random(600);
float x9 =random(600);
float x10 =random(600);
float x11 =random(600);
float x12 =random(600);
float x13 =random(600);
float x14 =random(600);

float y1 = 600;
float y2 = 600;
float y3 = 600;
float y4 = 600;
float y5 = 600;
float y6 = 600;
float y7 = 600;
float y8 = 600;
float y9 = 600;
float y10 = 600;
float y11 = 600;
float y12 = 600;
float y13 = 600;
float y14 = 600;

float s1 = random((0.1*-1), 0.9);
float s2 = random((0.1*-1), 0.9);
float s3 = random((0.1*-1), 0.9);
float s4 = random((0.1*-1), 0.9);
float s5 = random((0.1*-1), 0.9);
float s6 = random((0.1*-1), 0.9);
float s7 = random((0.1*-1), 0.9);
float s8 = random((0.1*-1), 0.9);
float s9 = random((0.1*-1), 0.9);
float s10 = random(0.1, 0.9);
float s11 = random((0.1*-1), 0.9);
float s12 = random((0.1*-1), 0.9);
float s13 = random((0.1*-1), 0.9);
float s14 = random((0.1*-1), 0.9);

float v1 = random(0.4, 0.8);
float v2 = random(0.4, 1.1);
float v3 = random(0.4, 1.1);
float v4 = random(0.4, 1.1);
float v5 = random(0.4, 1.1);
float v6 = random(0.4, 1.1);
float v7 = random(0.4, 1.1);
float v8 = random(0.4, 1.1);
float v9 = random(0.4, 1.1);
float v10 = random(0.4, 1.1);
float v11 = random(0.4, 0.8);
float v12 = random(0.4, 0.8);
float v13 = random(0.4, 0.8);
float v14 = random(0.4, 0.8);
float miss = 0;
int hits = 0;
String hitString = "";
String missString = "";
float score = 0;
int gameOver = 0;
color c1;
color c2;
int scen = 0;
int a = 600;
int b = 600;
int diff = 0;
int size = 50;
int textsize;
int textsize1;
String wel = "Welcome!! Please press P to Start";
String wel1 = "Remember: Reds are bombs & Misses deduct half a point";
String gameOverr = "BOOM! YOU HIT A BOMB! No points this time. Stop and Retry!";
String scenario = "Great job you got all the balloons! Stop and Retry to beat your score";
String ohno = "OH NO! The balloons are out of reach! Stop and Retry to beat your score";
float tri = 800;

//background gradient
void setup() {
  size(600,600);
 colorMode(HSB,100);
  
  minim = new Minim(this);
  player = minim.loadFile("balloonpop.wav");
  myPlayer = minim.loadFile("bomb.mp3");
  myPlayer1 = minim.loadFile("miss.mp3");
  c1 = color(random(100), 100,100);
  c2 = color(random(100), 100, 30);
  
  for(int y = 0; y< height; y++) {
   float r = map(y, 0, height, 0, 1); 
   color nc = lerpColor(c1, c2, r);
   stroke(nc);
   line(0,y,width, y); 
  }
 
}

void draw() {
  //starting screen
  
 fill(15);
 rect(0,0,a,b);
 fill(#f5f5dc);
 textsize = 40;
 textSize(textsize);
 text(wel, 55, 55, 300, 600);
 fill(#c6214d);
 textSize(30);
 text(wel1, 55, 300, 300, 600);
 
 

 if(a != 600 && b != 600){
  
   //balloon mechanics
    if (x1 <= width){
      x1=x1+s1;
    }
    if (x1 >= width || x1<=0){
      s1 = s1*-1;
      x1=x1+s1;
    }
     if (y1 <= height){
       y1=y1+v1;
     }
     if (y1 >= height){
       v1*= -1;
       y1=y1+v1;
     }
     if (x2 <= width){
      x2=x2+s2;
    }
    if (x2 >= width || x2<=0){
      s2 = s2*-1;
      x2=x2+s2;
    }
     if (y2 <= height){
       y2=y2+v2;
    }
     if (y2 >= height){
       v2*= -1;
       y2=y2+v2;
    }
     if (x3 <= width){
      x3=x3+s3;
    }
    if (x3 >= width || x3<=0){
      s3 = s3*-1;
      x3=x3+s3;
    }
     if (y3 <= height){
       y3=y3+v3;
    }
     if (y3 >= height){
       v3*= -1;
       y3=y3+v3;
    }
     if (x4 <= width){
      x4=x4+s3;
    }
    if (x4>= width || x4<=0){
      s4 = s4*-1;
      x4=x4+s4;
    }
     if (y4 <= height){
       y4=y4+v4;
    }
     if (y4 >= height){
       v4*= -1;
       y4=y4+v4;
    }
     if (x5 <= width){
      x5=x5+s5;
    }
    if (x5 >= width || x5<=0){
      s5 = s5*-1;
      x5=x5+s5;
    }
     if (y5 <= height){
       y5=y5+v5;
     }
     if (y5 >= height){
       v5*= -1;
       y5=y5+v5;
     }
     if (x6 <= width){
      x6=x6+s6;
    }
    if (x6 >= width || x6<=0){
      s6 = s6*-1;
      x6=x6+s6;
    }
     if (y6 <= height){
       y6=y6+v6;
    }
     if (y6 >= height){
       v6*= -1;
       y6=y6+v6;
   }
     if (x7 <= width){
      x7=x7+s7;
    }
    if (x7 >= width || x7<=0){
      s7 = s7*-1;
      x7=x7+s7;
    }
     if (y7 <= height){
       y7=y7+v7;
   }
     if (y7 >= height){
       v7*= -1;
       y7=y7+v7;
   }
     if (x8 <= width){
      x8=x8+s8;
    }
    if (x8 >= width || x8<=0){
      s8 = s8*-1;
      x8=x8+s8;
    }
     if (y8 <= height){
       y8=y8+v8;
     }
     if (y8 >= height){
       v8*= -1;
       y8=y8+v8;
     }
     if (x9 <= width){
      x9=x9+s9;
    }
    if (x9 >= width || x9<=0){
      s9 = s9*-1;
      x9=x9+s9;
    }
     if (y9 <= height){
       y9=y9+v9;
    }
     if (y9 >= height){
       v9*= -1;
       y9=y9+v9;
   }
     if (x10 <= width){
      x10=x10+s10;
    }
    if (x10 >= width || x10<=0){
      s10 = s10*-1;
      x10=x10+s10;
    }
     if (y10 <= height){
       y10=y10+v10;
     }
     if (y10 >= height){
       v10*= -1;
       y10=y10+v10;
     }
      if (x11 <= width){
      x11=x11+s11;
    }
    if (x11 >= width || x11<=0){
      s11 = s11*-1;
      x11=x11+s11;
    }
     if (y11 <= height){
       y11=y11+v11;
     }
     if (y1 >= height){
       v11*= -1;
       y11=y11+v11;
     }
      if (x1 <= width){
      x1=x1+s1;
    }
    if (x12 >= width || x12<=0){
      s12 = s1*-1;
      x12=x12+s12;
    }
     if (y12 <= height){
       y12=y12+v12;
     }
     if (y12 >= height){
       v12*= -1;
       y12=y12+v12;
     }
      if (x13 <= width){
      x1=x1+s1;
    }
    if (x13 >= width || x13<=0){
      s13 = s13*-1;
      x13=x13+s13;
    }
     if (y13 <= height){
       y13=y13+v13;
     }
     if (y13 >= height){
       v13*= -1;
       y13=y13+v1;
     }
    if (x14 <= width){
      x1=x1+s1;
    }
    if (x14 >= width || x14<=0){
      s14 = s14*-1;
      x14=x14+s14;
    }
     if (y14 <= height){
       y14=y14+v14;
     }
     if (y14 >= height){
       v14*= -1;
       y14=y14+v14;
     }
     
   //redrawn background
    for(int y = 0; y< height; y++) {
     float r = map(y, 0, height, 0, 1); 
     color nc = lerpColor(c1, c2, r);
     stroke(nc);
     line(0,y,width, y); 
    }
   //balloon strings
   fill(0);
   line(x1,y1, x1, y1+70);
   line(x2,y2, x2, y2+70);
   line(x3,y3, x3, y3+70);
   line(x4,y4, x4, y4+70);
   line(x5,y5, x5, y5+70);
   line(x6,y6, x6, y6+70);
   line(x7,y7, x7, y7+70);
   line(x8,y8, x8, y8+70);
   line(x9,y9, x9, y9+70);
   line(x10,y10, x10, y10+70);
   line(x11,y11, x11, y11+70);
   line(x12,y12, x12, y12+70);
   line(x13,y13, x13, y13+70);
   line(x14,y14, x14, y14+70);
   
   
     
  // balloons
    fill(#f5f5dc);
    triangle(x6,y6,x6-10,y6+35,x6+10,y6+35);
    ellipse(x6, y6, size, (size+10));
    
    triangle(x7,y7,x7-10,y7+35,x7+10,y7+35);
    ellipse(x7, y7, size, (size+10));
    
    triangle(x8,y8,x8-10,y8+35,x8+10,y8+35);
    ellipse(x8, y8, size, (size+10));
    
    triangle(x9,y9,x9-10,y9+35,x9+10,y9+35);
    ellipse(x9, y9, size, (size+10));
    
    triangle(x10,y10,x10-10,y10+35,x10+10,y10+35);
    ellipse(x10, y10, size, (size+10));
    
    triangle(x11,y11,x11-10,y11+35,x11+10,y11+35);
    ellipse(x11, y11, size, (size+10));
    
    
    triangle(x12,y12,x12-10,y12+35,x12+10,y12+35);
    ellipse(x12, y12, size, (size+10));
    
    triangle(x13,y13,x13-10,y13+35,x13+10,y13+35);
    ellipse(x13, y13, size, (size+10));
    
    triangle(x14,y14,x14-10,y14+35,x14+10,y14+35);
    ellipse(x14, y14, size, (size+10));
    
    fill(#c6214d);
    
    triangle(x1,y1,x1-10,y1+35,x1+10,y1+35);
    ellipse(x1, y1, size, (size+10));
    
    triangle(x2,y2,x2-10,y2+35,x2+10,y2+35);
    ellipse(x2, y2, size, (size+10));
    
    triangle(x3,y3,x3-10,y3+35,x3+10,y3+35);
    ellipse(x3, y3, size, (size+10));
    
    triangle(x4,y4,x4-10,y4+35,x4+10,y4+35);
    ellipse(x4, y4, size, (size+10));
    
    triangle(x5,y5,x5-10,y5+35,x5+10,y5+35);
    ellipse(x5, y5, size, (size+10));
    
     //bumblebee pointer
     fill (#d2ed28);
     triangle(mouseX+15,mouseY, mouseX-15, mouseY, mouseX, mouseY-15);
     triangle(mouseX+15,mouseY, mouseX-15, mouseY, mouseX, mouseY+15);
  
   //game overscenarios
    if (gameOver >= 1){
      println("BOOM! YOU HIT A BOMB! No points this time. Stop and Retry!");
      fill(0);
      rect(0,0,width,height);
      fill(#c6214d);
       textsize = 40;
       textSize(textsize);
       text(gameOverr, 55, 55, 300, 600);
        noLoop();
      
    }
    if(y6 < 0 && y7 < 0 && y8 < 0 && y9 < 0 && y10 < 0 && y11 < 0 && y12 < 0 && y13 < 0 && y14 < 0){
       scen += 1;
       noLoop();
    }
    if(scen >= 1){
       println("OH NO! The balloons are out of reach! You got " +score+ " points. ( " +hits+ " " +hitString+ " & " +miss+ " " + missString +") Stop and Retry to beat your score");
        fill(0);
        rect(0,0,width,height); 
        fill(#c6214d);
        textsize = 40;
       textSize(textsize);
       text(ohno, 55, 55, 300, 600);
        noLoop();
    }
  
  //all whites popped
    if(y6 > height && y7 > height && y8 > height && y9 > height && y10 > height && y11 > height && y12 > height && y13 > height && y14 > height){
      println("Great job you got all the balloons! You got " +score+ " points. ( " +hits+ " " +hitString+ " & " +miss+ " " + missString +") Stop and Retry to beat your score");
        fill(0);
        rect(0,0,width,height); 
        fill(#c6214d);
        textsize = 40;
       textSize(textsize);
       text(scenario, 55, 55, 300, 600);
       noLoop();
    }
  
  //reset the sound
    if(player.isPlaying() == false){
     player.rewind(); 
    }
    if(myPlayer.isPlaying() == false){
     myPlayer.rewind(); 
    }
    if(myPlayer1.isPlaying() == false){
     myPlayer1.rewind(); 
    }
 //hit/miss string
   if(hits == 1){
    hitString = "hit"; 
   }
   else{
    hitString = "hits"; 
   }
   if(miss == 1){
    missString = "miss"; 
   }
   else{
    missString = "misses"; 
   }
 }
}

void mousePressed() {
  if(dist(mouseX,mouseY, x1, y1) < size){
      gameOver += 1;
      myPlayer.play();
    }
    else if(dist(mouseX,mouseY, x2, y2) < size){
      gameOver += 1;
      myPlayer.play();
    }
    else if(dist(mouseX,mouseY, x3, y3) < size){
      gameOver += 1;
      myPlayer.play();
    }
    else if(dist(mouseX,mouseY, x4, y4) < size){
      gameOver += 1;
      myPlayer.play();
    }
    else if(dist(mouseX,mouseY, x5, y5) < size){
      gameOver += 1;
      myPlayer.play();
    }
    else if(dist(mouseX,mouseY, x6, y6) < size){
      y6 = 9000;
      player.play();
      score += 1;
      hits += 1;
    }
    else if(dist(mouseX,mouseY, x7, y7) < size){
      y7 = 9000;
      player.play();
      score += 1;
      hits += 1;
    }
    else if(dist(mouseX,mouseY, x8, y8) < size){
      y8 = 9000;
      player.play();
      score += 1;
      hits += 1;
    }
    else if(dist(mouseX,mouseY, x9, y9) < size){
      y9 = 9000;
      player.play();
      score += 1;
      hits += 1;
    }
    else if(dist(mouseX,mouseY, x10, y10) < size){
      y10 = 9000;
      player.play();
      score += 1;
      hits += 1;
    }
     else if(dist(mouseX,mouseY, x11, y11) < size){
      y11 = 9000;
      player.play();
      score += 1;
      hits += 1;
    }
     else if(dist(mouseX,mouseY, x12, y12) < size){
      y12 = 9000;
      player.play();
      score += 1;
      hits += 1;
    }
     else if(dist(mouseX,mouseY, x13, y13) < size){
      y13 = 9000;
      player.play();
      score += 1;
      hits += 1;
    }
     else if(dist(mouseX,mouseY, x14, y14) < size){
      y14 = 9000;
      player.play();
      score += 1;
      hits += 1;
    }
    else {
      miss += 1;
      score -= (miss/2);
      println("miss!");
      myPlayer1.play();
    }
}
void keyTyped(){
  if(key =='p' || key == 'P') {
    a = 0;
    b = 0;
  }
  
}