let grid;
let start=[];
let end = [];
var state= '';

let ymxPoints = [];
let ddaPoints = [];
let brePoints = [];

let ymxCheckVal = true;
let ddaCheckVal = false;
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
  
  
  renderPoints();
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
 // renderPoints();
}



function createUI(){
    let b = createButton('Calculate' );
  b.mousePressed(calculateLine);
  let uiBtnDiv = select('.ui_btn_div');
  state = 'START';
  b.addClass('btn');
  b.addClass('black');
  
  b.parent(uiBtnDiv);
  let sButton = createButton('start point');
  sButton.addClass('btn');
  sButton.parent(uiBtnDiv);
    sButton.addClass('black');
  
  let eButton = createButton('end Point');
  eButton.addClass('btn');
  eButton.addClass('black');
  eButton.parent(uiBtnDiv);
  
  
  let clearButton = createButton('Clear');
  clearButton.addClass('btn');
  clearButton.addClass('black');
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
  ymxCheck.checked = ymxCheckVal? 'checked': '';
  
  ymxCheck.onclick = function(){
    ymxCheckVal = this.checked;
    renderPoints();
  }
  let ddaCheck = document.getElementById('ddaCheck');
  ddaCheck.checked = ddaCheckVal? 'checked': '';
  ddaCheck.onclick = function(){
    ddaCheckVal = this.checked;
    renderPoints();
  }
  let breCheck = document.getElementById('breCheck');
  breCheck.checked = breCheckVal? 'checked':'';
  breCheck.onclick= function(){
    breCheckVal = this.checked;
    renderPoints();
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
