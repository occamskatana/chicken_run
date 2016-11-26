var height;
var width;
var canvasContainer;
var canvas;
var context;

function getWindowDimensions(){
	height = $(window).height();
	width = $(window).width();
	$('body').width(width)
}

function instantiateCanvas(){
	canvasContainer = document.getElementById('canvas-container');
	canvas = document.createElement('canvas');
	canvas.id = "Canvas";
	canvas.width = width;
	canvas.height = height;
	$(canvasContainer).height(height);
	$(canvasContainer).width(width);
	canvasContainer.appendChild(canvas)
	context = canvas.getContext('2d');
}

function instantiateAssets(){
	var ground = new Ground(width, height, 0, 0)
	var chicken = new Chicken(width / 40, height / 15, width / 2, height / 2);
	ground.render(context);
	chicken.render(context);
	console.log(chicken)
	console.log(ground)
}

function step(){
	
}

$(document).ready(function(){
	getWindowDimensions();
	instantiateCanvas();
	instantiateAssets();
})


var animate = window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame    ||
        window.oRequestAnimationFrame      ||
        window.msRequestAnimationFrame     ||
        function(callback) { window.setTimeout(callback, 1000/60) };