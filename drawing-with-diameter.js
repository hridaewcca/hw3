function setup() { 
  createCanvas(400, 400);
} 

var diameter = 10;

function draw() { 
  if (mouseIsPressed) {
    ellipse(mouseX, mouseY, diameter);
  }
}

function keyPressed() {
  print(key);
  if (key == '1') {
    diameter = 20;
  } else if (key == '2') {
    diameter = 30;
  } else if (key == '3') {
    diameter = 40;
  }
}
