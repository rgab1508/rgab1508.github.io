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
      y++;
      p = p + 2*pow2(ry)*x - 2*pow2(rx)*y + pow2(ry);
    }
    points.push([x, y]);
  }
  return points;
}

function region2(x0, y0, rx, ry){
  //@TODO
  let points = [];
  
  return points;
  
}

function mpea(x, y, rx, ry){
  /*
    Midpoint Ellipse Algorithm
  */
  let points = [];
  let r1Points = region1(x, y, rx, ry);
  Array.prototype.apply(points, r1Points);
  return points;
}

