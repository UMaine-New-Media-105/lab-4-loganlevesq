function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  myTriangle(150, 160, 2, "hsla(100,50%,50%,1)");
  myEllipse(200, 80, 1, "hsla(200,50%,50%,1)");
  myShape(150, 320, 2, "hsla(20,50%,50%,1)");
}

function myTriangle(x, y, size, color) {
  push();
  translate(x, y);
  scale(size);
  fill(color);
  triangle(0, 50, 50, 50, 25, 0);
  pop();
}
function myEllipse(x, y, size, color) {
  push();
  translate(x, y);
  scale(size);
  fill(color);
  ellipse(0, 0, 100, 100);
  pop();
}

function myShape(x, y, size, color) {
  push();
  translate(x, y);
  scale(size);
  fill(color);
  beginShape();
  vertex(0, 0);
  vertex(50, 0);
  vertex(70, 30);
  vertex(-20, 30);
  vertex(0, 0);
  endShape();
  pop();
}
