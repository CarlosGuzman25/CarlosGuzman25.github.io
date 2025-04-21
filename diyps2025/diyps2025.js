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
  img = loadImage('car.png');
  img2 = loadImage('mater.png');
  img3 = loadImage('disney.jpg');
  img4 = loadImage('elsa.png');
  img5 = loadImage('anna.png');
  img6 = loadImage('balloon.png');
  img7 = loadImage('balloon2.png');
  img8 = loadImage('hair.png');
  img9 = loadImage('flynn.png');
  img10 = loadImage('horse.png');
}

function setup() {
  createCanvas(600, 600);
  background(img3);
}

function draw() {
  if (keyIsPressed) {
    choice = key;
    clear_print();
  }
  if (mouseIsPressed) {
    newkeyChoice(choice);
  }
}
function newkeyChoice(toolChoice) {
  if (toolChoice == '1') {
    strokeWeight(8);
    line(mouseX, mouseY, pmouseX, pmouseY);
  } else if (toolChoice == '2') {
    stroke(20);
    line(mouseX, mouseY, pmouseX, pmouseY);
  } else if (toolChoice == '3') {
    stroke(255, 100, 10, 80);
    line(mouseX, mouseY, pmouseX, pmouseY);
  } else if (toolChoice == '4') {
    stroke(0, 0, 255);
    line(mouseX, mouseY, pmouseX, pmouseY);
  } else if (toolChoice == '5') {
    stroke(0, 0, 255);
    testbox(20, 20, 200);
    testbox(200, 20, 20);
  } else if (toolChoice == '6') {
    stroke(200);
    line(mouseX, mouseY, pmouseX, pmouseY);
  } else if (toolChoice == '7') {
    fill(100, 200, 100);
    rect(mouseX, mouseY, 20, 20);
  } else if (toolChoice == '8') {
    fill(255, 100, 0, 80);
    rect(mouseX, mouseY, 20, 20);
  } else if (toolChoice == '9') {
    fill(255, 100, 0, 80);
    rect(mouseX, mouseY, 40, 40);
  } else if (toolChoice == '0') {
    stroke(0, 0);
    fill(random(255), random(255), random(255), random(255));
    rect(mouseX, mouseY, 200, 150);
  } else if (toolChoice == 'g' || toolChoice == 'G') {
    image(img, mouseX, mouseY, 90, 90);
  } else if (toolChoice == 'f' || toolChoice == 'F') {
    image(img2, mouseX, mouseY, 90, 79);
  } else if (toolChoice == 'h' || toolChoice == 'H') {
    image(img4, mouseX, mouseY, 180, 180);
  } else if (toolChoice == 'j' || toolChoice == 'J') {
    image(img5, mouseX, mouseY, 110, 110);
  } else if (toolChoice == 'k' || toolChoice == 'K') {
    image(img6, mouseX, mouseY, 100, 100);
  } else if (toolChoice == 'l' || toolChoice == 'L') {
    image(img7, mouseX, mouseY, 110, 110);
  } else if (toolChoice == 'm' || toolChoice == 'M') {
    image(img8, mouseX, mouseY, 170, 170);
  }else if (toolChoice == 'n' || toolChoice == 'N') {
    image(img9, mouseX, mouseY, 200, 200);
  } else if (toolChoice == 'b' || toolChoice == 'B') {
    image(img10, mouseX, mouseY, 130, 130);
}
}
function testbox(r, g, b) {
  x = mouseX;
  y = mouseY;
  fill(r, g, b);
  rect(x - 50, y - 50, 100, 100);
}

function clear_print() {
  if (key == 'x' || key == 'X') {
    background(screenbg);
  } else if (key == 'p' || key == 'P') {
    saveme();
  }
}

function saveme() {
  filename = initials + day() + hour() + minute() + second();
  if (second() != lastscreenshot) {
    saveCanvas(filename, 'jpg');
    key = "";
  }
  lastscreenshot = second();
}
