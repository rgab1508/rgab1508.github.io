function preBre(x1, y1, x2, y2) {
  let points = [];
  let dx = x2 - x1;
  let dy = y2 - y1;

  let error = 2 * dy - dx;
  let y = y1;
  for (let x = x1; x <= x2; x++) {
    points.push([x, y]);
    if (error > 0) {
      y = y + 1;
      error = error - 2 * dx;
    }
    error = error + 2 * dy;
  }
  return points;
}

//console.log(bre(1, 1, 5, 5));

function bre(x1, y1, x2, y2) {
  let points = [];
  let dx = Math.abs(x2 - x1);
  let sx = x1 < x2 ? 1 : -1;
  let dy = -Math.abs(y2 - y1);
  let sy = y1 < y2 ? 1 : -1;
  let err = dx + dy;

  while (true) {
    points.push([x1, y1]);
    if (x1 == x2 && y1 == y2) {
      break;
    }
    let e2 = 2 * err;
    if (e2 >= dy) {
      err += dy;
      x1 += sx;
    }
    if (e2 <= dx) {
      err += dx;
      y1 += sy;
    }
  }
  return points;

}

function tBre(x1, y1, x2, y2){
  let points = [];
  return points;
}

function test(){
  let points = bre(1,1,8,5);
  console.log(points );
  
}

test();
