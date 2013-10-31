function Demo(canvas){
	this.content = canvas.getContext('2d');
}

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
	}
}