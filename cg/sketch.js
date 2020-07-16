let grid;
let start=[];
let end = [];
var state= '';

let ymxCheckVal = false;
let ddaCheckVal = true;
let breCheckVal = false;

let col; 


function ymx(x1, y1, x2, y2){
  let points = [];
  let m = (y2 - y1)/(x2-x1);
  let b = y1 - m*x1;
 
  for(let x=x1;x<=x2;x++){
    let y = m*x + b;
    points.push([Math.round(x), Math.round(y)]);
  }
  return points;
}


function dda(x1, y1, x2, y2){
  let points = [];
  let dx = (x2-x1);
  let dy = (y2-y1);
  let steps = 1;
  if(Math.abs(dx)>Math.abs(dy)){
    steps = Math.abs(dx);
  }else{
    steps =Math.abs(dy);
  }
  let Xinc = dx/steps;
  let Yinc = dy/steps;
  //points.push([x1, y1]);
  /*
  for(let i=0;i<steps;i++){
    let x = points[i][0]+Xinc;
    let y = points[i][1]+Yinc;
    points.push([Math.round(x), Math.round(y)]);
  }
  */
  let x = x1;
  let y = y1;
  while(x < x2 && y < y2){
    
    points.push([Math.round(x), Math.round(y)]);
    x += Xinc;
    y += Yinc;
  }
  console.log(steps);
  console.log(points);
  /*for(let i=0;i<points.length;i++){
    console.log('x: ', points[i][0]);
    console.log('y: ', points[i][0]);
  }*/
  return points;
}



function calculateLine(){
  
  if(ymxCheckVal){
    let points = ymx(start[0],start[1], end[0], end[1]);
    for(let i=0;i<points.length;i++){
      let el = points[i];
      grid.pixels[el[0]][el[1]].col = col['YMX'];
    }
  }else if(ddaCheckVal){
    let points = dda(start[0],start[1], end[0], end[1]);
    for(let i=0;i<points.length;i++){
      let el = points[i];
      grid.pixels[el[0]][el[1]].col = col['DDA'];
    }
  }
}




function setup(){
 /* 
  col =  {
     'START': p5.Color(100, 100, 0),
     'END': p5.Color(0, 100, 50),
     'YMX': p5.Color(255, 0, 0),
     'DDA': p5.Color(0, 255, 0),
     'BRE': p5.Color(0, 0, 255),
   }
  */
  col =  {
     'START': color(100, 100, 0), 
     'END': color(0, 100, 50),
     'YMX': color(255, 0, 0),
     'DDA': color(0, 255, 0),
     'BRE': color(0, 0, 255),
   }
  createCanvas(600, 600);
  grid = new Grid(10, width, height);
  grid.init();
  let b = createButton('Calculate' );
  b.mousePressed(calculateLine);
  state = 'START';
  console.log(state);
  let sButton = createButton('start point');
  let eButton = createButton('end Point');
  sButton.mousePressed(function(){
    state='START'
    grid.show();
  });
  eButton.mousePressed(function(){state='END'});
  
  let ymxCheck = createCheckbox('Slope Intercept form(y=mx+b) ', ymxCheckVal);
  let ddaCheck = createCheckbox('DDA method', ddaCheckVal);
  let breCheck = createCheckbox('Bre method', breCheckVal);
  ymxCheck.changed(function() {
    if(this.checked()){
      ymxCheckVal = true
    }else{ymxCheckVal = false;}
 });
  
  ddaCheck.changed(function(){
    if(this.checked()) {ddaCheckVal = true;} 
    else {ddaCheckVal = false;} 
  });
  breCheck.changed(function() {
    if (this.checked()) {breCheckVal = true;} 
    else { breCheckVal = false; }
  })
}



function mousePressed(){
  let pp = grid.mPressed(mouseX, mouseY);

  if(pp[0]!= -1){
    if(state == 'START'){
      start = pp;
      state = 'END';
      grid.pixels[pp[0]][pp[1]].col = col['START'];
    }else if(state == 'END'){
      end = pp;
      grid.pixels[pp[0]][pp[1]].col = col['END'];
    }
  }
  /*
  console.log('start'+ start);
  console.log('end'+ end);
  */
}


function draw(){
  grid.show();
}
