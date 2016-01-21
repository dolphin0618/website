/**
 * author:sh
 * mail:78075021@qq.com
 */
'use strict'
var guaguale = {};
window.addEventListener('load', function(){
	guaguale = {
		canvas:document.querySelectorAll('canvas'),
		ctx:[],
		imgs:[],
		num:888,
		isOpen:false,
		init:function(num){
			var _this = this;
			this.isOpen = false;
			if(num)this.num=num;
			for (var i=0;i<this.canvas.length;i++) {
				this.canvas[i].style.backgroundColor='transparent';
				this.ctx.push(this.canvas[i].getContext('2d'));
				
				var img = new Image();
				this.bindCanvas(img, i);
				img.src="images/shuzi-"+(this.num+"").charAt(i)+".png";
				this.imgs.push(img);
			};
			//btn		
			document.getElementById('open').onclick=function(){
				_this.move(60);
			}
		},
		refrensh:function(num){
			this.isOpen = false;
			this.num = num;
			for (var i=0;i<this.imgs.length;i++) {
				this.imgs[i].src="images/shuzi-"+(this.num+"").charAt(i)+".png";
			}
		},
		bindCanvas:function(img, index){
			var _this = this;
			img.addEventListener('load',function(e){
				var w = this.width, h = this.height;
				w=56; h=45;
				var offsetX = _this.canvas[index].offsetLeft, offsetY = _this.canvas[index].parentNode.offsetTop;
				_this.canvas[index].style.backgroundImage='url('+img.src+')';
				_this.canvas[index].width=w;
				_this.canvas[index].height=h;
				
				function layer(ctx){
					ctx.fillStyle = 'rgba(128,128,128,1)';
					ctx.fillRect(0, 0, w, h);
				}
				_this.canvas[index].removeEventListener('mousedown', eventDown);
				_this.canvas[index].addEventListener('mousedown', eventDown);
				function eventDown(e){
					e.preventDefault();                 
					_this.canvas[index].addEventListener('mousemove', eventMove);
					_this.canvas[index].addEventListener('mouseup', eventUp);
				}
				function eventUp(e){                 
					e.preventDefault();
					_this.canvas[index].removeEventListener('mousemove', eventMove);
					_this.canvas[index].removeEventListener('mouseup', eventUp);
					
					
					if(_this.isShowed()){
						_this.guakai();
					};
				}               
				function eventMove(e){
					e.preventDefault();
						if(e.changedTouches){
							e=e.changedTouches[e.changedTouches.length-1];                     
						}
						var x = (e.clientX + document.body.scrollLeft || e.pageX) - offsetX || 0,                         
						y = (e.clientY + document.body.scrollTop || e.pageY) - offsetY || 0; 

						x = x-_this.canvas[index].getBoundingClientRect().left;
						//y = _this.canvas[index].offset().top()-y;
						_this.ctx[index].beginPath();
						_this.ctx[index].fillRect(x,y,5,12);
						_this.ctx[index].fill();
				}
				layer(_this.ctx[index]);
				_this.ctx[index].globalCompositeOperation = 'destination-out';
				
				

			});
		},
		move:function(wid){
			var _this = this;
			
			timer(0);
			setTimeout(function(){timer(1);},1000);
			setTimeout(function(){timer(2);},2000);
			function  timer(index){
				var x = 0;
				var y = 0;
				var count = 0;
				var timer = setInterval(function(){
					move(x,y,index);
					//fangxiang
					if(count<10){
						x+=2;
					}else if(count<22){
						x-=2;
						y=16
					}else if(count<34){
						x=-10;
						y=10;
					}else if(count<40){
						x=-10;
						y=-10;
					}else if(count>40){
						clearInterval(timer);
						_this.guakai();
					}
					count++;
				},30);
				return timer;
			}
			var img = new Image();
			img.src="images/lay.png";
			function move(x,y,index){
				//_this.ctx[index].beginPath();
				//_this.ctx[index].fillRect(x,y,10,16);
				//_this.ctx[index].fill();
				_this.ctx[index].drawImage(img,x,y,50,42);
			}
		},
		isShowed:function(){
			var  is = true;
			for (var i=0;i<this.ctx.length;i++) {
				is=is&&this.isShowedOne(this.ctx[i]);
			}
			return is;
		},
		isShowedOne:function(ctx){
			var imgData = ctx.getImageData(20,10,20,20);
			var hidenum = 0;
			var allpx = imgData.width*imgData.height;
			for (var i = 0; i < allpx; i++) {
				if(imgData.data[i*4+0] == 128&&imgData.data[i*4+0] == 128&&imgData.data[i*4+0] == 128){
					hidenum++;
				}
			};
			return hidenum/allpx<0.2?true:false;
		},
		guakai:function(){
			if(!this.isOpen){
				this.isOpen = true;
				//alert(this.num);
			}
		}
	};



});