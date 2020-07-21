let sym = 3;
let w2, h2;
let angle = 0;
let bSize = 10;
let bSlider, symSlider;

function setup(){
  createCanvas(400, 400);
  angleMode(DEGREES);
  w2 = width/2;
  h2 = height/2;
  background(51);
  bSlider = createSlider(1, 50, 0.5);
  bSlider.value(10);
  symSlider = createSlider(1, 10, 1);
  symSlider.value(sym);
}



function draw(){
  //background(51);
  bSize = bSlider.value();
 sym = symSlider.value();
  push();
  translate(w2, h2);
  rotate(angle);
  noStroke();
  fill(255);
  ellipse(mouseX - w2, mouseY - h2, bSize,bSize);
  ellipse(-mouseX+ w2, mouseY - h2, bSize, bSize);
  ellipse();
  pop();
  angle += 360 / sym;
}