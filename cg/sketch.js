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
  //let ymxTab = createElement('table');
  let ptTdDiv = select('#pt_tb_div');
  let ymxTb = createElement('table');
  console.log(ymxTb);
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

function createMatCheckBox(lab){
  let label = createElement('label');
  //let span = createElement('span');
  //span.innerHtml = lab;
  let span = createSpan(lab);
  span.parent(label);
  //let checkB = createCheckbox();
  let checkB = createInput('', 'checkbox');
  //input.attribute('type','checkbox');
  checkB.attribute('checked', 'checked');
  checkB.parent(label);
  return label;
}

function createUI(){
    let b = createButton('Calculate' );
  b.mousePressed(calculateLine);
  let uiBtnDiv = select('.ui_btn_div');
  state = 'START';
  b.addClass('btn');
  b.parent(uiBtnDiv);
  let sButton = createButton('start point');
  sButton.addClass('btn');
  sButton.parent(uiBtnDiv);
  
  let eButton = createButton('end Point');
  eButton.addClass('btn');
  eButton.parent(uiBtnDiv);
  
  
  let clearButton = createButton('Clear');
  clearButton.addClass('btn');
  clearButton.parent(uiBtnDiv);
  sButton.mousePressed(function(){
    state='START'
    grid.show();
  });
  eButton.mousePressed(function(){state='END'});
  clearButton.mousePressed(function(){
    grid.clear();
  });
  
  let ymxCheck = document.getElementById('ymxCheck');
  ymxCheck.onclick = function(){
    ymxCheckVal = this.checked;
    renderPoints();
  }
  let ddaCheck = document.getElementById('ddaCheck');
  ddaCheck.onclick = function(){
    ddaCheckVal = this.checked;
    renderPoints();
  }
  let breCheck = document.getElementById('breCheck');
  breCheck.onclick= function(){
    breCheckVal = this.checked;
    renderPoints();
  }
  /*
  let cc = createMatCheckBox('bro');
  cc.parent(uiDiv);
  let ymxCheck = createCheckbox('Slope Intercept form(y=mx+b) ', ymxCheckVal);
  ymxCheck.addClass('filled-in');
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
  });*/
}


function setup(){
  col =  {
     'START': color(100, 100, 0), 
     'END': color(0, 100, 50),
     'YMX': color(255, 0, 0),
     'DDA': color(0, 255, 0),
     'BRE': color(0, 0, 255),
   }
  let myCanvas = createCanvas(600, 600);
  let cnsDiv = select('.cns_div');
  myCanvas.parent(cnsDiv);
  grid = new Grid(10, width, height);
  grid.init();
  
  createUI();
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
