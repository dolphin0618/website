var oDiv = null;
var iNow = 0;
var boxArr = [];
document.onclick=function(){
	displayNone();
}

function displayNone(){
	for (var i = 0; i < boxArr.length; i++) {
		boxArr[i].style.display = 'none';
	};
}

function calendar(obj){
	obj.onfocus=function(){
		createCa(getPos(obj), obj);
		displayNone();
		oDiv.style.display='block';
	}
	obj.onclick=function(ev){
		var oEvent = ev||event;
		oEvent.cancelBubble = true;
	}
}

function getPos(obj){
	var l=0;
	var t=0;
	var h=obj.offsetHeight;
	while(obj){
		l+=obj.offsetLeft;
		t+=obj.offsetTop;
		obj=obj.offsetParent;
	}
	return {top:t,left:l,height:h};
}

function createCa(pos, obj){
	oDiv = document.createElement('div');
	oDiv.className = 'calendar';
	oDiv.innerHTML='<div class="title">'
					+'<div class="left" id="c_left">《</div>'
					+'<div class="time" id="c_time"></div>'
					+'<div class="right" id="c_right">》</div>'
					+'</div>'
					+'<ul class="week">'
						+'<li style="color:red;">日</li>'
						+'<li>一</li>'
						+'<li>二</li>'
						+'<li>三</li>'
						+'<li>四</li>'
						+'<li>五</li>'
						+'<li style="color:red;">六</li>'
					+'</ul>'
					+'<ul class="days" id="c_days"></ul>';
	oDiv.style.left=pos.left+'px';
	oDiv.style.top=pos.top+pos.height+'px';
	document.body.appendChild(oDiv);
	boxArr.push(oDiv);
	init(obj);
	oDiv.onclick=function(ev){
		var oEvent = ev||event;
		oEvent.cancelBubble = true;
	}
}


function init(obj){
	var oItem = oDiv.getElementsByTagName('ul')[1];
	var oData = new Date();
	var thisDay = oData.getDate();
	oData.setMonth(oData.getMonth()+iNow);
	oData.setDate(1);
	var nDay = oData.getDay();
	var _html = '';
	for (var i = 0; i < nDay; i++) {
		_html+='<li></li>';
	};
	oItem.innerHTML=_html;

	oData.setMonth(oData.getMonth()+1);
	oData.setDate(0);
	var maxDay = oData.getDate();
	for (var i = 1; i <= maxDay; i++) {
		var oLi = document.createElement('li');
		oLi.innerHTML = i;
		oLi.onclick=function(){
			obj.value = oData.getFullYear()+'-'+(oData.getMonth()+1)+'-'+this.innerHTML;
			oDiv.style.display = 'none';
		}
		oItem.appendChild(oLi);
	};

	var oTime = oDiv.children[0].getElementsByTagName('div')[1];
	oTime.innerHTML = oData.getFullYear()+'年'+(oData.getMonth()+1)+'月';

	//变红//变灰//今天
	var items = oItem.children;
	for (var i = 0; i < items.length; i++) {
		if(i%7==0||i%7==6){
			items[i].style.color='red';
		}
		if(i+1 == nDay+thisDay&&iNow==0){
			items[i].className='today';
		}
		if(i+1<(nDay+thisDay)&&iNow<=0){
			items[i].className='ago';
		}
	};
	
	//左右按钮
	var oPrev = oDiv.children[0].getElementsByTagName('div')[0];
	var oNext = oDiv.children[0].getElementsByTagName('div')[2];
	oPrev.onclick=function(ev){
		var oEvent = ev||event;
		iNow--;
		init();
		oEvent.cancelBubble = true;
	}
	oNext.onclick=function(ev){
		var oEvent = ev||event;
		iNow++;
		init();
		oEvent.cancelBubble = true;
	}
}

var link = document.createElement('link');
link.href = 'calendar.css';
link.rel = 'stylesheet';
link.type = 'text/css';
var oHead = document.getElementsByTagName('head')[0];
oHead.appendChild(link);