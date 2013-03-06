/*
Created by Benjamin Chu
Contact: allthelosersare@gmail.com
Date Modified: March 5th, 2013
Project: Pixel Animation in HTML5 & Javascript
Version: 1.0
(c) 2013 - intechnicolor.net
- Please give credit where credit is due.  Please don't copy and claim as your own.
*/

var mainCanvas = document.getElementById("myCanvas");
var mainContext = mainCanvas.getContext('2d');

var canvasWidth = mainCanvas.width;
var canvasHeight = mainCanvas.height;

var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;

var pixels = new Array();

// Setting the size of each individual block
var size = 7;
// Setting the easing speed of each movement
var speed = 7;
// Setting the global reference point for the X and Y coordinates of the pixel art
var referenceXPoint = Math.round(canvasWidth*0.23828);
var referenceYPoint = Math.round(canvasHeight*0.46527);

// Array holding all the X coordinates of each pixel block
var locXArray = new Array();
	locXArray = [
				0, 0, 0, 0,
				20, 20, 20, 20, 30, 40, 50, 50, 50, 
				70, 80, 80, 80, 80, 90, 90, 
				110, 110, 120, 120, 120, 130, 130, 130, 140, 
				160, 160, 170, 180, 170, 180, 
				200, 200, 200, 200, 200, 210, 220, 230, 230, 230, 
				250, 250, 250, 250, 260, 270, 280, 280, 280, 
				300, 300, 300, 300, 
				320, 320, 330, 340, 330, 340, 
				360, 360, 370, 370, 380, 380, 390, 390, 
				410, 410, 410, 410, 410, 
				430, 430, 440, 440, 450, 450, 460, 460, 
				480, 480, 480, 480, 490, 500, 
				520, 
				540, 540, 540, 540, 550, 560, 570, 570, 570, 
				590, 590, 600, 600, 600, 610, 610, 610, 620, 
				640, 650, 650, 650, 650, 660, 660
				];
	
// Array holding all the Y coordinates of each pixel block
var locYArray = new Array();
	locYArray = [
				0, 20, 30, 40, 
				10, 20, 30, 40, 10, 10, 20, 30, 40, 
				10, 0, 10, 20, 30, 10, 40, 
				20, 30, 10, 30, 40, 10, 20, 40, 20, 
				20, 30, 10, 10, 40, 40, 
				0, 10, 20, 30, 40, 10, 10, 20, 30, 40, 
				10, 20, 30, 40, 10, 10, 20, 30, 40, 
				0, 20, 30, 40, 
				20, 30, 10, 10, 40, 40, 
				20, 30, 10, 40, 10, 40, 20, 30, 
				0, 10, 20, 30, 40, 
				20, 30, 10, 40, 10, 40, 20, 30, 
				10, 20, 30, 40, 20, 10, 
				40, 
				10, 20, 30, 40, 10, 10, 20, 30, 40, 
				20, 30, 10, 30, 40, 10, 20, 40, 20, 
				10, 0, 10, 20, 30, 10, 40
				];

// Array holding all Red attributes for the final color RGB
var redArray = new Array();
	redArray = [
				255, 255, 255, 255, 
				255, 255, 255, 255, 255, 255, 255, 255, 255, 
				231, 231, 231, 231, 231, 231, 231, 
				0, 0, 0, 0, 0, 0, 0, 0, 0, 0,  
				0, 0, 0, 0, 0, 0,
				0, 0, 0, 0, 0, 0, 0, 0, 0,
				130, 130, 130, 130, 130, 130, 130, 130, 130, 130, 
				126, 126, 126, 
				255, 255, 255, 255, 255, 255, 
				255, 255, 255, 255, 255, 255, 255, 255, 
				231, 231, 231, 231, 231, 
				0, 0, 0, 0, 0, 0, 0, 
				0, 0, 0, 0, 0, 0, 0,
				255, 
				0, 0, 0, 0, 0, 0, 0, 0, 0,
				0, 0, 0, 0, 0, 0, 0, 0, 0, 
				0, 0, 0, 0, 0, 0, 0,
				];

// Array holding all Green attributes for the final color RGB
var greenArray = new Array();
	greenArray = [
				0, 0, 0, 0, 
				128, 128, 128, 128, 128, 128, 128, 128, 128, 
				231, 231, 231, 231, 231, 231, 231,
				247, 247, 247, 247, 247, 247, 247, 247, 247, 247, 
				255, 255, 255, 255, 255, 255,
				191, 191, 191, 191, 191, 191, 191, 191, 191,
				0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
				0, 0, 0, 
				0, 0, 0, 0, 0, 0,  
				128, 128, 128, 128, 128, 128, 128, 128, 
				231, 231, 231, 231, 231, 
				247, 247, 247, 247, 247, 247, 247, 
				255, 255, 255, 255, 255, 255, 255,
				255, 
				191, 191, 191, 191, 191, 191, 191, 191, 191, 
				191, 191, 191, 191, 191, 191, 191, 191, 191, 
				191, 191, 191, 191, 191, 191, 191,
				];

