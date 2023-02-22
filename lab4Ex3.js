function setup() {
  createCanvas(400, 400);
}

function draw() {
  background("rgb(117,136,244)");

  mySprite(1, 1, 1);
}
function mySprite(x, y, size) {
  if (mouseIsPressed) {
    translate(x, y);
    scale(size);
    noStroke();

    //ear
    fill("rgb(236,209,172)");
    ellipse(330, 200, 50);
    ellipse(65, 200, 50);

    //head
    fill("tan");
    ellipse(200, 200, 280);

    //nose
    push();
    fill("rgb(236,209,172)");
    triangle(170, 210, 200, 170, 230, 210);
    pop();

    //mouth
    push();
    fill("white");
    angleMode(DEGREES);
    arc(200, 235, 150, 105, 0, 180);
    pop();
    fill("black");
    push();
    stroke(0);
    line(200, 235, 200, 288);
    line(220, 235, 220, 287);
    line(240, 235, 240, 281);
    line(260, 235, 260, 268);
    line(180, 235, 180, 287);
    line(160, 235, 160, 281);
    line(140, 235, 140, 268);
    line(133, 260, 267, 260);
    pop();

    //eyes
    fill("white");
    ellipse(150, 150, 50);
    ellipse(250, 150, 50);
    fill("black");
    ellipse(155, 150, 10);
    ellipse(255, 150, 10);
    //eylid
    push();
    fill("tan");
    ellipse(150, 110, 70);
    ellipse(250, 110, 70);
    pop();

    //hair
    fill("rgb(73,42,6)");
    ellipse(200, 88, 60);
    ellipse(250, 95, 60);
    ellipse(150, 90, 60);
    ellipse(120, 100, 60);
    ellipse(270, 103, 60);
    ellipse(300, 110, 60);
    ellipse(100, 88, 60);
    ellipse(120, 60, 60);
    ellipse(200, 55, 60);
    ellipse(160, 55, 60);
    ellipse(250, 60, 60);
    ellipse(290, 70, 60);
    ellipse(80, 130, 60);
    ellipse(310, 130, 60);
  } else {
    stroke(0);
    fill("tan");
    square(110, 110, 180);
    //eyes
    fill("white");
    square(150, 150, 30);
    square(220, 150, 30);
    fill("tan");
    rect(150, 150, 30, 5);
    rect(220, 150, 30, 5);
    fill("black");
    square(163, 163, 5);
    square(233, 163, 5);
    //mouth
    rect(150, 220, 100, 40);
  }
}

