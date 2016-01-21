/*
	autor:sh
*/
function Block(num){
	this.x = null;

	this.page=0;//页数
	this.num=num;
	var _this = this;
	var fk1 = document.getElementById('fk1');
	var fk2 = document.getElementById('fk2');
	var fk3 = document.getElementById('fk3');
	var fk4 = document.getElementById('fk4');
	
	var fkc1 = document.getElementById('fkc1');
	var fkc2 = document.getElementById('fkc2');
	var fkc3 = document.getElementById('fkc3');
	var fkc4 = document.getElementById('fkc4');
	this.imge = document.getElementById('imge');
	this.sBlocks =[fk1,fk2,fk3,fk4];
	this.bBlocks=[fkc1,fkc2,fkc3,fkc4];
	

	for(var i=0;i<this.sBlocks.length;i++)
	{
		this.sBlocks[i].index = i;
		this.bBlocks[i].index = i;
		this.sBlocks[i].onmouseover=this.bBlocks[i].onmouseover=function(){
			document.onmousemove=null;
			clearTimeout(_this.x);
			_this.isshow('n',this.index);
		}
		this.sBlocks[i].onmouseout=this.bBlocks[i].onmouseout=function(){
			var _index = this.index;
			animal(_this.bBlocks[_index],{'opacity':0},function(){
				_this.bBlocks[_index].style.display='none';
			});
			document.onmousemove=function(){
				_this.onmove();
			}
		}
	}

	document.onmousemove=function(ev){
		_this.onmove();
	}


}
Block.prototype.locat=function(data,imge){
	for(var i=0;i<this.sBlocks.length;i++)
	{
		wz(this.sBlocks[i], this.bBlocks[i], data[i].top, data[i].left);
		var oSpan = this.bBlocks[i].getElementsByTagName('span')[0];
		oSpan.innerHTML=data[i].nr;
	}
	this.imge.style.backgroundImage = "url(img/"+imge+")"; 
}

Block.prototype.onmove=function(){
	var _this = this;
	this.isshow('y');
	clearTimeout(this.x);	
	this.x = setTimeout(function(){
		_this.isshow('n');
	},1000);
}
Block.prototype.turnpage=function(index){
	this.page=this.page+index;
	if(this.page==this.num){this.page=0}
	else if(this.page<0){this.page=this.num-1}
	b.locat(jsons[this.page],imges[this.page]);
}
Block.prototype.isshow=function(tag, index){
	if(tag=='y'){
		for(var i=0;i<this.sBlocks.length;i++)
		{
			
		animal(this.sBlocks[i],{'opacity':100});
		}
	}else{
		for(var j=0;j<this.sBlocks.length;j++)
		{
			if(index==j){
				this.bBlocks[index].style.display='block';
				animal(this.bBlocks[index],{'opacity':100});
				continue;
			}
			animal(this.sBlocks[j],{'opacity':0});
		}
	}
}
function wz(obj, obj2, top, left){
	obj.style.top=top+'px';
	obj.style.left=left+'px';
	obj2.style.top=top+'px';
	obj2.style.left=left+45+'px';
}

/////////////////class//////////////////////
function addClass(element, className) 
{ 
	if (!element) return; 
	var elementClassName = element.className; 
	if (elementClassName.length == 0) 
{ 
	element.className = elementClassName; 
	return; 
} 
	if (elementClassName == className || elementClassName.match(new RegExp("(^|\\s)" + className + "(\\s|$)"))) 
	return; 
	element.className = elementClassName + " " + className; 
}; 
function removeClass(element, className) 
{ 
	if (!element) return; 
	var elementClassName = element.className; 
		if (elementClassName.length == 0) return; 
	if(elementClassName == className)
{ 
	element.className = ""; 
	return; 
} 
	if (elementClassName.match(new RegExp("(^|\\s)" + className + "(\\s|$)"))) 
	element.className = elementClassName.replace((new RegExp("(^|\\s)" + className + "(\\s|$)"))," "); 
}; 