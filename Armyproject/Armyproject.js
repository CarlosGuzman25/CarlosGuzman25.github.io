var img;
var img2;
var img3;
var img4;
var img5;
var img6;
var img7;
var img8;
var img9;
var img10;
var initials = 'cg'; // your initials
var choice = '1'; // starting choice
var screenbg = 250;
var lastscreenshot = 61;

function preload() {
  img = loadImage ('https://CarlosGuzman25.github.io/Armyproject/family.png')  
  img2 = loadImage ('https://CarlosGuzman25.github.io/Armyproject/bbq.png')
  img3 = loadImage ('beer.png')
  img4 = loadImage ('car.png')
  img5 = loadImage ('plant.png')
  img6 = loadImage ('bed.png')
  img7 = loadImage ('shower.png')
  img8 = loadImage ('church.png')
  img9 = loadImage ('book.png')
  img10 = loadImage ('music.png')
}
function setup() {
  createCanvas(800, 600);
  background(img);
}

function draw() {
  if (keyIsPressed) {
    choice = key;
//    clear_print();
  }
  if (mouseIsPressed) {
    newkeyChoice(choice);
  }
} // end draw


function newkeyChoice(toolChoice) {
  if (toolChoice == '1') {
   image(img2, mouseX, mouseY, 90, 90);}

  else if (toolChoice == '2') {
    image(img3, mouseX, mouseY, 150, 150);
  }
  else if (toolChoice == '3') {
    image(img4, mouseX, mouseY, 100, 100);
  }
  else if (toolChoice == '4') {
    image(img5, mouseX, mouseY, 100, 100);
  }
  else if (toolChoice == '5') {
    image(img6, mouseX, mouseY, 90, 90);
}
else if (toolChoice == '6') {
    image(img7, mouseX, mouseY, 110, 110);
}
else if (toolChoice == '7') {
    image(img8, mouseX, mouseY, 180, 180);
}
else if (toolChoice == '8') {
    image(img9, mouseX, mouseY, 180, 180);
}
else if (toolChoice == '9') {
    image(img10, mouseX, mouseY, 120, 120);
}
}
  
