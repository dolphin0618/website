function animal(obj, json, fn){
	clearInterval(obj.timer);
	obj.timer=setInterval(function(){
		var stop = true;
		for(var name in json){
			var cur = 0;
			/*原始值*/
			if('opacity'==name){
				cur = Math.round(getStyle(obj, name)*100);
			}else{
				cur = parseInt(getStyle(obj, name));
			}
			/*判断是否到达*/
			if(json[name] == cur){continue;}
			/*根据距离算缓冲速度*/
			var speet = (json[name]-cur)/6;
			speet = speet>0?Math.ceil(speet):Math.floor(speet);
			/*赋新值*/
			if('opacity'==name){
				obj.style.filter='alpha(opacity:'+(cur+speet)+')';
				obj.style.opacity=(cur+speet)/100;
			}else{
				obj.style[name]=cur + speet + 'px';
			}
			stop=false;
		}
		if(stop){
			if(fn){fn()};
			clearInterval(obj.timer);
		}	
	},30);
}


function getStyle(obj, name){
	if(obj.currentStyle){
		var style = obj.currentStyle[name];
		return style=='auto'?0:style;
	}else{
		return getComputedStyle(obj, false)[name];
	}
}