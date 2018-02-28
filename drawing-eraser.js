var diameter = 10
function setup() { 
  createCanvas(400, 400);
  background(255)
} 

function draw() { 
  if (mouseIsPressed) {
    noStroke();
    ellipse(mouseX, mouseY, diameter);
  }
}

function keyPressed() {
  print(key);
  if (key == 'A') {
    fill(255, 150, 150);
  } else if (key == 'B') {
    fill(160, 50, 220);
  } else if (key == 'C') {
    fill(159, 202, 100); 
  } else if (key == 'D') {
    fill(90, 155, 255); 
	} else if (key == 'E') {
    fill(200, 100, 255); 
	} else if (key == 'F') {
    fill(150, 100, 255); 
	} else if (key == 'G') {
    fill(255);
  }if (key == '1') {
    diameter = 20;
  } else if (key == '2') {
    diameter = 30;
  } else if (key == '3') {
    diameter = 40;}
}
