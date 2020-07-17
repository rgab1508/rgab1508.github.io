function bre(x1, y1, x2, y2){
  let points = [];
  let dx = x2 - x1;
  let dy = y2 - y1;
  
  let error = 2*dy - dx;
  let y = y1;
  for(let x=x1;x<=x2;x++){
    points.push([x, y]);
    if(error > 0){
      y = y+1;
      error = error - 2 *dx;
    }
    error = error + 2 *dy;
  }
  return points;
}

//console.log(bre(1, 1, 5, 5));