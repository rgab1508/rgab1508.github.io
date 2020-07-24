let grid;
let n = 20;

let x, y, r;

let rSlider, xSlider, ySlider;
let cButton, clearButton;

let rP, xP, yP;

let points = [];


function calCirc(r, x, y) {
  points = mpca(r, x, y);
  for (let p of points) {
    grid.pixels[p[0]][p[1]].col = color(51);
  }
}


function setup() {
  x = floor(n / 2);
  y = floor(n / 2);
  r = 5;
  createCanvas(800, 800);
  background(51);
  grid = new Grid(n, width, height);
  grid.init();

  cButton = createButton('Calculate');
  cButton.mousePressed(function() {
    calCirc(r, x, y);
  });
  clearButton = createButton('Clear');
  clearButton.mousePressed(function() {
    grid.clear();
  });
  rP = createP("r: " + r);
  rSlider = createSlider(1, 20, 1);
  rSlider.value(r);

  xP = createP("x: " + x);
  xSlider = createSlider(0, n - 1);
  xSlider.value(x);

  yP = createP("y: " + y);
  ySlider = createSlider(0, n - 1);
  ySlider.value(y);

  rSlider.changed(function() {
    r = this.value();
    rP.html("r: " + this.value());
  });

  xSlider.changed(function() {
      x = this.value();
      xP.html("r: " + this.value());
     
    //grid.clear();
  });

ySlider.changed(function() {
  y = this.value();
  yP.html("r: " + this.value());
  //grid.clear();
});

}

function mousePressed() {
  let pt = grid.mPressed(mouseX, mouseY);
  if (pt[0] != -1) {
    x = pt[0];
    y = pt[1];
  }
}

function draw() {
  grid.pixels[x][y].col = color(255, 0, 0);
  grid.show();
}