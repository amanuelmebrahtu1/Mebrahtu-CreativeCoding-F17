   var x1;
   var x2;
   var x3;
   var y1;
   var y2;
   var y3;
   var colour;
   var y1x;
   var x2x;
   var x3x;


function setup() {
  // put setup code here
  createCanvas(500,800);
  angleMode(DEGREES);
  background(0);
  //translate((width/2),(height/2));
}

function draw() {
  x1 = 0;
  x2 = (400*-1);
  x3 = 400;
  y1 = (1400*-1);
  y2 = (15*-1);
  y3 = (15*-1);
  colour = [color (225), color (255), color ('#BD9F7B'), color('#C25B69'), color('#794A4A'), color(133,130,129), color('#824C4F'), color('#015A8C'), color('#A35C52'), color('#05495D'), color('#B43241'), color('#746C57'), color('#1D3264'),color('#AC3233'),color('#0C67BC'), color(220) ];
  // put drawing code here
  
  
  ellipse((width/2),(height/2), 40,40);
  
  
  //triangle(300,250,285,285,315,285);
  
  //triangle(x1,y1,x2, y2, x3,y3);
  
  	for(var n = 0; n < 15; n++){
 
			y1x = (y1+90*n);
  			x2x = (x2+(25+(2/3))*n);
  			x3x = (x3-(25+(2/3))*n);
  			fill(colour[n]);
  			//triangle(x1,y1x,x2x, y2, x3x,y3);
		//fill(colour[n]);
  		for(var i = 0; i<360 ; i+=72){
  			push();
  			translate((width/2),(height/2));
  			rotate(i);
  			noStroke();
  			fill(colour[n]);
  			triangle(x1,y1x,x2x, y2, x3x,y3);
  			pop();
  		}
  
  		
  	}			
  	
  	
  }



