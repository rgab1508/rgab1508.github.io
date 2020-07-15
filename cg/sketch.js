let grid;
let start=[];
let end = [];
var state= '';



function ymx(x1, y1, x2, y2){
  let points = [];
  let m = (y2 - y1)/(x2-x1);
  let b = y1 - m*x1;
  
  for(let x=x1;x<=x2;x++){
    let y = m*x + b;
    points.push([Math.ceil(x), Math.ceil(y)]);
  }
  return points;
}




function calculateLine(){
  let points = ymx(start[0],start[1], end[0], end[1]);
  for(let i=0;i<points.length;i++){
    let el = points[i];
    grid.pixels[el[0]][el[1]].col = 0;
  }
}



function setup(){
  createCanvas(600, 600);
  grid = new Grid(10, width, height);
  grid.init();
  let b = createButton('Calculate' );
  b.mousePressed(calculateLine);
  state = 'START';
  console.log(state)
}



function mousePressed(){
  let pp = grid.mPressed(mouseX, mouseY);
  
  if(pp[0]!= -1){
    if(state == 'START'){
      start = pp;
      state = 'END';
    }else if(state == 'END'){
      end = pp;
    }
  }
  console.log('start', start);
  console.log('end', end);
}


function draw(){
  grid.show();
}
