
function getStyle(obj,name){
	return (obj.currentStyle || getComputedStyle(obj,false))[name];
}
function startMove(obj,json,options){
	//考虑默认值
	options=options || {};
	options.duration=options.duration || 500;
	options.easing=options.easing || 'ease-out';
	
	if(options.duration<30)return;
	
	
	clearInterval(obj.timer);
	var count=Math.floor(options.duration/30);
	
	//一堆起始值
	var start={};
	var dis={};
	for(var name in json){
		start[name]=parseFloat(getStyle(obj,name));
		if(isNaN(start[name])){
			switch(name){
				case 'left':
					start[name]=obj.offsetLeft;
					break;
				case 'top':
					start[name]=obj.offsetTop;
					break;
				case 'width':
					start[name]=obj.offsetWidth;
					break;
				case 'height':
					start[name]=obj.offsetHeight;
					break;
				case 'opacity':
					start[name]=1;
					break;
				case 'marginLeft':
					start[name]=0;
					break;
				case 'fontSize':
					start[name]=12;
					break;
			}	
		}	
		dis[name]=json[name]-start[name];
	}
	
	
	var n=0;
	obj.timer=setInterval(function(){
		n++;
		
		for(var name in json){
			switch(options.easing){
				case 'linear':
					var a=n/count;
					var cur=start[name]+dis[name]*a;
					break;
				case 'ease-in':
					var a=n/count;
					var cur=start[name]+dis[name]*(a*a*a);
					break;
				case 'ease-out':	
					var a=1-n/count;
					var cur=start[name]+dis[name]*(1-a*a*a);
					break;
			}
			
			
			if(name=='opacity'){
				obj.style.opacity=cur;
				obj.style.filter='alpha(opacity:'+cur*100+')';
			}else{
				obj.style[name]=cur+'px';
			}
		}
		
		if(n==count){
			clearInterval(obj.timer);
			options.complete && options.complete();
		}
	},30);	
}