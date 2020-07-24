let grid;
let n = 10;


function setup(){
  createCanvas(800, 800);
  background(51);
  grid = new Grid(10, width, height);
  grid.init();
}

function draw(){
  grid.show();
 
}