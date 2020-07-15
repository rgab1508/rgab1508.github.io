class Pixel {
	constructor(x, y, w){
		this.x = x;
		this.y = y;
		this.w = w;
	}

	show(){
		fill(150);
		rect(this.x, this.y, this.w, this.w);
	}
}

class Grid {
	constructor(n, w, h){
		this.n = n;
		this.w = w;
		this.h = h;
		this.step = w/n;
	}
	show(){
		for(let i=0;i<this.h;i+=this.step){
			for(let j=0;j<this.w;j+=this.step){
				let p = Pixel(i, j, this.step);
				p.show();
			}
		}
	}
}

function setup(){
	createCanvas(600,600);
	//let grid = Grid(10, width,height);
//	background(51);
	//grid.show();
}



function draw(){
	rect(50,50, 50, 50);
	background(51);
}
