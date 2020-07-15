class Grid {
	constructor(n, w, h){
		this.n = n;
		this.w = w;
		this.h = h;
		this.step = w/n;
		this.pixels = [];
		for(let k=0;k<this.n;k++){
			this.pixels[k] = new Array();
		}
	}
	init(){
		let ic=0;
		for(let i=0;i<this.w;i+=this.step){
			let jc=0;
			for(let j=0;j<this.h;j+=this.step){
				let p = new Pixel(i, j, this.step);
				this.pixels[ic][jc] = p;
				jc++;
			}
			ic++;
		}
	///console.log(this.pixels[0][0].x);
	}
	show(){
	/*for(let p of this.pixels){
		p.show();
	}*/
		for(let i=0;i<this.pixels.length;i++){
			for(let j=0;j<this.pixels[0].length;j++){
				this.pixels[i][j].show();
			}
		}
	}

	mPressed(mx, my){
		for(let i=0;i<this.pixels.length;i++){
			for(let j=0;j<this.pixels[0].length;j++){
				if(this.pixels[i][j].onClick(mx, my)){
					return [i, j];
				}

			}
		}
		return [-1,-1];
	}

}
