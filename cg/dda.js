function dda(x1, y1, x2, y2) {
  let points = [];
  let dx = (x2 - x1);
  let dy = (y2 - y1);
  let steps = 1;
  if (Math.abs(dx) > Math.abs(dy)) {
    steps = Math.abs(dx);
  } else {
    steps = Math.abs(dy);
  }
  let Xinc = dx / steps;
  let Yinc = dy / steps;
  /*
  if (x2 - x1 < 0) {
    Xinc = -Xinc;
  }
  if (y2 - y1 < 0) {
    Yinc = -Yinc;
  }
  */
  //points.push([x1, y1]);
  /*
  for(let i=0;i<steps;i++){
    let x = points[i][0]+Xinc;
    let y = points[i][1]+Yinc;
    points.push([Math.round(x), Math.round(y)]);
  }
  */
  let x = x1;
  let y = y1;
  //while(x < x2 && y < y2){
  for (let i = 0; i < steps; i++) {
    points.push([Math.round(x), Math.round(y)]);
    x += Xinc;
    y += Yinc;
  }
  points.push([x2, y2]);
  console.log('Steps', steps);
  console.log(x1, y1, x2, y2);
  console.log('incr', Xinc, Yinc);
  console.log(points);
  /*for(let i=0;i<points.length;i++){
    console.log('x: ', points[i][0]);
    console.log('y: ', points[i][0]);
  }*/
  return points;
}

//console.log(dda(1,1, 6, 7));