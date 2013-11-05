function Demo(canvas){
	this.context = canvas.getContext('2d');
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
		var context = this.context;

		context.lineWidth = 20;
		context.lineCap = 'round';
		context.moveTo(50, 50);
		context.lineTo(200, 50);
		context.stroke();

		context.lineWidth = 10;
		context.lineCap = 'square';
		context.moveTo(50, 100);
		context.lineTo(200, 100);
		context.stroke();
	},

	line: function(){
		/*
		* beginPath
		* lineTo
		* stroke
		* lineWidth
		* lineJoin
		*/
		var context = this.context,
		x = 0,
		y = 0,
		n = 50;

		context.beginPath();
		context.lineWidth = 10;
		context.lineJoin = 'round';

		for(; y <= 300; y = y + n){
			for(var i = 0; i < 2; i ++){
				// console.log('x ' + x + ', y ' + y);
				context.lineTo(x, y);	
				x = i%2 === 1 ? x : x + n;
			}
		}

		context.stroke();
	},

	lineClose: function(){
		/*
		* translate
		* closePath
		* fillStyle
		* fill
		*/
		var context = this.context;

		context.beginPath();
		context.translate(100, 100);
		context.lineTo(50, 0);
		context.lineTo(50, -50);
		context.lineTo(100, -50);
		context.lineTo(100, 0);
		context.lineTo(150, 0);
		context.lineTo(150, 50);
		context.lineTo(100, 50);
		context.lineTo(100, 100);
		context.lineTo(50, 100);
		context.lineTo(50, 50);
		context.lineTo(0, 50);
		context.lineTo(0, 0);

		context.closePath();
		context.fillStyle = '#FFFF00';
		context.fill()
		// context.stroke();
	},

	quadraticCurreTo: function(){
		/*
		* moveTo
		* quadraticCurveTo
		*/
		var context = this.context;

		context.beginPath();
		context.moveTo(20,20);
		context.quadraticCurveTo(20,100,200,20);
		context.stroke();
	},

	fillRect: function(){
		/*
		* lineStyle
		* fillRect
		* strokeRect
		* clearRect
		*/
		var context = this.context;

		context.translate(100, 100);
		context.fillStyle = '#FFFF00';
		context.lineStyle = '#000000';
		context.fillRect(0, 0, 50, 50);
		context.strokeRect(0, 0, 50, 50);
		setTimeout(function(){
			context.clearRect(0, 0, 50, 50);
		},1000)
	},

	shadow: function(){
		/*
		*	shadowColor
		*	shadowOffsetX
		*	shadowOffsetY
		*	shadowBlur
		*/
		var context = this.context,
		trunkGradient = context.createLinearGradient(0, 0, 300, 0);

		trunkGradient.addColorStop(0, 'red');
		trunkGradient.addColorStop(1, 'white');

		context.fillStyle = trunkGradient;

		context.shadowColor = 'black';
		context.shadowBlur = 5;
		context.save();
		context.translate(50, 50);
		context.fillRect(0, 0, 50, 50);
		context.restore();

		context.save();
		context.shadowOffsetX = 20;
		context.translate(50, 150);
		context.fillRect(0, 0, 50, 50);
		context.restore();

		context.save();
		context.shadowOffsetY = 10;
		context.translate(150, 50);
		context.fillRect(0, 0, 50, 50);
		context.restore();

		context.save();
		context.shadowOffsetX = 10;
		context.shadowOffsetY = 10;
		context.translate(150, 150);
		context.fillRect(0, 0, 50, 50);
		context.restore();

	},

	createLinearGradient: function(){
		/*
		* createLinearGradient
		* addColorStop
		*/
		var context = this.context,
		trunkGradient = context.createLinearGradient(0, 0, 300, 0);

		trunkGradient.addColorStop(0, 'red');
		trunkGradient.addColorStop(1, 'black');

		context.fillStyle = trunkGradient;
		context.fillRect(0, 0, 300, 300);
		context.strokeRect(0, 0, 300, 300);
	},

	createRadialGradient: function(){
		/*
		* createRadialGradient
		* addColorStop
		*/
		var context = this.context,
		trunkGradient = context.createRadialGradient(150, 150, 3, 150, 150, 150);

		trunkGradient.addColorStop(0, 'white');
		trunkGradient.addColorStop(1, 'black');

		context.fillStyle = trunkGradient;
		context.fillRect(0, 0, 300, 300);
		context.strokeRect(0, 0, 300, 300);
	},

	text: function(){
		/*
		*	fillText
		*	strokeText
		*	measureText
		*/
		var context = this.context;
		trunkGradient = context.createLinearGradient(0, 0, 300, 0),
		text = 'Hello world!!!',
		font = '45px Verdana';

		trunkGradient.addColorStop(0, 'blue');
		trunkGradient.addColorStop(1, 'red');

		// fillStyle fillText 结合使用
		context.font = font;
		context.fillStyle = trunkGradient;
		context.fillText(text, 0, 170);

		// strokeStyle strokeText 结合使用
		context.font = font;
		context.strokeStyle = trunkGradient;
		context.strokeText(text, 0, 100);

		context.font = font;
		context.fillText('width=' + context.measureText(text).width, 0, 230);
	},

	imgBase: function(){
		/*
		*	drawImage
		*/
		var context = this.context,
		img = new Image();

		img.src = 'img/flower.jpg';

		img.onload = function(){
			context.drawImage(img, 0, 0);
		}
	},

	imgCut: function(){
		var context = this.context,
		img = new Image();

		img.src = 'img/flower.jpg';

		img.onload = function(){
			context.drawImage(img, 100, 100, 150, 150, 0, 0, 150, 150);
		}
	},

	createPattern:function(){
		/*
		*	createPattern
		*/
		var context = this.context,
		img = new Image(),
		pat ;

		img.src = 'img/lamp.gif';
		img.onload = function(){
			pat = context.createPattern(img,"repeat");

			context.fillStyle = pat;
			context.translate(50, 50);
			context.fillRect(0, 0, 200, 200);
		}
	},

	scale: function(){
		/*
		*	scale
		*/
		var context = this.context,
		count = 1,
		ratio = 0.9,
		timer;

		function doScale(ratio){
			var _ratio = ratio ;
			context.scale(_ratio, _ratio);
			context.strokeStyle = 'blue';
			context.strokeRect(0, 0, 300, 300);
			
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
		var context = this.context,
		count = 1,
		initAngle = 0,
		ratio = 10,
		timer;

		function doRotate(angle){
			// save restore 配合 translate rotate 使每次坐标轴回复初始状态
			// console.log(angle);
			context.save();
			context.strokeStyle = count%2 === 1 ? 'red' : 'blue';
			context.translate(150, 150);
			context.rotate(angle * Math.PI/180);
			context.strokeRect(0, 0, 50, 50);
			context.restore();
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
		var context = this.context,
		imgData = context.createImageData(100, 100);

		for(var i = 0; i < imgData.data.length; i+=4 ){
			imgData.data[i] = 255;
			imgData.data[i + 1] = 0;
			imgData.data[i + 2] = 0;
			imgData.data[i + 3] = 255;
		}

		context.putImageData(imgData, 50, 50);
	},

	getImageData: function(){
		/*
		*	getImageData
		*/
		var context = this.context,
		trunkGradient = context.createLinearGradient(0, 0, 300, 0),
		imgData;

		trunkGradient.addColorStop(0, 'red');
		trunkGradient.addColorStop(1, 'black');

		context.fillStyle = trunkGradient;
		context.fillRect(0, 0, 150, 300);

		imgData = context.getImageData(0, 0, 150, 300);
		context.putImageData(imgData, 150, 0);
	},

	setContext: function(){
		var context = this.context,
		first = this.first;

		context.restore();
		context.save();
		context.translate(0, 0);
		context.beginPath(); // 重置路径
		context.clearRect(0, 0, 300, 300); // 清空画布

	}

}