// Array holding all Blue attributes for the final color RGB
var blueArray = new Array();
	blueArray = [
				0, 0, 0, 0, 
				0, 0, 0, 0, 0, 0, 0, 0, 0,
				0, 0, 0, 0, 0, 0,
				62, 62, 62, 62, 62, 62, 62, 62, 62, 62, 
				191, 191, 191, 191, 191, 191,
				255, 255, 255, 255, 255, 255, 255, 255, 255,
				175, 175, 175, 175, 175, 175, 175, 175, 175, 175, 
				0, 0, 0, 
				0, 0, 0, 0, 0, 0, 
				0, 0, 0, 0, 0, 0, 0, 0, 
				0, 0, 0, 0, 0, 0, 0, 
				62, 62, 62, 62, 62, 62, 62, 
				191, 191, 191, 191, 191, 191, 191,
				255, 
				255, 255, 255, 255, 255, 255, 255, 255, 255, 
				255, 255, 255, 255, 255, 255, 255, 255, 255, 
				255, 255, 255, 255, 255, 255, 255,
				];
	
// Pixel constructor and setting initial values upon pixel creation
function Pixel(initialX, initialY, initialized) {
	this.initialX = initialX;
	this.initialY = initialY;
	this.initialized = initialized;
	this.alpha = 1;
	this.alphaRate = Math.random()*(0.007);
	this.randRed = Math.floor(Math.random()*255);
	this.randGreen = Math.floor(Math.random()*255);
	this.randBlue = Math.floor(Math.random()*255);
	this.stepping = 0;
}

// Pixel prototype to handle redrawing on the canvas
Pixel.prototype.update = function (x, y, finalRed, finalGreen, finalBlue) {
	if (this.initialized == 0) {
		finalRed = this.randRed;
		finalGreen = this.randGreen;
		finalBlue = this.randBlue;
		this.currentX = this.initialX;
		this.currentY = this.initialY;
		mainContext.fillStyle = "rgba(" + finalRed + ", " + finalGreen + ", " + finalBlue + ", " + this.alpha + ")";
		mainContext.fillRect(this.currentX, this.currentY, size, size);
		this.initialized = 1;
	} else {
		finalX = x;
		finalY = y;
		if (Math.round(this.currentX) == finalX) {
			this.currentX = finalX;
			this.currentY += ((finalY - this.currentY) / speed);
			finalRed = finalRed;
			finalGreen = finalGreen;
			finalBlue = finalBlue;
			if (Math.round(this.currentY) == finalY) {
				this.currentY = finalY;
				if (this.stepping <= 3) {
					this.stepping++;
				}
				if (this.stepping == 4) {
					this.alpha -= this.alphaRate;
					if (this.alpha < 0.6) {
						this.alpha = 1;
					}
				}
			}
		} else {
			finalRed = this.randRed;
			finalGreen = this.randGreen;
			finalBlue = this.randBlue;
			this.currentX += ((finalX - this.currentX) / speed);
			
		}
		mainContext.fillStyle = "rgba(" + finalRed + ", " + finalGreen + ", " + finalBlue + ", " + this.alpha + ")";
		mainContext.fillRect(this.currentX, this.currentY, size, size);
	}
};

// Pixel prototype to handle the quarter movements to from initial position to the final position
Pixel.prototype.updateStep = function (x, y, finalRed, finalGreen, finalBlue) {
	halfXPos = Math.round((this.initialX + x) / 2);
	halfYPos = Math.round((this.initialY + y) / 2);
	
	firstQuarterXPos = Math.round((this.initialX + halfXPos) / 2);
	firstQuarterYPos = Math.round((this.initialY + halfYPos) / 2);
	
	secondQuarterXPos = Math.round((halfXPos + x) / 2);
	secondQuarterYPos = Math.round((halfYPos + y) / 2);
	
	if (this.stepping == 0) {
		this.update(firstQuarterXPos, firstQuarterYPos, finalRed, finalGreen, finalBlue);
	}
	else if (this.stepping == 1) {
		this.update(halfXPos, halfYPos, finalRed, finalGreen, finalBlue);
	}
	else if (this.stepping == 2) {
		this.update(secondQuarterXPos, secondQuarterYPos, finalRed, finalGreen, finalBlue);
	}
	else if (this.stepping >= 3) {
		this.update(x, y, finalRed, finalGreen, finalBlue);
	}
};

// Function to actually create each individual pixel and start the requestAnimationFrame() loop
function createPixels() {
	for (var i = 0; i < locXArray.length; i++) {
		var initialized = 0; 
		var initialX = Math.floor(Math.random()*canvasWidth);
		var initialY = Math.floor(Math.random()*canvasHeight);

		var pixel = new Pixel(initialX, initialY, initialized);
		pixels.push(pixel);
	}
	requestAnimationFrame(draw);
}
createPixels();

// Draw function to actually force each pixel to update
function draw() {
	mainContext.clearRect(0, 0, canvasWidth, canvasHeight);
	mainContext.fillStyle = "#000";
	mainContext.fillRect(0, 0, canvasWidth, canvasHeight);

	for (var i = 0; i < pixels.length; i++) {
		var pixel = pixels[i];
		pixel.updateStep(referenceXPoint + locXArray[i], referenceYPoint + locYArray[i], redArray[i], greenArray[i], blueArray[i]);
	}
	// Recursively draw again
	requestAnimationFrame(draw);
}
// end