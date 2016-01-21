(function(e, t) {//(window, document);
	function i(e) {
		var t = this;
		t.config = e;
		t.count = e.data.data.length;
		t.over = e.over;
		e.preload && e.preload();
		n.setTitle(e.data.chat_name);
		n.imgPreloader(n.images(e.data.data), function(n, r) {
			e.finishload && e.finishload(function(){
				t.init();
			});
		});
	}
	var n = {
		images: function(e) {
			var t = 0;
			var n = e.length;
			var r = [];
			for (; t < n; t++) {
				var i = e[t].data;
				for (var s in i){
					if (i[s].match(/.(png|jpg|jpeg|gif)$/)) {
						var o = !1;
						for (var u = 0; u < r.length; u++){
							r[u] === i[s] && (o = !0);
						};
						o || r.push(i[s]);
					}
				}
			}
			return r
		},
		imgPreloader: function(e, t) {
			if (e.length === 0) return t && t(), !1;
			var n = e.length;
			var r = 0;
			var i = 0;
			var s = 0;
			var o = [];
			var u = function(e, t, n) {
					var r = new Image;
					r.onload = function() {
						t && t();
					}, r.onerror = function() {
						n && n();
					};
					r.src = e;
				};
			for (; r < n; r++) {
				var a = e[r];
				u(a, function() {
					i++;
					i + s === n && t.call(e, s, o);
				}, function() {
					s++;
					o.push(a);
					i + s === n && t.call(e, s, o);
				});
			}
		},
		setTitle: function(e) {
			t.title = e;
			var $body = $('body');
			var $iframe = $('<iframe src="/favicon.ico"></iframe>').on('load', function() {  
				setTimeout(function() {
					$iframe.off('load').remove();   
				}, 0);
			}).appendTo($body);
		}
	};
	n.msgBox = t.querySelector(".base-msgbox");
	n.audio = t.querySelectorAll("audio");
	n.audio[0].play();
	n.queue = {
		time: function(e) {
			var r = t.createElement("div");
			r.className = "component-time";
			r.innerHTML = "<b>" + e.text + "</b>";
			n.msgBox.appendChild(r);
		},
		info: function(e) {
			var r = t.createElement("div");
			r.className = "component-info";
			r.innerHTML = "<b>" + e.text + "</b>";
			n.msgBox.appendChild(r);
		},
		"m-text": function(e, r) {
			var i = t.createElement("div");
			i.className = "component-" + e;
			i.innerHTML = '<div class="avatar"><img src="' + r.avatar + '"></div>' + '<div class="content">' + '<div class="name">' + r.name + "</div>" + '<div class="message-wrapper text">' + r.text + "</div>" + "</div>";
			n.msgBox.appendChild(i);
		},
		"m-card": function(e, r) {
			var i = t.createElement("div");
			i.className = "component-" + e;
			i.innerHTML = '<div class="avatar"><img src="' + r.avatar + '"></div>' + '<div class="content">' + '<div class="name">' + r.name + "</div>" + "<div onclick=\"javascript:window.location.href='" + r.url + '\'" class="message-wrapper card">' + '<div class="wrap">' + '<div class="card-type">\u4e2a\u4eba\u540d\u7247</div>' + '<div class="card-info">' + '<div class="card-avatar"><img src="' + r.cardAvatar + '"></div>' + '<div class="card-name">' + r.cardName + "</div>" + '<div class="card-num">' + r.cardNum + "</div>" + "</div>", "</div>", "</div></div>";
			n.msgBox.appendChild(i);
		},
		"m-emoji": function(e, r) {
			var i = t.createElement("div");
			i.className = "component-" + e;
			i.innerHTML = '<div class="avatar"><img src="' + r.avatar + '"></div>' + '<div class="content">' + '<div class="name">' + r.name + "</div>" + '<div class="message-wrapper emoji"><img src="' + r.image + '"></div>' + "</div>";
			n.msgBox.appendChild(i);
		},
		"m-image": function(e, r) {
			var i = t.createElement("div");
			i.className = "component-" + e;
			i.innerHTML = '<div class="avatar"><img src="' + r.avatar + '"></div>' + '<div class="content">' + '<div class="name">' + r.name + "</div>" + '<div class="message-wrapper image"><img src="' + r.image + '"></div>' + "</div>";
			n.msgBox.appendChild(i);
		},
		"m-envelop": function(e, r) {
			var i = t.createElement("div");
			i.className = "component-" + e;
			i.innerHTML = '<div class="avatar"><img src="' + r.avatar + '"></div>' + '<div class="content">' + '<div class="name">' + r.name + "</div>" + '<div class="message-wrapper envelop">' + '<div class="pack">' + '<div class="logo"></div>' + '<div class="text">' + "<span>\u606d\u559c\u53d1\u8d22\uff0c\u5927\u5409\u5927\u5229\uff01</span>" + "<span>\u9886\u53d6\u7ea2\u5305</span>" + "</div>" + "</div>" + '<div class="info">\u5fae\u4fe1\u7ea2\u5305<div class="logo"><div class="mask"><div class="face"></div></div></div></div>' + "</div>" + "</div>";
			var s = t.createElement("div");
			s.className = "base-open-envelop";
			s.innerHTML = '<div class="wrap"><div class="close"></div><div class="avatar"><img src="' + r.avatar + '"></div>' + '<div class="name">' + r.name + "</div>" + '<div class="tips">\u7ed9\u4f60\u53d1\u4e86\u4e00\u4e2a\u7ea2\u5305</div>' + '<div class="desc">' + r.text + "</div>" + '<div class="open" onclick="javascript:window.location.href=\'' + r.url + "'\">\u62c6\u7ea2\u5305</div>" + "</div>";
			i.querySelector(".envelop").onclick = function() {
				s.style.display = "block", t.body.appendChild(s)
			};
			n.msgBox.appendChild(i);
		}
	};
	var r = function(e) {
		return new i(e);
	};
	i.prototype.init = function() {
		this.queue(this.config.data.data);
	};
	i.prototype.queue = function(e) {
		var r = this;
		var i = e[0];
		var s = +(new Date);
		var o = null;
		if (typeof i == "undefined") return !1;

		if (+(new Date) - s >= parseInt(i.delay)) {
			if (i.type.indexOf("-") > 0) {
				var u = "m-" + i.type.split("-")[1];
				n.queue[u](i.type.split("-")[0], i.data);
				n.audio[0].play();
			} else n.queue[i.type](i.data);

			setTimeout(function() {
				t.querySelector(".base-msgbox").scrollTop += 1e3;
			}, 10);
			e.shift();
			r.queue(e)
		} else 
		o = setInterval(function() {
			if (+(new Date) - s >= parseInt(i.delay)) {
				if (i.type.indexOf("-") > 0) {
					var u = "m-" + i.type.split("-")[1];
					n.queue[u](i.type.split("-")[0], i.data);
					n.audio[0].play();
				} else 
					n.queue[i.type](i.data);
				setTimeout(function() {
					t.querySelector(".base-msgbox").scrollTop += 1e3;
				}, 10);
				clearInterval(o);
				e.shift();
				r.queue(e);
			}
		}, 133);
		if(--this.count === 0){
			this.over && this.over();
		}
	};
	e.wechat = r;
})(window, document);

