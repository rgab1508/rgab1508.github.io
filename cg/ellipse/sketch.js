let grid;
let n = 20;

let x, y, rx, ry;
let xInp, yInp, rxInp, ryInp;

function calcEllipse(x, y, rx, ry){
  grid.clear();
  let points = mpea(x, y, rx, ry);
  for(let p of points){
    console.log(p);
    grid.pixels[p[0]][p[1]].col = color(51);
  }
}


function setup(){
  x = 10;
  y = 10;
  rx = 5;
  ry = 5;
  let c = createCanvas(600, 600);
  c.parent(select('#cnvs'));
  
  grid = new Grid(n, width, height);
  grid.init();
  
  xInp = select('#x');
  xInp.value(x);
  yInp = select('#y');
  yInp.value(y);
  rxInp = select('#rx');
  rxInp.value(rx);
  ryInp = select('#ry');
  ryInp.value(ry);
  let calcButton = select("#calc");
  
  calcButton.mousePressed(function(){
    x = parseInt(xInp.value());
    y = parseInt(yInp.value());
    rx = parseInt(rxInp.value());
    ry = parseInt(ryInp.value());
  
    
    calcEllipse(x, y, rx, ry);
  });
}

function draw (){
  background(0);
  grid.show();
  
}
