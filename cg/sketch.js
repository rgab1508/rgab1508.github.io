let grid;
let start=[];
let end = [];
var state= '';

let ymxPoints = [];
let ddaPoints = [];
let brePoints = [];

let ymxCheckVal = false;
let ddaCheckVal = true;
let breCheckVal = false;

let col; 

function createPointsTable(){
  let ymxTab = createElement('table');
  
}

function calculateLine(){
  
  ymxPoints = ymx(start[0],start[1], end[0], end[1]);
 
  ddaPoints = dda(start[0],start[1], end[0], end[1]);
  
  brePoints = bre(start[0], start[1], end[0], end[1]);
  console.log(ymxPoints);
  console.log(ddaPoints);
  console.log(brePoints);
  
  createPointsTable();
}


function renderPoints(){
  grid.clear();
  if(ymxCheckVal){
    for (let i = 0; i < ymxPoints.length; i++) {
      let el = ymxPoints[i];
      grid.pixels[el[0]][el[1]].col = col['YMX'];
    } 
  }
  if(ddaCheckVal){
    for (let i = 0; i < ddaPoints.length; i++) {
    
      let el = ddaPoints[i];
      grid.pixels[el[0]][el[1]].col = col['DDA'];
    } 
  }
  if(breCheckVal){
    for (let i = 0; i < brePoints.length; i++) {
      let el = brePoints[i];
      grid.pixels[el[0]][el[1]].col = col['BRE'];
    } 
  }
}




function setup(){
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
  let clearButton = createButton('Clear');
  sButton.mousePressed(function(){
    state='START'
    grid.show();
  });
  eButton.mousePressed(function(){state='END'});
  clearButton.mousePressed(function(){
    grid.clear();
  });
  
  let ymxCheck = createCheckbox('Slope Intercept form(y=mx+b) ', ymxCheckVal);
  let ddaCheck = createCheckbox('DDA method', ddaCheckVal);
  let breCheck = createCheckbox('Bre method', breCheckVal);
  ymxCheck.changed(function() {
    if(this.checked()){
      ymxCheckVal = true
    }else{
      ymxCheckVal = false;
      
    }
    renderPoints();
 });
  
  ddaCheck.changed(function(){
    if(this.checked()) {ddaCheckVal = true;
    } 
    else {ddaCheckVal = false;} 
    renderPoints();
  });
  breCheck.changed(function() {
    if (this.checked()) {
      breCheckVal = true;
    } 
    else { breCheckVal = false; }
    renderPoints();
  });
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