$(function(){
	$('#xxx').remove();
	var oBtn = document.getElementById("pb-box");
	var $oBtn = $(oBtn);
    var disX = 0;
    var maxL = Math.min(640,window.innerWidth);
    $call = $('#base-call');
    oBtn.addEventListener(touchstart, function(e){
    	e.preventDefault();
    	if(e.changedTouches){
			e=e.changedTouches[e.changedTouches.length-1];                     
		}
	    disX = e.clientX;
	    
	    var move = function (e){
	    	e.preventDefault();
	    	if(e.changedTouches){
				e=e.changedTouches[e.changedTouches.length-1];                     
			}
		    var l = e.clientX - disX;
		    l < 0 && (l = 0);
		    l > maxL && (l = maxL);
		    oBtn.style.left = l + "px";
		    return false;
	    };
    	var up = function (){
		    document.removeEventListener(touchmove, move, false);
    		document.removeEventListener(touchend, up, false);
		    oBtn.releaseCapture && oBtn.releaseCapture();
		    oBtn.offsetLeft > maxL / 2 ?$oBtn.animate({'left':maxL},300,function(){
		    		$oBtn.hide();
	    			$('#base-pb').animate({'opacity':0},300,start);
    			}):$oBtn.animate({'left':0},300);
    	};
    	document.addEventListener(touchmove, move, false);
    	document.addEventListener(touchend, up, false);
    	this.setCapture && this.setCapture();
   	 	return false
    }, false);
    function startMove (iTarget, onEnd){
	    	clearInterval(oBtn.timer);
	    	oBtn.timer = setInterval(function ()	{
    			doMove(iTarget, onEnd)
   	 	}, 30)
    }
    function doMove (iTarget, onEnd)
    {
	    	var iSpeed = (iTarget - oBtn.offsetLeft) / 5;
	    	iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
	    	iTarget == oBtn.offsetLeft ? (clearInterval(oBtn.timer), onEnd && onEnd()) : oBtn.style.left = iSpeed + oBtn.offsetLeft + "px"
    }
    function start(){
    	$('#base-pb').remove();
    	wechat({
			data:data,
			preload:function(){
				console.log(+(new Date));
			},
			finishload:function(start){
				start();
				console.log(+(new Date));
			},
			over:function(){
				setTimeout(function(){
					$call.show();
					document.getElementById('wx_mp3').play();
				},4000);
				
			}
		});
    }
	//call
	$call.find('a').on(touchstart,function(){
		$('#video').show();
		$('#page5').show();
		var callIn = document.querySelector('video');
		$(this).parent().remove();
		$(wx_mp3).remove();
		
		callIn.play();
		var second = 0;
		var $sec = $('#second');
		var timer = setInterval(function(){
			var sec = ++second%60;
			$sec.html('00:'+(sec>=10?sec:'0'+sec));
		},1000);
		
		callIn.addEventListener("ended", function () {
			$("#bsbox").next().remove().end().remove();
	        clearInterval(timer);
	        $sec.html('对方已挂断');
	        setTimeout(function(){
	        	$('#video').addClass('close');
	        	setTimeout(page5,500);
	        },1000);
	    });
	});
	//
	function page5(){
		$('#video').remove();
		document.getElementById('page5').className = 'page5 toDance';
		var oAudio = document.getElementById('xj_mp3');
		oAudio.play();
		countRun();
		
		var confrom = {
			$get:$('#get'),
			$mus:$('#music'),
			$share:$('#share'),
			$get2:$('#get2'),
			ipt:$('#tel'),
			ipt2:$('#code'),
			$altbg:$('#alt-bg'),
			$tab:$('#prize>div'),
			$close:$('#close'),
			$shareBg:$('#share-bg'),
			lock:false,
			init:function(){
				var _this = this;
				this.$get.on(touchstart,function(){
					_this.$altbg.show();
				});
				this.$get2.on(touchstart,function(){
					if(_this.lock)return false;
					if(!/^1[3-9]\d{10}$/.test(_this.ipt.val())){
						_this.ipt.addClass('err');
						return false;
					};
					_this.lock = true;
					//sub
					I9RIA.getMyPrizes(function(data){
						2
						if(data!='' && data[0].gamecode){
							_this.$tab.eq(0).hide().next().show();
							_this.ipt2.val(data[0].gamecode);
							_this.lock = false;
							console.log('hascode');
						}else{
							I9RIA.baoming("baoming", {"tel":_this.ipt.val()}, function(){
			    				I9RIA.raffle(function(data){
				    				_this.$tab.eq(0).hide().next().show();
									_this.ipt2.val(data.game_code);
									_this.lock = false;
									console.log('sucs');
				    			},function(){
				    				_this.ipt.addClass('err');
				    				_this.lock = false;
				    				alert('错误：201');
				    			});
			    			},function(){
			    				alert(3);
			    				_this.ipt.addClass('err');
			    				_this.lock = false;
			    				alert('错误：202');
			    			});
						}
					});
				});
				this.$close.on(touchstart,function(){
					_this.$altbg.hide();
					
					_this.$tab.eq(0).show().next().hide();
				});
				this.$share.on(touchstart,function(){
					_this.$shareBg.show();
				});
				this.$shareBg.on(touchstart,function(){
					_this.$shareBg.hide();
				});
				this.$mus.on(touchstart,function(){
					var _this = this;
					var $this = $(this);
					 if(!oAudio.paused){
						$this.removeClass('round');
						oAudio.pause();
					}else{
						$this.addClass('round');
						oAudio.play();
					}
				});
			}
		}
		confrom.init();
	}
	
	//count
	function countRun(){
		var numer = {
			init:3251893,
			start:1449072000,
			$uls:$('#num ul'),
			now:Math.round(+new Date()/1000),
			run:function(){
				this.init += (this.now-this.start)*2;
				this._draw();
				this._move();
				var _this = this;
				setInterval(function(){
					_this._move();
				},3000);
			},
			_draw:function(){
				var nextInit = this.init+2;
				for(var i=0;i<7;i++){
					var lis = this.$uls.eq(i).data('move',false).children();
					var no = ~~(''+this.init).charAt(i);
					var nextno = ~~(''+(this.init+2)).charAt(i);
					if(i != 6){
						(no != nextno) && (this.$uls.eq(i).data('move',true));
						lis.eq(0).html(no%10);
						lis.eq(1).html((no+1)%10);
					}else{
						lis.eq(0).html(no%10);
						lis.eq(1).html((no+1)%10);
						lis.eq(2).html((no+2)%10);
					}
					this.$uls.eq(i).css('top',0);
				}
			},
			_move:function(){
				var _this = this;
				this.init+=2;
				for(var i=0;i<7;i++){
					if(i != 6 && this.$uls.eq(i).data('move')){
						this.$uls.eq(i).animate({'top':'-0.8rem'},1000);
					}else if(i == 6){
						this.$uls.eq(i).animate({'top':'-1.6rem'},1800,function(){
							_this._draw();
						});
					}
				}
			}
		}
		numer.run();
	}
});
