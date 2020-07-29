let grid;
let n = 10;

let x, y, rx, ry;
let xInp, yInp, rxInp, ryInp;

function calcEllipse(x, y, rx, ry){
  let points = mpea(x, y, rx, ry);
  for(let p of points){
    grid.pixels[p[0]][p[1]].col = color(51);
  }
}


function setup(){
  let c = createCanvas(400, 400);
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
  ryINp.value(ry);
  let calcButton = select("#calc");
  
  calcButton.mousePressed(function(){
    x = xInp.value();
    y = yInp.value();
    rx = rxInp.value();
    ry = ryInp.value();
  
    
    calcEllipse(x, y, rx, ry);
  });
}

function draw (){
  background(0);
  grid.show();
  
}
