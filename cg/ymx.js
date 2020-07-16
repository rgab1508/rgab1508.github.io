function ymx(x1, y1, x2, y2) {
  let points = [];
  if(x2 > x1){
    let px = x2;
    x2 = x1;
    x1 = px;
    let py = y2;
    y2 = y1;
    y1 = py;
  }
  let m = (y2 - y1) / (x2 - x1);
  let b = y1 - m * x1;

  for (let x = x1; x <= x2; x++) {
    let y = m * x + b;
    points.push([Math.round(x), Math.round(y)]);
  }
  return points;
}