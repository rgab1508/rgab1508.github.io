function pow2(a){
  return Math.pow(x, 2);
}

function region1(x0, y0, rx, ry){
  let points = [];
  let x = 0;
  let y = ry;
  let p = pow2(ry) - pow2(rx)*ry + (1/4)*pow2(rx);
  while(2*Math.pow(ry, 2)*x < 2*Math.pow(rx, 2)*y){
    if(p < 0){
      x++;
      p = p + 2*pow2(ry)*x+pow2(ry);
    }else{
      p = 0;
      x++;
      y--;
      p = p + 2*pow2(ry)*x - 2*pow2(rx)*y + pow2(ry);
    }
    points.push([x, y]);
  }
  return points;
}

function region2(x0, y0, rx, ry){
  let points = [];
  let x = x0;
  let y = y0;
  
  p = pow2(ry)*pow2(x0+0.5)+pow2(rx)*pow2(y0-1)-pow2(rx)*pow2(ry);
  while(y!= 0){
    if(p >0){
      y--;
      p = p - 2*pow2(rx)*(y)+pow2(rx);
    }else {
      x++;
      y--;
      p = p + 2*pow2(ry)*x - 2*pow2(rx)*y + pow2(rx);
    }
    points.push([x, y]);
  }
  return points;
  
}

function mpea(x, y, rx, ry){
  /*
    Midpoint Ellipse Algorithm
  */
  let points = [];
  points.push([0, ry]);
  let r1Points = region1(x, y, rx, ry);
  Array.prototype.push.apply(points, r1Points);
  let r2Points = region2(points[points.length-1][0], points[points.length-1][1], rx, ry);
  Array.prototype.push.apply(points, r2Points);
  console.log(points);
  
  points = sym4(points);
  for(let p of points){
    p[0] += x;
    p[1] += y;
  }
  return points;
}

function sym4(points){
  let nPoints = [];
  Array.prototype.push.apply(nPoints, points);
  
  for(let p of points){
    nPoints.push([p[0], -p[1]]);
  }
  for (let p of points) {
    nPoints.push([-p[0], -p[1]]);
  }
  for (let p of points) {
    nPoints.push([-p[0], p[1]]);
  }
  return nPoints;
}

function test(){
  console.log('ellipse: ', mpea(10, 10, 5, 5));
}

//test();