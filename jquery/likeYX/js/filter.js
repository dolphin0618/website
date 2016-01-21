/*!
* 筛选 
* 2013-08-29.
* 商 航
* 使用说明，需要bootstrap.css  jquery.1.9+
* 需要给变量fdata赋值json对象
* json格式：	Map<List<String>>;
*var acrdata = {                                      
* 	var filterData = {
* 		"归档部门":["综合管理部","计划财务部","人力资源部"],
*		"年度":["2013","2012","2011","2010","1999","更早"]
*	};
*/

        	var rgmap = {};//标识选中
        	var fdata = null;
					function filterInit(filterData){
									fdata = filterData;
									$("#filter").children().remove();
									buildData();
					}
						////重新绑定事件
						function bindEvent(){
							
									$(".filter_choosemore").off("click", "**").bind('click', function() {//更多
											var thisobj = $(this);
											if(thisobj.attr("id")=="more"){
													thisobj.parent().prev().find('.dphide').removeClass('dphide');
													thisobj.html('收起');
													thisobj.attr("id","up");
											}else if(thisobj.attr("id")=="up"){
													thisobj.parent().prev().find('[id=append_dd]').addClass('dphide');
													thisobj.attr("id","more");
													thisobj.html('更多');
											}
									});
									$(".filter_dd").off("click", "**").on('click', function(){//筛选内容
										var thisobj = $(this);
										if($('.filter_sure').hasClass("hide")){//单选
											if(thisobj.hasClass("filter_dd_on"))return false;//如果已选中
											thisobj.siblings().first().removeClass("filter_dt_on");
											thisobj.siblings().removeClass("filter_dd_on");
											thisobj.addClass("filter_dd_on");
											rgmap[thisobj.attr("rg")] = true;//标识选中
										}else{//多选
											thisobj.siblings().first().removeClass("filter_dt_on");//去掉全部样式
											if(thisobj.hasClass("filter_dd_on")){//如果选择了
												thisobj.removeClass("filter_dd_on");//取消选择
												if(!thisobj.siblings().hasClass("filter_dd_on")){//如果至少有一个被选择
													thisobj.siblings().first().addClass("filter_dt_on");//加上全部样式
												}
												rgmap[thisobj.attr("rg")] = false;//标识取消选中
											}else{
												thisobj.addClass("filter_dd_on");
												rgmap[thisobj.attr("rg")] = true;//标识选中
											}
											return false;
										}
									});
									$(".filter_dt").off("click", "**").on('click', function(){//全部
											var thisobj = $(this);
											if(thisobj.hasClass("filter_dt_on"))return false;//如果已选中
											thisobj.addClass("filter_dt_on");
											thisobj.siblings().removeClass("filter_dd_on");
											$(".filter_sure").off("click", "**");
									});
									$(".filter_sure").off("click", "**").on('click', function(){//确定
											var i = 0;
											var val = null;
											var vals = '';
											for(var obj in fdata){
													val = fdata[obj].val;
													vals += fdata[obj].code + ":";
													var bean = false;
													for(var j = 0;j<val.length;j++){
															if(rgmap[(i+'-'+j)] == true){
																	vals += val[j]+",";
																	bean = true;
															}
													}
													if(bean)vals = vals.substring(0,vals.length-1);
													vals += "|";
													i++;
											}
											vals = vals.substring(0,vals.length-1);
											alert(vals);
									});
						}
						
						function buildData(){
									var rg = 0;
									var filter = $("#filter");
									filter.append('<div class="filter_on"><DIV class="filter_on_tit">结果筛选：</DIV>'+
									'<DIV class="filter_on_con"></DIV><DIV class="filter_on_act">'+
									'<A href="javascript:;" onclick="filterMoreOn(this);">开启多选模式</A> </DIV>	</div>');
					
									for(var obj in fdata){
										filter.append(appendToHtml(fdata[obj], rg++));	
									}
									filter.append('<A class="filter_sure hide" href="javascript:;">确定</A>');
									$(".filter_dt").addClass("filter_dt_on");
									
									bindEvent();//重新绑定事件
						}
						
						function appendToHtml(item, j){
						var hasmore = false;
						var _html = '<DIV class="filter_item  filter_item_multiple">';
								_html+= '<DIV class=filter_tit id="'+item.code+'">'+item.name+'：</DIV><DIV class=filter_con><DL class=filter_dl>';
								_html+= '<DT class="filter_dt "><A href="javascript:;">全部</A></DT>';
						var val = item.val;
								for(var i = 0;i<val.length;i++){
									var rg = j+'-'+i;//标识记录
									if(i<10){//超过10个显示更多
										_html+= '<DD class="filter_dd " rg="'+rg+'"><A  title="">'+val[i]+'<SPAN class=filter_x>×</SPAN></A> </DD>';
									}else{
										_html+= '<DD class="filter_dd dphide" id="append_dd" rg="'+rg+'"><A  title="">'+val[i]+'<SPAN class=filter_x>×</SPAN></A> </DD>';
										hasmore = true;	
									}
									rgmap[rg] = false;
								}
								_html+= '</DL></DIV>';
								if(hasmore)_html+= '<DIV class=filter_act><A id="more" class="filter_choosemore" href="javascript:;">更多</A></DIV>';
								_html+= '</DIV>';
								return _html;
						}
						function filterMoreOn(on){//多选模式开关
							var filterOn = $(on);
							var filterSure = $('.filter_sure'); 
							if(filterSure.hasClass("hide")){		
									filterSure.removeClass("hide");
									$('.filter_dt').addClass("hide");
									filterOn.html("关闭多选模式");					
							}else{
									filterSure.addClass("hide");
									$('.filter_dt').removeClass("hide");
									filterOn.html("开启多选模式");
							}
							
						}
					function filteron(obj){
						var filter = $("#filter");
						if(filter.height()!=0){
								filter.animate( {height : '0px'}, 300);
								$(obj).html("展 开");
						}else{
								filter.animate( {height : '100%'}, 300);
								$(obj).html("收 起");
						}
					}