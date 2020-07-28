let x = 10 , y = 0;
let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789%$#@!^&~';
let charGrid = new Array();
let charW = 25, charH = 25;
let nWChar, nHChar;
let tops = [];

function pickChar(){
  return chars.substr(Math.floor(Math.random() * chars.length),1);
}

class Topper{
  constructor(x) { 
    this.x = x;
    this.arr = [];
    this.speed = (Math.random() * 2)+1;
    let y = -(Math.floor(Math.random()*150)-1);
    let n = Math.floor((nWChar + nHChar)/2)
    for(let i=0;i<n;i++){
      let c = pickChar();
      let cObj = {
        x: this.x,
        y: y,
        char: c,
        size : Math.random() * (charW - 10) + 10
      }
      y -= charH;
      this.arr.push(cObj);
    }
    
  }
  
  update(){
    for(let a of this.arr){
      a.y += this.speed;
    }
  }
  
  show(){
    for(let a of this.arr){
      textSize(a.size);
      stroke(0, 255, 0);
      text(a.char, a.x, a.y);
    }
  }
  
  ends(){
    return this.arr[this.arr.length - 1].y > height;
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
  for(let i=0;i<tops.length;i++){
    if(tops[i].ends()){
      let x = tops[i].x;
      tops[i]= new Topper(x);
    }
  }
  // for(let i = 0;i<width;i+=1){
  //   text("G", x*i, y-10);
  // }
  // y += 1;
}

