let grid;
let start=[];
let end = [];
var state= '';

let ymxCheckVal = false;
let ddaCheckVal = true;
let breCheckVal = false;

let col; 



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
      console.log(i, 'no error');
      console.log(points);
      
      let el = points[i];
      grid.pixels[el[0]][el[1]].col = col['DDA'];
    }
  }else if (breCheckVal) {
    let points = bre(start[0], start[1], end[0], end[1]);
    for (let i = 0; i < points.length; i++) {
    
  
      let el = points[i];
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
