let x = 10 , y = 0;
let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
let charGrid = new Array();
let charW = 20, charH = 20;
let nWChar, nHChar;
let tops = [];

function pickChar(){
  return chars.substr(Math.floor(Math.random() * chars.length),1);
}

class Topper{
  constructor(x) { 
    this.arr = [];
    let y = 0;
    for(let i=0;i<nWChar;i++){
      let c = pickChar();
      let cObj = {
        x: x,
        y: y,
        char: c
      }
      y -= charH;
      this.arr.push(cObj);
    }
    
  }
  
  update(){
    for(let a of this.arr){
      a.y += 1;
    }
  }
  
  show(){
    textSize(charH);
    for(let a of this.arr){
      stroke(0, 255, 0);
      text(a.char, a.x, a.y);
    }
  }
}

function setup(){
  createCanvas(windowWidth, windowHeight);
  nWChar = width/charW;
  nHChar = height/charH;
  for(let i=0;i<nWChar;i++){
    tops[i] = new Topper(i*charW);
  }
  
}

function draw(){
  background(0);
  fill(255);
  stroke(0, 255, 0);
  for(let t of tops){
    t.update();
    t.show();
  }
  // for(let i = 0;i<width;i+=1){
  //   text("G", x*i, y-10);
  // }
  // y += 1;
}

