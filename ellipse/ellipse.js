function setup() {
  createCanvas (600, 600);
  background(144, 194, 114);
}
function draw() {

  // Shirt
  fill(82, 67, 66);
  rect(123, 290, 160, 400, 20);
  //head
  fill(250, 242, 215)
 ellipse(200, 200, 200, 240);
 //left eye
fill(250);
ellipse(140,197,50,50);
//right eye
fill(250);
ellipse(260,197,50,50);
//mouth
fill(250, 156, 127);
arc(200, 250, 80, 80, 0, PI);
//left eye brown
fill(54, 25,12);
ellipse(140, 197, 23, 23);
//right eye brown
fill(54, 25, 12);
ellipse(260,197,23,23);
//left eye black
fill(8,8,7);
ellipse(140, 197, 10, 10);
//right eye black
fill(8,8,7);
ellipse(260,197,10,10);
// Hat crown (top part)
fill(0);
arc(200, 100, 160, 150, PI, 0, CHORD); // curved top of the hat
rect(120, 90, 160, 50); // body of the hat
// Hat brim
fill(250); // black hat
ellipse(200, 133, 180, 38); // brim of the hat
// CARLOS text on the hat
fill(255); 
textSize(24);
textStyle(BOLD);
text("CARLOS", 150, 90); 
// left eyebrow 
fill(54, 25, 12); 
triangle(120, 165, 140, 150, 165, 165);
// right eyebrow 
fill(54, 25, 12);
triangle(240, 165, 260, 150, 285, 165);
// nose 
fill(230, 190, 160); 
ellipse(200, 225, 20, 16);

}
