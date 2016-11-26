function Ground(width, height, x, y) {
	this.width = width 
	this.height = height 
	this.x = x
	this.y = y
}

Ground.prototype.render = function(context){
	context.fillStyle = "green";
	context.fillRect(this.x, this.y, this.width, this.height);
}


function Chicken(width, height, x, y) {
	this.width = width;
	this.height = height; 
	this.x = x;
	this.y = y;
}

Chicken.prototype.render = function(context){
	context.fillStyle = "white";
	context.fillRect(this.x, this.y, this.width, this.height);	
}

function Raccoon(width, height, x, y) {
	this.width = width;
	this.height = height;
	this.x = x;
	this.y = y;
}

Raccoon.prototype.render = function(context){
	context.fillStyle = "black";
	context.fillRect(this.x, this.y, this.width, this.height);
}