class Pixel {
	constructor(x, y, w){
		this.x = x;
		this.y = y;
		this.w = w;
		this.col = 125;
	}

	show(){
		fill(this.col);
		rect(this.x, this.y, this.w, this.w);
	}
  
	onClick(mx,my){
		if(mx>= this.x && mx <= (this.x+this.w)&& my >=this.y && my <= (this.y+this.w)){
			this.col = 0;
			return true;
		}
	}
}
