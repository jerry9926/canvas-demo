function Demo(canvas){
	this.content = canvas.getContext('2d');
}
/*
*	lineWidth
*	lineJoin
*	strokeStyle
*	lineCap
*	fillStyle
*	shadowColor
*	shadowOffsetX
*	shadowOffsetY
*	shadowBlur
*	------------------
*	beginPath
*	moveTo
*	lineTo
*	stroke
*	translate
*	save
*	restore
*	fill
*	fillRect
*	strokeRect
*	clearRect
*	quadraticCurreTo
*	drawImage
*	addColorStop
*	createLinearGradient
*	createRadialGradient
*	createPattern
*	scale
*	rotate
*	transform
*	fillText
*	strokeText
*	getImageData
*	putImageData
*	createImageData
*	closePath
*
*/
Demo.prototype = {
	line: function(){
		/*
		* beginPath
		* lineTo
		* stroke
		*/
		var content = this.content,
		x = 0,
		y = 0,
		n = 50;

		content.beginPath();

		for(; y <= 300; y = y + n){
			for(var i = 0; i < 2; i ++){
				// console.log('x ' + x + ', y ' + y);
				content.lineTo(x, y);	
				x = i%2 === 1 ? x : x + n;
			}
		}

		content.stroke();
	},

	lineClose: function(){
		/*
		* translate
		* closePath
		* fillStyle
		* fill
		*/
		var content = this.content;

		content.beginPath();
		content.translate(100, 100);
		content.lineTo(50, 0);
		content.lineTo(50, -50);
		content.lineTo(100, -50);
		content.lineTo(100, 0);
		content.lineTo(150, 0);
		content.lineTo(150, 50);
		content.lineTo(100, 50);
		content.lineTo(100, 100);
		content.lineTo(50, 100);
		content.lineTo(50, 50);
		content.lineTo(0, 50);
		content.lineTo(0, 0);

		content.closePath();
		content.fillStyle = '#FFFF00';
		content.fill()
		// content.stroke();
	},

	quadraticCurreTo: function(){
		/*
		* moveTo
		* quadraticCurveTo
		*/
		var content = this.content;

		content.beginPath();
		content.moveTo(20,20);
		content.quadraticCurveTo(20,100,200,20);
		content.stroke();
	},

	fillRect: function(){
		/*
		* lineStyle
		* fillRect
		* strokeRect
		* clearRect
		*/
		var content = this.content;

		content.translate(100, 100);
		content.fillStyle = '#FFFF00';
		content.lineStyle = '#000000';
		content.fillRect(0, 0, 50, 50);
		content.strokeRect(0, 0, 50, 50);
		setTimeout(function(){
			content.clearRect(0, 0, 50, 50);
		},2000)
	},

	createLinearGradient: function(){
		/*
		* createLinearGradient
		* addColorStop
		*/
		var content = this.content,
		trunkGradient = content.createLinearGradient(0, 0, 300, 0);

		trunkGradient.addColorStop(0, 'red');
		trunkGradient.addColorStop(1, 'black');

		content.fillStyle = trunkGradient;
		content.fillRect(0, 0, 300, 300);
		content.strokeRect(0, 0, 300, 300);
	},

	createRadialGradient: function(){
		/*
		* createRadialGradient
		* addColorStop
		*/
		var content = this.content,
		trunkGradient = content.createRadialGradient(150, 150, 3, 150, 150, 150);

		trunkGradient.addColorStop(0, 'white');
		trunkGradient.addColorStop(1, 'black');

		content.fillStyle = trunkGradient;
		content.fillRect(0, 0, 300, 300);
		content.strokeRect(0, 0, 300, 300);
	},

	text: function(){
		
	}
}