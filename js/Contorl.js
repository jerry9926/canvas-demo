function Contorl(obj){
	this.obj = obj;
}

Contorl.prototype = {
	init: function(){
		var obj = this.obj,
		that = this;
		for(var key in obj){
			if (!obj.hasOwnProperty(key)) {
				// console.log(key);
				that.buildUI(key);
			}
		}
		that.addEvent(obj);
	},

	buildUI: function(key){
		var parent = document.getElementById('btn_list'),
		li = document.createElement('li');
		li.innerHTML = '<button class="btn">' + key + '</button></li>';
		parent.appendChild(li);
	},

	addEvent: function(obj){
		var liList = document.getElementsByClassName('btn');

		for(var i=0; i < liList.length; i ++){
			liList[i].addEventListener('click', function(e){
				var key = this.innerText;
				obj.setContent();
				obj[key]();
			}, false);
		}
	}
}