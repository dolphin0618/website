'use strict' 
$(function() {
    $.fn.extend({
        //插件名称
        scrollBack: function(child) {
            //主函数
            return this.each(function(){
                //激活事件
                var obj = this;
                $(window).scroll(function(e) {
                    obj.style.backgroundPosition='center '+($(window).scrollTop()-$(obj).offset().top)+'px';
                });
                
            });
        }
    });
});

$(function(){
    var obj = $('#top');
    $(window).scroll(function(){
        if($(window).scrollTop()>200){
            obj.show();
        }else{
            obj.hide();
        }
    });

    obj.click(function(){
        $('html body').animate({scrollTop:0}, 200);
    });
});

//banner
$(function(){
    var obj = $('#banner');
    var pic = $('#pic');
    var children = pic.children();
    var size = children.size();
    var width = children.width();
    var points = obj.find('.point>li');
    var now = 0;
    pic.css('left',-width);

    clearInterval(timer);
    var timer = setInterval(function(){
        now++;
        move(true);
    },4000);
    obj.mouseenter(function(){
        clearInterval(timer);
    }).mouseleave(function(){
        clearInterval(timer);
        timer = setInterval(function(){
            now++;
            move(true);
        },4000);
    });

    var prev = obj.find('.prev');
    var next = obj.find('.next');
    next.click(function(){
        now++;
        move(true);
    });
    prev.click(function(){
        now--;      
        move(false);
    });
    points.click(function(){
        var jthis = $(this);
        move(false,jthis.index());
        jthis.addClass('active').siblings().removeClass('active');
    });
    function move(direction, distance){
        if(distance||distance==0){
            if(distance==now%size){
                return false;
            }else if(distance>now%size){
                var way = distance - now%size;
                now += way;
                pic.append(pic.children().eq(0));
                pic.css('left',0);
                pic.animate({'left':-way*width},250,'swing',function(){
                    appendTo(way-1, true);
                    pic.css('left',-width);
                });
            }else if(distance<now%size){
                var way = distance - now%size;
                now += way;
                way = Math.abs(way);
                appendTo(size-2,false);
                pic.css('left',-(size-1)*width);
                pic.animate({'left':0},250,'swing',function(){
                    appendTo(1, false);
                    pic.css('left',-width);
                });
            }
        }else{
            if(direction){
                pic.animate({'left':'-='+width},250,'swing',function(){
                    pic.append(pic.children().eq(0));
                    pic.css('left',-width);
                });
            }else{
                pic.animate({'left':'+='+width},250,'swing',function(){
                    pic.prepend(pic.children().eq(size-1));
                    pic.css('left',-width);
                });
            }
            points.removeClass('active').eq(now%size).addClass('active');
        }

        function appendTo(count,direction){
            while(count) {
                if(direction){
                    pic.append(pic.children().eq(0));
                }else{
                    pic.prepend(pic.children().eq(size-1));
                }
                count--;
            }
        }
    }
});
//分页
$(function(){
    var pageMax = 12;
    var obj = $('#box_js');
    var htmlLi = obj.html();

    $("#page").pagination({
        items: data.length,
        itemsOnPage: pageMax,
        hrefTextPrefix: 'javascript:',
        edges:2,
        onPageClick:function(pageNumber, event) {
            refrensh(pageNumber);
        },init: function() {
            refrensh(1);
        }
    });

    function refrensh(page){
        obj.children().remove();
        var star = (page-1)*12;
        for (var i = star; i < star+12; i++) {
            if(!data[i]){break;}
            obj.append($.fillMark(htmlLi,data[i]));
        };
    }
});

jQuery.fillMark = function(str, data)
{
    return str.replace(/\{\$\w+\}/g, function (s){
        s=s.substring(2, s.length-1);
        
        return data[s];
    });
}

console.log("%c", "padding:25px 50px;line-height:55px;background:url('img/name.jpg') no-repeat;");
//console.log("%c商航的个人网站","font-family:'Microsoft Yahei';;background-color:#000;background-image:-webkit-gradient( linear, left top, right top, color-stop(0, #f22), color-stop(0.15, #f2f), color-stop(0.3, #22f), color-stop(0.45, #2ff), color-stop(0.6, #2f2),color-stop(0.75, #2f2), color-stop(0.9, #ff2), color-stop(1, #f22) );color:transparent;-webkit-background-clip: text;font-size:5em;");