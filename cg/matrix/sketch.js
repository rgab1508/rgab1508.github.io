let x = 10 , y = 0;
let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
let charGrid = new Array();
let charW = 10, charH = 10;

function setup(){
  createCanvas(windowWidth, windowHeight);
  
}

function draw(){
  background(0);
  fill(255);
  stroke(0, 255, 0);
  for(let i = 0;i<width;i+=1){
    text("G", x*i, y-10);
  }
  y += 1;
}

