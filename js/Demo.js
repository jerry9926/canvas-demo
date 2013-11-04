function Demo(canvas){
	this.content = canvas.getContext('2d');
	this.first = true;
}
/*
*	lineWidth		`
*	lineJoin		`
*	lineCap			`
*	strokeStyle		`
*	fillStyle		`
*	shadowColor		`
*	shadowOffsetX	`
*	shadowOffsetY	`
*	shadowBlur		`
*	------------------
*	beginPath	`
*	moveTo		`
*	lineTo		`
*	stroke 		`
*	translate 	`
*	save		`
*	restore		`
*	fill 		`
*	fillRect	`
*	strokeRect	`
*	clearRect	`
*	quadraticCurreTo	`
*	drawImage			`
*	addColorStop		`
*	createLinearGradient	`
*	createRadialGradient	`
*	createPattern		`
*	scale 		`
*	rotate 		`
*	transform
*	fillText		`
*	strokeText		`
*	measureText		`
*	getImageData 	`
*	putImageData	`
*	createImageData	`
*	closePath		`
*
*/
Demo.prototype = {

	lineBase: function(){
		/*
		* lineCap
		*/
		var content = this.content;

		content.lineWidth = 20;
		content.lineCap = 'round';
		content.moveTo(50, 50);
		content.lineTo(200, 50);
		content.stroke();

		content.lineWidth = 10;
		content.lineCap = 'square';
		content.moveTo(50, 100);
		content.lineTo(200, 100);
		content.stroke();
	},

	line: function(){
		/*
		* beginPath
		* lineTo
		* stroke
		* lineWidth
		* lineJoin
		*/
		var content = this.content,
		x = 0,
		y = 0,
		n = 50;

		content.beginPath();
		content.lineWidth = 10;
		content.lineJoin = 'round';

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

	shadow: function(){
		/*
		*	shadowColor
		*	shadowOffsetX
		*	shadowOffsetY
		*	shadowBlur
		*/
		var content = this.content,
		trunkGradient = content.createLinearGradient(0, 0, 300, 0);

		trunkGradient.addColorStop(0, 'red');
		trunkGradient.addColorStop(1, 'white');

		content.fillStyle = trunkGradient;

		content.shadowColor = 'black';
		content.shadowBlur = 5;
		content.save();
		content.translate(50, 50);
		content.fillRect(0, 0, 50, 50);
		content.restore();

		content.save();
		content.shadowOffsetX = 20;
		content.translate(50, 150);
		content.fillRect(0, 0, 50, 50);
		content.restore();

		content.save();
		content.shadowOffsetY = 10;
		content.translate(150, 50);
		content.fillRect(0, 0, 50, 50);
		content.restore();

		content.save();
		content.shadowOffsetX = 10;
		content.shadowOffsetY = 10;
		content.translate(150, 150);
		content.fillRect(0, 0, 50, 50);
		content.restore();

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
		/*
		*	fillText
		*	strokeText
		*	measureText
		*/
		var content = this.content;
		trunkGradient = content.createLinearGradient(0, 0, 300, 0),
		text = 'Hello world!!!',
		font = '45px Verdana';

		trunkGradient.addColorStop(0, 'blue');
		trunkGradient.addColorStop(1, 'red');

		// fillStyle fillText 结合使用
		content.font = font;
		content.fillStyle = trunkGradient;
		content.fillText(text, 0, 170);

		// strokeStyle strokeText 结合使用
		content.font = font;
		content.strokeStyle = trunkGradient;
		content.strokeText(text, 0, 100);

		content.font = font;
		content.fillText('width=' + content.measureText(text).width, 0, 230);
	},

	imgBase: function(){
		/*
		*	drawImage
		*/
		var content = this.content,
		img = new Image();

		img.src = 'http://www.w3school.com.cn/i/eg_tulip.jpg';

		img.onload = function(){
			content.drawImage(img, 0, 0);
		}
	},

	imgCut: function(){
		var content = this.content,
		img = new Image();

		img.src = 'http://www.w3school.com.cn/i/eg_tulip.jpg';

		img.onload = function(){
			content.drawImage(img, 100, 100, 150, 150, 0, 0, 150, 150);
		}
	},

	createPattern:function(){
		/*
		*	createPattern
		*/
		var content = this.content,
		img = new Image(),
		pat ;

		img.src = 'http://www.w3school.com.cn/i/lamp.gif';
		img.onload = function(){
			pat = content.createPattern(img,"repeat");

			content.fillStyle = pat;
			content.translate(50, 50);
			content.fillRect(0, 0, 200, 200);
		}
	},

	scale: function(){
		/*
		*	scale
		*/
		var content = this.content,
		count = 1,
		ratio = 0.9,
		timer;

		function doScale(ratio){
			var _ratio = ratio ;
			content.scale(_ratio, _ratio);
			content.strokeStyle = 'blue';
			content.strokeRect(0, 0, 300, 300);
			
			return _ratio - 0.01;
		}

		timer = setInterval(function(){
			if(ratio > 0.8){
				var _ratio = doScale(ratio);
				ratio = _ratio ;

				count ++;
			}else{
				console.log('count ' + count);
				clearInterval(timer);
			}
		},100)
	},

	rotate: function(){
		/*
		*	rotate
		*	save
		*	restore
		*/
		var content = this.content,
		count = 1,
		initAngle = 0,
		ratio = 10,
		timer;

		function doRotate(angle){
			// save restore 配合 translate rotate 使每次坐标轴回复初始状态
			// console.log(angle);
			content.save();
			content.strokeStyle = count%2 === 1 ? 'red' : 'blue';
			content.translate(150, 150);
			content.rotate(angle * Math.PI/180);
			content.strokeRect(0, 0, 50, 50);
			content.restore();
		}

		timer = setInterval(function(){
			if(initAngle < 360){
				doRotate(initAngle);
				initAngle = initAngle + ratio ;

				count ++;
			}else{
				console.log('count ' + count);
				clearInterval(timer);
			}
		},100)
	},

	createImageData: function(){
		/*
		*	createImageData
		*	putImageData
		*/
		var content = this.content,
		imgData = content.createImageData(100, 100);

		for(var i = 0; i < imgData.data.length; i+=4 ){
			imgData.data[i] = 255;
			imgData.data[i + 1] = 0;
			imgData.data[i + 2] = 0;
			imgData.data[i + 3] = 255;
		}

		content.putImageData(imgData, 50, 50);
	},

	getImageData: function(){
		/*
		*	getImageData
		*/
		var content = this.content,
		trunkGradient = content.createLinearGradient(0, 0, 300, 0),
		imgData;

		trunkGradient.addColorStop(0, 'red');
		trunkGradient.addColorStop(1, 'black');

		content.fillStyle = trunkGradient;
		content.fillRect(0, 0, 100, 100);

		imgData = content.getImageData(0, 0, 100, 100);
		content.putImageData(imgData, 150, 150);
	},

	setContent: function(){
		var content = this.content,
		first = this.first;

		if(first){
			content.save();
			this.first = false;
		}else{
			content.restore();
			content.translate(0, 0);
			content.clearRect(0, 0, 300, 300);
		}
	}

}