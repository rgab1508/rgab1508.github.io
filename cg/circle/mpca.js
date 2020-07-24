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
 
  points = sym8(points);
  console.log(points);
   for(let pt of points){
    //console.log(p);
    pt[0]+=x0;
    pt[1]+=y0;
  }
  return points;
}

function sym8(points){
  //@TODO
  let nPoints = [];
  //nPoints.push(...points);
  Array.prototype.push.apply(nPoints, points);
  for(let p of points){
    nPoints.push([p[1], p[0]]);
  }
  for(let p of points){
    nPoints.push([-p[1], p[0]]);
  }
  for (let p of points) {
    nPoints.push([-p[0], p[1]]);
  }
  for (let p of points) {
    nPoints.push([-p[0], -p[1]]);
  }
  for (let p of points) {
    nPoints.push([-p[1], -p[0]]);
  }
  for (let p of points) {
    nPoints.push([p[1], -p[0]]);
  }
  for (let p of points) {
    nPoints.push([p[0], -p[1]]);
  }
  return nPoints;
}

function notmpca(r, x0, y0){
  let points = [];
  
  for(let i=0;i<2*PI;i+=0.2) {
    let x = r*cos(i);
    let y = r*sin(i);
    points.push([floor(x),floor(y)]);
  }
  for(let p of points){
    p[0]+=x0;
    p[1]+=y0;
  }
  return points;
}

function test(){
  let p = mpca(5, 10, 10);
  console.log(p);
}

