var myAngle = 30;
var SPIcolor = '#3a7b83';

var gui;

function setup() {

  createCanvas(600, 600);

  // Create the GUI
  sliderRange(0, 90, 1);
  gui = createGui('Choose a color for your spider');
  gui.addGlobals('SPIcolor');
              
  // Only call draw when then gui is changed
  noLoop();

}


function draw() {

  // this is a piece of cake
  background(0);
  angleMode(DEGREES);
 	for (var x = 0; x < width; x += width / 10) {
		for (var y = 0; y < height; y += height / 10) {
			stroke(150);
			strokeWeight(1);
			line(x, 0, x, height);
			line(0, y, width, y);
		}
	}
   wifi();
 spider();
 
  
}


// dynamically adjust the canvas to the window
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
function wifi(){
  stroke('#e6e6e6');
  strokeWeight(2);
      line(width*0.5,height*0.3,width*0.5,height*0.55);
  noStroke();
  ellipse(width*0.5,height*0.3,width*0.03);
}
function spider(){
//leg left 1
  stroke(SPIcolor)
  strokeWeight(3);
    line(width*0.46,height*0.56,width*0.5,height*0.6);
    line(width*0.46,height*0.56,width*0.5,height*0.53);
  strokeWeight(2.5);
  ellipse(width*0.5,height*0.53,width*0.015);
  
//leg left 2
   strokeWeight(3);
    line(width*0.43,height*0.57,width*0.48,height*0.6);
    line(width*0.43,height*0.57,width*0.44,height*0.51);
  strokeWeight(2.5);
  ellipse(width*0.44,height*0.5,width*0.015);
  
  //leg left 3 
   strokeWeight(3);
    line(width*0.447,height*0.63,width*0.48,height*0.6);
    line(width*0.447,height*0.63,width*0.46,height*0.67);
  strokeWeight(2.5);
  ellipse(width*0.46,height*0.67,width*0.015);
  
// leg left 4 
     strokeWeight(3);
    line(width*0.48,height*0.62,width*0.473,height*0.63);
    line(width*0.473,height*0.63,width*0.485,height*0.66);
  strokeWeight(2.5);
  ellipse(width*0.485,height*0.66,width*0.015);
  
//leg right 1 
    strokeWeight(3);
    line(width*0.5,height*0.6,width*0.54,height*0.55);
    line(width*0.54,height*0.55,width*0.5,height*0.49);
    strokeWeight(2.5);
  ellipse(width*0.5,height*0.49,width*0.015);
  
  //leg right 2
   strokeWeight(3);
    line(width*0.53,height*0.59,width*0.56,height*0.56);
    line(width*0.56,height*0.56,width*0.55,height*0.48);
  strokeWeight(2.5);
  ellipse(width*0.55,height*0.48,width*0.015);
  
// leg right 3 
     strokeWeight(3);
    line(width*0.52,height*0.6,width*0.55,height*0.63);
    line(width*0.55,height*0.63,width*0.54,height*0.68);
  strokeWeight(2.5);
  ellipse(width*0.54,height*0.68,width*0.015);
 // leg right 4 
     strokeWeight(3);
    line(width*0.52,height*0.62,width*0.527,height*0.63);
    line(width*0.527,height*0.63,width*0.515,height*0.66);
  strokeWeight(2.5);
  ellipse(width*0.515,height*0.66,width*0.015); 
  
  



//body
  push()
  noStroke();
  fill(SPIcolor);

  ellipse(width*0.5,height*0.6,width*0.3/5);
 push();
  fill('white');
  ellipse(width*0.5,height*0.6,width*0.24/5);
  pop();
    ellipse(width*0.5,height*0.6,width*0.18/5);
  push();
  fill('white');
  translate(width*0.49,height*0.585);
  ellipse(0,0,width*0.04/5);
  pop();
  rect(width*0.496,height*0.551,width*0.008,width*0.025);
  pop();

}

