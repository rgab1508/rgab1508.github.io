function mpca(r, x0, y0){
  let points = [];
  let x=0;
  let y=r;
  points.push([x,y]);
  p = 1 - r;
  while(x<=y){
    //conditions
    x++;
    if(p<0){
      points.push([x, y]);
      p=p+(2*x)+1;
    }else if(p>=0){
      y--;
      points.push([x, y]);
      p=p+(2*x)+1-(2*y);
    }
  }
  for(let pt of points){
    console.log(p);
    pt[0]+=x0;
    pt[1]+=y0;
  }
  return points;
}


function test(){
  let p = mpca(5, 10, 10);
  console.log(p);
}

