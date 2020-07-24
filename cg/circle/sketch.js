let grid;
let n = 20;

let x, y, r;

let rSlider, xSlider, ySlider;


let rP,xP, yP;

function setup(){
  x=floor(n/2);
  y=floor(n/2);
  r=5;
  createCanvas(400, 400);
  background(51);
  grid = new Grid(n, width, height);
  grid.init();
  
  rSlider = createSlider(1, 20, 1);
  rSlider.value(r);
  xSlider = createSlider(0, n-1);
  xSlider.value(x);
  ySlider = createSlider(0, n-1);
  ySlider.value(y);
  
  rSlider.changed(function(){
    r = this.value();
    rP.html("r: "+ this.value());
  });
  
  xSlider.changed(function() {
   x = this.value();
    xP.html("r: " + this.value());
    grid.clear();
  });
  
  ySlider.changed(function() {
    y = this.value();
    yP.html("r: " + this.value());
    grid.clear();
  });
  
  rP = createP("r: "+rSlider.value());
  xP = createP("x: "+xSlider.value());
  yP = createP("y: "+ySlider.value());
  
}

function mousePressed(){
  let pt = grid.mPressed(mouseX, mouseY);
  if(pt[0]!=-1){
    x = pt[0];
    y= pt[1];
    grid.clear();
  }
}

function draw(){
  
  grid.pixels[x][y].col = color(255, 0, 0);
  grid.show();
}