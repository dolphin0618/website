/*!
 * cityLine JavaScript Library v0.1
 *
 *  c n
 * Date: 2014-7-8
 */
	(function ($) {
        $.fn.cityLine=function(options){
            var _this = this;
            //默认参数

            var defaults = { 
                FromCity: 'FromCity',
                ToCity: 'ToCity',
                SubCities:['CityA','CityB'],
                Price: '1000',
                SubCityinfos:[{FromCity:'CityC',ToCity:'CityA',Price:'60'},{FromCity:'CityD',ToCity:'CityB',Price:'50'}],
                Width:600,
                padding: 40
            }; 

            var defaults = $.extend({}, defaults, options);
            //初始创建
            creat();
            //创建根路线html
            function creat(){
                
                var top_html = '<ul class="ul_item" style="position:absolute;top:30px;"><li><div class="city">'+
                        '<span class="city_n">'+defaults.FromCity+'</span><div class="cation"><span>出发地</span><img src="img/yuan.jpg"/>'+
                        '</div></div></li><li><p class="line" style="width:'+defaults.Width+'px;"></p><span class="sj"></span>'+
                        '</li><li><div><div class="cation"><span>目的地</span><img src="img/yuan.jpg"/></div>'+
                        '<span>'+defaults.ToCity+'</span></div></li></ul>';

                $(_this).append(top_html);
                citySort();
                fnDraw();
            }
            //创建子路线html
            function creatUl(param){
                return '<span class="lj" style="top:'+param.ulY+'px;">路径</span>'+
                    '<ul class="ul_item" style="position:absolute;top:0px;margin-left:'+param.ulX+'px;"><li>'+
                    '<div class="city"><span class="city_n">cityF</span><div class="cation">'+
                    '<div class="line_y" style="height:24px;margin-top:12px;"></div><img src="img/yuan.jpg"/></div></div>'+
                    '</li><li><p class="line" style="width:0px;"><span class="pri">分段计价：0.00元</span>'+
                    '</p><span class="sj"></span></li><li><div><div class="cation"><img src="img/yuan.jpg"/>'+
                    '</div><span class="to">cityT</span></div></li></ul>';
            }
            //初始化城市信息到dom上
            function initObj(obj, param, cityInfo){
                var oCitys = obj.find("span");
                oCitys.eq(0).html(cityInfo.FromCity);
                oCitys.eq(3).html(cityInfo.ToCity);
                oCitys.eq(1).html("分段计价："+cityInfo.Price+".00元");

                animalToLine(obj, param);
            }
            //添加位置动画
            function animalToLine(obj, param){
                var oUl = obj.length==2?obj.eq(1):obj;
                var oYline = obj.find("div.line_y").eq(0);
                var oXLine = obj.find("p.line").eq(0);

                oUl.animate({ 
                    top: param.ulY,
                    marginLeft: param.ulX
                    }, 800 );
                oYline.animate({
                        height: param.lineY,
                        marginTop: -param.lineY
                    }, 
                    800 ,
                    function(){
                        oXLine.animate({ width: param.lineX}, 800 );
                    });
            }
            //添加城市
            function addCity(city, prevCity){
                cityInfo = {FromCity:prevCity,ToCity:city,Price:'0'};
                if(findCity(cityInfo)!=-1){
                    alert('该线路已添加');
                    return;
                }
                //追加city
                var index = 0;
                var arr = [];
                var max = 1;
                for(var i=0; i<defaults.SubCities.length; i++){
                    arr.push(defaults.SubCities[i]);
                    if(max==1&&defaults.SubCities[i] == prevCity){
                        arr.push(city);
                        index = i+1;

                        max--;//控制if只执行一次
                    }
                }
                if(max == 1){
                    alert('未在图中找到上一站 '+prevCity);
                    return;
                }
                defaults.SubCities = arr;
                defaults.SubCityinfos.push(cityInfo);

                citySort();
                fnDraw('add', index);
            }
            //重绘
            function fnDraw(type, index){
                var top = 30;
                var list_x=parseInt(defaults.Width/2/defaults.SubCityinfos.length);//left
                var line_x=defaults.Width-defaults.SubCityinfos.length*list_x;//line width

                for(var i=0; i<defaults.SubCityinfos.length; i++){
                     var x=list_x*(i+1);//every left
                     var y = defaults.padding*(i+1)+top;//every top
                     var line_y=y-12-top;//line height
                     //ul位置参数信息
                     var param = {
                        ulX:x,
                        ulY:y,
                        lineY:line_y,
                        lineX:line_x
                    }
                    
                    var oUl = null;
                    if(type == 'add'){//添加城市
                        var oUls = $(_this).find("ul");
                        if(index!=i){//已存在城市直接获取
                            oUl = oUls.eq(i+1);
                        }else{//新城市dom创建
                            oUl = $(creatUl(param));
                            oUls.eq(index).after(oUl);
                        }
                    }else if(type == 'del'){//删除城市

                    }else{//全部
                        oUl = $(creatUl(param));
                        $(_this).append(oUl);
                    }
                    
                    initObj(oUl, param, defaults.SubCityinfos[i]);
                }
            }
            //内部排序
            function citySort(){
                var arr = [];
                for(var i=0; i<defaults.SubCities.length; i++){
                    for(var j=0; j<defaults.SubCityinfos.length; j++){
                        if(defaults.SubCities[i] == defaults.SubCityinfos[j].ToCity){
                            arr.push(defaults.SubCityinfos[j]);
                            break;
                        }
                    }
                }
                defaults.SubCityinfos = arr;
            }
            //更新城市价格
            function updateCityPrice(option){
                var i = findCity(option);
                if(i == -1){
                    alert("error更新失败，路线未找到"); 
                    this.refrens();
                    return;
                }

                defaults.SubCityinfos[i].Price = option.Price;
                var oCitys = $(_this).find("ul").eq(i+1).find("span");
                oCitys.eq(1).html("分段计价："+option.Price+".00元");
            }
            //查找城市索引
            function findCity(option){
                for(var i=0; i<defaults.SubCityinfos.length; i++){
                    if(defaults.SubCityinfos[i].FromCity==option.FromCity&&defaults.SubCityinfos[i].ToCity==option.ToCity){
                        return i;
                    }
                }
                return -1;
            }

            /*暴露fn*/
            this.clear = function(){
                $(this).empty();
            }
            this.reset=function(option){
                defaults = $.extend({}, defaults, option);
            }
            this.addCity=function(City, prevCity){
                addCity(City, prevCity);
            }
            this.AddCityPrice=function(option){
                updateCityPrice(option);
            }
            this.GetCityPrice = function(cityinfo){
                var i = findCity(cityinfo);
                if(i == -1){
                    alert("error获取失败，路线未找到"); 
                    return "error 404";
                }
                return defaults.SubCityinfos[i].Price;
            }
            this.updateCityPrice=function(option){
                updateCityPrice(option);
            }
            this.deleteCityPrice=function(option){
                option = {FromCity:option.FromCity,ToCity:option.ToCity,Price:'00'};
                updateCityPrice(option);
            }
            this.GetOptions = function(){
                var msg = "";
                $.each( defaults, function(i, n){
                  msg += "Name: " + i + ", Value: " + n +"\n";
                });
                return msg;
            }
            this.refrens=function(){
                this.clear();
                creat(this);
            }
            
            return this;
        }
})(jQuery);