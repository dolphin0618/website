$(function(){
    //头像
    $('#portrait').hover(
      function () {
        $('#aura').stop().velocity({scale:1,opacity:1},{duration:1000});
      },
      function () {
        $('#aura').stop().velocity({scale:0.5,opacity:0},{duration:1000});
      }
    );
    //用户操作方式 按键加滚轮
    document.onkeydown = function(event) {
        event=event || window.event;
        var c = event.keyCode;
        if (c==40||c==32||c==39) {
            truePage.next();
        }else if (c==38||c==37) {
            truePage.prev();
        };
        return false;
    };
    var scrollFunc=function(event){
        event=event || window.event;
        if (event.wheelDelta < 0) {
            truePage.next();
        }else{
            truePage.prev();
        };
        return false;
    };
    if(document.addEventListener){
        document.addEventListener('DOMMouseScroll',scrollFunc,false);
    };
    window.onmousewheel=document.onmousewheel=scrollFunc;
//页面效果对象
var page1 = {
    dom:{
        leo:$('#p1>.leo'),
        font1:$('#p1>.font_1'),
        font2:$('#p1>.font_2'),
        font3:$('#p1>.font_3'),
        uname:$('#p1>.uname'),
        portrait:$('#p1>.portrait'),
        btnIn:$('#btnIn')
    },
    initPage:function(){
        this.dom.leo.velocity({translateZ:'1000px',rotateY:'-60deg',translateY:'500px',opacity:1},{duration:0});
        this.dom.font1.velocity({translateZ:'1300px',rotateY:'-60deg',translateY:'500px',opacity:1},{duration:0});
        this.dom.font2.velocity({translateZ:'1600px',rotateY:'-60deg',translateY:'500px',opacity:1},{duration:0});
        this.dom.font3.velocity({translateZ:'1600px',rotateY:'-60deg',translateY:'500px',opacity:1},{duration:0});
        this.dom.uname.css('opacity',0);
        this.dom.portrait.css('opacity',0);
        
        return this;
    },
    returnPage:function(){
        return this;
    },
    showPage:function(){
    	this.dom.leo.parent().show();
        this.dom.leo.velocity({translateZ:'0px',rotateY:'0deg',translateY:'0px','opacity':1},{duration:2000});
        this.dom.font1.velocity({translateZ:'0px',rotateY:'0deg',translateY:'0px','opacity':1},{duration:2000,delay:600});
        this.dom.font2.velocity({translateZ:'0px',rotateY:'0deg',translateY:'0px','opacity':1},{duration:2200,delay:600});
        this.dom.font3.velocity({translateZ:'0px',rotateY:'0deg',translateY:'0px','opacity':1},{duration:2400,delay:600});
        this.dom.uname.velocity({opacity:1},{duration:2000,delay:1000});
        this.dom.portrait.velocity({opacity:1},{duration:2000,delay:1000});
        this.dom.btnIn.velocity({top:'80px',right:'100px',scale:1},{duration:800});
        return this;
    },
    hidePage:function(){
        var _this = this;
        this.dom.leo.velocity({'opacity':0},{duration:1000});
        this.dom.font1.velocity({'opacity':0},{duration:1000});
        this.dom.font2.velocity({'opacity':0},{duration:1000});
        this.dom.font3.velocity({'opacity':0},{duration:1000});
        this.dom.uname.velocity({'opacity':0},{duration:1000});
        this.dom.portrait.velocity({'opacity':0},{duration:1000});
        this.dom.btnIn.velocity({top:'10px',right:'20px',scale:0.5},{duration:800});

        setTimeout(function(){
            _this.dom.leo.parent().hide();
        },1000);
        return this;
    }
};

var page2 = {
    dom:{
        hot:$('#p2>.hot'),
        fontY:$('#p2>.fontY'),
        font:$('#p2>.p_font')
    },
    initPage:function(){
        this.dom.hot.velocity({rotateY:'30deg',translateZ:'1000px',opacity:0},{duration:0});
        this.dom.fontY.velocity({rotateY:'45deg',opacity:0},{duration:0});
        this.dom.font.velocity({opacity:0},{duration:0});

        return this;
    },
    returnPage:function(){
		this.dom.hot.velocity({rotateY:'30deg',translateZ:'1000px',opacity:0},{duration:900});
        this.dom.fontY.velocity({rotateY:'45deg',opacity:0},{duration:900});
        this.dom.font.velocity({opacity:0},{duration:900});

        return this;
    },
    showPage:function(){
        this.dom.hot.velocity({rotateY:'0deg',translateZ:'0px',opacity:0.9},{duration:1500});
        this.dom.fontY.velocity({rotateY:'0deg',opacity:1},{duration:1000,delay:1100});
        this.dom.font.velocity({opacity:1},{duration:1000,delay:1000});

        return this;
    },
    hidePage:function(){
        this.dom.hot.velocity({rotateY:'1deg',translateZ:'1000px',opacity:0},{duration:1000});
        this.dom.fontY.velocity({rotateY:'-45deg',opacity:0},{duration:600});
        this.dom.font.velocity({opacity:0},{duration:600});

        return this;
    }
};

var page3 = {
    dom:{
        skill:$('#p3>.skill'),
        js:$('#p3>.skill>.js'),
        h5:$('#p3>.skill>.h5'),
        css3:$('#p3>.skill>.css3'),
        java:$('#p3>.skill>.java'),
        fontY:$('#p3>.skill>.fontY'),
        font:$('#p3>.p_font')
    },
    initPage:function(){
        this.dom.skill.velocity({rotateZ:'-30deg'},{duration:0});
        this.dom.js.velocity({rotateY:'-60deg',translateZ:'800px',rotateX:'120deg',scale:0.1},{duration:0});
        this.dom.h5.velocity({rotateY:'-60deg',translateZ:'900px',rotateX:'120deg',scale:0.1},{duration:0});
        this.dom.css3.velocity({rotateY:'-60deg',translateZ:'1000px',rotateX:'120deg',scale:0.1},{duration:0});
        this.dom.java.velocity({rotateY:'-60deg',translateZ:'1100px',rotateX:'120deg',scale:0.1},{duration:0});
        this.dom.fontY.velocity({rotateY:'-60deg',translateZ:'1100px',rotateX:'120deg',scale:1.5},{duration:0});
        this.dom.font.velocity({opacity:0},{duration:0});

        return this;
    },
    returnPage:function(){
    	this.dom.skill.velocity({rotateZ:'-30deg'},{duration:900});
        this.dom.js.velocity({rotateY:'-60deg',translateZ:'800px',rotateX:'120deg',scale:0.1},{duration:900});
        this.dom.h5.velocity({rotateY:'-60deg',translateZ:'900px',rotateX:'120deg',scale:0.1},{duration:900});
        this.dom.css3.velocity({rotateY:'-60deg',translateZ:'1000px',rotateX:'120deg',scale:0.1},{duration:900});
        this.dom.java.velocity({rotateY:'-60deg',translateZ:'1100px',rotateX:'120deg',scale:0.1},{duration:900});
        this.dom.fontY.velocity({rotateY:'-60deg',translateZ:'1100px',rotateX:'120deg',scale:1.5},{duration:800});
        this.dom.font.velocity({opacity:0},{duration:700});

        return this;
    },
    showPage:function(){
        this.dom.skill.velocity({rotateZ:'0deg'},{duration:2000});
        this.dom.js.velocity({rotateY:0,translateZ:0,rotateX:0,opacity:1,scale:1},{duration:2000});
        this.dom.h5.velocity({rotateY:0,translateZ:0,rotateX:0,opacity:1,scale:1},{duration:2000});
        this.dom.css3.velocity({rotateY:0,translateZ:0,rotateX:0,opacity:1,scale:1},{duration:2000});
        this.dom.java.velocity({rotateY:0,translateZ:0,rotateX:0,opacity:1,scale:1},{duration:2000});
        this.dom.fontY.velocity({rotateY:0,translateZ:0,rotateX:0,opacity:1,scale:1},{duration:2200});
        this.dom.font.velocity({opacity:1},{duration:1000,delay:1000});

        return this;
    },
    hidePage:function(){
        this.dom.skill.velocity({rotateZ:'30deg'},{duration:2000});
        this.dom.js.velocity({rotateY:'60deg',translateZ:'1300px',rotateX:'90deg',scale:0.1},{duration:1000});
        this.dom.h5.velocity({rotateY:'60deg',translateZ:'1400px',rotateX:'90deg',scale:0.1},{duration:1200});
        this.dom.css3.velocity({rotateY:'60deg',translateZ:'1500px',rotateX:'90deg',scale:0.1},{duration:1400});
        this.dom.java.velocity({rotateY:'60deg',translateZ:'1600px',rotateX:'90deg',scale:0.1},{duration:1600});
        this.dom.fontY.velocity({rotateY:'60deg',translateZ:'1500px',rotateX:'90deg',scale:0.1},{duration:1800});
        this.dom.font.velocity({opacity:0},{duration:500});

        return this;
    }
};

var page4 = {
    dom:{
        p4:$('#p4'),
        clock:$('#p4>.clock'),
        distance:$('#p4>.distance>div'),
        fontY:$('#p4>.fontY'),
        font:$('#p4>.p_font')
    },
    initPage:function(){
        this.dom.p4.velocity({scale:0.6,opacity:1},{duration:0});
        this.dom.clock.velocity({rotateY:'-30deg',scale:0.7,opacity:0},{duration:0});
        this.dom.fontY.velocity({rotateY:'-60deg',scale:0.7,opacity:0},{duration:0});
        this.dom.font.velocity({rotateY:'0deg',opacity:0},{duration:0});

        this.dom.distance.eq(0).velocity({scale:1,rotateY:'-15deg',translateZ:'1000px'},{duration:0});
        this.dom.distance.eq(1).velocity({scale:2,rotateY:'-14deg',translateZ:'1000px'},{duration:0});
        this.dom.distance.eq(2).velocity({scale:3,rotateY:'-13deg',translateZ:'1000px'},{duration:0});
        this.dom.distance.eq(3).velocity({scale:4,rotateY:'-12deg',translateZ:'1000px'},{duration:0});
        this.dom.distance.eq(4).velocity({scale:5,rotateY:'-11deg',translateZ:'1000px'},{duration:0});
        this.dom.distance.eq(5).velocity({scale:6,rotateY:'-10deg',translateZ:'1000px'},{duration:0});
        this.dom.distance.css({'width':30,'height':50,'overflow':'hidden'});

        return this;
    },
    returnPage:function(){
    	this.dom.p4.velocity({scale:0.6,opacity:1},{duration:1000});
        this.dom.clock.velocity({rotateY:'-30deg',scale:0.7,opacity:0},{duration:900});
        this.dom.fontY.velocity({rotateY:'-60deg',scale:0.7,opacity:0},{duration:900});
        this.dom.font.velocity({rotateY:'0deg',opacity:0},{duration:900});

        this.dom.distance.eq(0).velocity({scale:1,rotateY:'-15deg',translateZ:'1000px'},{duration:900,delay:100});
        this.dom.distance.eq(1).velocity({scale:2,rotateY:'-14deg',translateZ:'1000px'},{duration:800,delay:100});
        this.dom.distance.eq(2).velocity({scale:3,rotateY:'-13deg',translateZ:'1000px'},{duration:700,delay:100});
        this.dom.distance.eq(3).velocity({scale:4,rotateY:'-12deg',translateZ:'1000px'},{duration:600,delay:100});
        this.dom.distance.eq(4).velocity({scale:5,rotateY:'-11deg',translateZ:'1000px'},{duration:500,delay:100});
        this.dom.distance.eq(5).velocity({scale:6,rotateY:'-10deg',translateZ:'1000px'},{duration:400,delay:100});
        this.dom.distance.css({'width':30,'height':50,'overflow':'hidden'});

        return this;
    },
    showPage:function(){
        this.dom.p4.velocity({scale:1,opacity:1},{duration:2000});
        this.dom.clock.velocity({rotateY:0,opacity:1,scale:1},{duration:1000,delay:800});
        this.dom.fontY.velocity({translateZ:0,opacity:1,rotateY:0,scale:1},{duration:1000,delay:500});
        this.dom.font.velocity({translateZ:0,opacity:1,rotateY:0},{duration:500,delay:1000});

        this.dom.distance.eq(0).velocity({scale:1,rotateY:0,translateZ:'0px',width:350},{duration:1000});
        this.dom.distance.eq(1).velocity({scale:1,rotateY:0,translateZ:'0px',width:350},{duration:1200});
        this.dom.distance.eq(2).velocity({scale:1,rotateY:0,translateZ:'0px',width:350},{duration:1400});
        this.dom.distance.eq(3).velocity({scale:1,rotateY:0,translateZ:'0px',width:350},{duration:1600});
        this.dom.distance.eq(4).velocity({scale:1,rotateY:0,translateZ:'0px',width:350},{duration:1800});
        this.dom.distance.eq(5).velocity({scale:1,rotateY:0,translateZ:'0px',width:350},{duration:2000});

        return this;
    },
    hidePage:function(){
        this.dom.clock.velocity({rotateY:'-30deg',scale:0.7,opacity:0},{duration:500});
        this.dom.fontY.velocity({rotateY:'-60deg',opacity:0},{duration:500});
        this.dom.font.velocity({rotateY:'0deg',opacity:0},{duration:500});

        this.dom.distance.eq(0).velocity({scale:1,rotateY:'15deg',translateZ:'1000px'},{duration:1000});
        this.dom.distance.eq(1).velocity({scale:1,rotateY:'14deg',translateZ:'1000px'},{duration:1050});
        this.dom.distance.eq(2).velocity({scale:1,rotateY:'13deg',translateZ:'1000px'},{duration:1100});
        this.dom.distance.eq(3).velocity({scale:1,rotateY:'12deg',translateZ:'1000px'},{duration:1150});
        this.dom.distance.eq(4).velocity({scale:1,rotateY:'11deg',translateZ:'1000px'},{duration:1200});
        this.dom.distance.eq(5).velocity({scale:1,rotateY:'10deg',translateZ:'1000px'},{duration:1250});

        return this;
    }
};

var page5 = {
    dom:{
        slider:$('#p5>.slider'),
        fontY:$('#p5>.fontY'),
        cvs:$('#p5>canvas'),
        p5:$('#p5')
    },
    initPage:function(){
    	this.dom.p5.show();
        this.dom.slider.velocity({rotateZ:'360deg',rotateY:'0deg',scale:0.2,'opacity':0},{duration:0});
        this.dom.cvs.css('opacity',0).show();
        this.dom.fontY.hide();
        return this;
    },
    returnPage:function(){
    	this.dom.p5.show();
        this.dom.slider.velocity({rotateZ:'360deg',rotateY:'0deg',scale:0.2,'opacity':0},{duration:900});
        this.dom.cvs.css('opacity',0).show();
        this.dom.fontY.hide();
        return this;
    },
    showPage:function(){
        var _this = this;
        this.dom.slider.velocity({rotateZ:'0deg',rotateY:'0deg',scale:1,'opacity':1},{duration:1000});
        this.dom.fontY.velocity({'opacity':1},{duration:1000});
        this.dom.cvs.css('opacity',1);
        particleFont(this.dom.cvs.get(0),function(){
            _this.dom.cvs.hide();
            _this.dom.fontY.show();
        },1600);
        return this;
    },
    hidePage:function(){
        this.dom.slider.velocity({scale:1.5,'opacity':0},{duration:1200});
        this.dom.fontY.velocity({'opacity':0},{duration:1200});;
        return this;
    }
};
//canvas粒子效果
function particleFont(cvs, fn, time){
    var cObj = cvs.getContext('2d');
    cObj.fillStyle='#0066FF';
    cObj.shadowColor='#FFF';//阴影颜色
    cObj.shadowOffsetX=0;//阴影的偏移量
    cObj.shadowOffsetY=0;
    cObj.shadowBlur=6;//阴影模糊度

    var points = [];

    var tx = 0;
    var ty = 215;
    cObj.clearRect(0,0,1024,800);
    for (var i = 0; i < 72; i++) {
        //创建点对象
        var obj = new Point();
        obj.size = Math.random()*6+2;
        obj.x = Math.random()*1000;
        obj.y = Math.random()*600+100;
        drawArc(obj);

        //计算目标点
        if(i%6 == 0){//6点一行
            tx = 458;
            ty+=15;
        };
        if(i%36 == 0 && i!=0){//6行一字
            ty+=38;
        };
        tx += 15;//点点间距
        obj.tx = tx;
        obj.ty = ty;

        //计算距离
        obj.distance();

        points.push(obj);
    };

    var n = 0;
    var count=Math.floor(time/30);
    var timer = setInterval(function(){
        n++;
        var scale = n/count;
        cObj.clearRect(0,0,1024,800);
        for (var j = 0; j < 72; j++) {
            drawArc(points[j].x + points[j].distanceX * scale, points[j].y + points[j].distanceY * scale, points[j].size);
        };

        if(n == count){
           clearInterval(timer);
           fn && fn();
        };
    },30);
    

    function Point(){
        this.x = 0;//当前x
        this.y = 0;//当前y
        this.size = 0;//大小
        this.tx = 0;//目标x
        this.ty = 0;//目标y
        this.count = 0;//步数
        this.distanceX = 0;//距离x
        this.distanceY = 0;//距离y
        this.distance = function(){
            this.distanceX = this.tx - this.x;
            this.distanceY = this.ty - this.y;
        };
    };

    function drawArc(obj, param, size){
        cObj.beginPath();
        if(param){
            cObj.arc(obj,param,size,0,2*Math.PI,true);
        }else{
            cObj.arc(obj.x,obj.y,obj.size,0,2*Math.PI,true);
        };
        cObj.fill();
    }
    
};
//分页对象
var page = [page1, page2, page3, page4, page5];
var truePage = {
    now:1,
    lock:false,
    page:$('#page>div'),
    init:function(){
        for (var i = 0; i < 4; i++) {
            page[i].initPage();
        };
        setTimeout(function(){
            page[4].initPage();
        },1200);

        return this;
    },
    next:function(){
        if(this.lock){return false;}
        this.doLock();

        this.now++;
        if(this.now%5 == 0){
            this.init();
        };
        page[(this.now-1)%5].hidePage();
        page[this.now%5].showPage();

        this.tab();
        return this;
    },
    prev:function(){
        if(this.lock){return false;};
        this.doLock();

        this.now--;
        if(this.now<0 || this.now%5 == 4){this.now++;return false;};
        page[(this.now+1)%5].returnPage();
        page[this.now%5].showPage();

        this.tab();
        return this;
    },
    doLock:function(){
        var _this = this;
        _this.lock = true;
        setTimeout(function(){
            _this.lock = false;
        },2000);

        return this;
    },
    tab:function(){
        this.page.removeClass('active').eq(this.now%5).addClass('active');
    }
};



truePage.init().prev();//初始

});