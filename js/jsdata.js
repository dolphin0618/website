var data = [
{'title':'分页组件','time':'2015年9月','skill':'基于jquery制作的一款分页组件','imgId':'0045','link':'jquery/pagination/index.html'},
{'title':'PDF转换系统（静态页面部分）','time':'2015年3月','skill':'在紫光做的一款产品','imgId':'0001','link':'other/PDF/login.html'},
{'title':'模仿360练习','time':'2015年3月','skill':'切图、效果制作','imgId':'0002','link':'javascript/360/index.html'},
{'title':'模仿百度首页练习','time':'2015年3月','skill':'切图、效果制作','imgId':'0003','link':'javascript/baidu/index.html'},
{'title':'手风琴','time':'2015年2月','skill':'纯css3实现','imgId':'0004','link':'html5/accordion.html'},
{'title':'轮播图','time':'2015年2月','skill':'原生js+css实现','imgId':'0005','link':'javascript/banner_a/index.html'},
{'title':'3D照片墙特效（支持拖拽滚动、移动设备）','time':'2015年2月','skill':'使用threeJs3D引擎库','imgId':'0000','link':'other/sh.html'},
{'title':'图片hover边框交叉效果','time':'2015年2月','skill':'纯css3实现','imgId':'0007','link':'html5/pic_hover2.html'},
{'title':'css3按钮hover效果','time':'2015年1月','skill':'纯css3实现','imgId':'0008','link':'html5/hoverbtn.html'},
{'title':'百帘窗手风琴','time':'2014年12月','skill':'原生js+css实现','imgId':'0009','link':'javascript/accordion.html'},
{'title':'2048小游戏（使用方向键操作）','time':'2014年12月','skill':'js+css3实现','imgId':'0010','link':'javascript/2048.html'},
{'title':'仿必应首页效果','time':'2014年11月','skill':'原生js+css','imgId':'0011','link':'other/biying/index.html'},
{'title':'图片hover旋转','time':'2014年11月','skill':'纯css3','imgId':'0012','link':'html5/pic_hover3.html'},
{'title':'css3提示窗','time':'2014年11月','skill':'纯css3','imgId':'0013','link':'html5/tip.html'},
{'title':'旋转穿越效果','time':'2014年11月','skill':'使用canvas','imgId':'0014','link':'html5/tuoluo.html'},
{'title':'RMB洒落效果','time':'2014年11月','skill':'原生js+css3实现','imgId':'0006','link':'html5/money.html'},
{'title':'返回顶部','time':'2014年11月','skill':'jquery+css','imgId':'0015','link':'jquery/backTop/index.html'},
{'title':'仿易迅产品筛选框','time':'2014年10月','skill':'jquery+css','imgId':'0016','link':'jquery/likeYX/index.html'},
{'title':'货运物流插件（针对项目）','time':'2014年10月','skill':'jquery+css','imgId':'0017','link':'jquery/liucheng/index.html'},
{'title':'多功能下拉框（选车网）','time':'2014年10月','skill':'jquery+css','imgId':'0018','link':'jquery/selectDown/index.html'},
{'title':'菜单跟随页面滚动','time':'2014年9月','skill':'jquery+css','imgId':'0019','link':'jquery/gundong.html'},
{'title':'遮罩','time':'2014年9月','skill':'jquery+css','imgId':'0020','link':'jquery/zhezhao.html'},
{'title':'canvas制作的表','time':'2014年9月','skill':'使用html5的canvas实现','imgId':'0021','link':'html5/clock.html'},
{'title':'中间放大、放大自动随图片大小显示边框轮播图','time':'2014年9月','skill':'原生js+css','imgId':'0022','link':'javascript/banner_b/index.html'},
{'title':'完美无缝滚动','time':'2014年8月','skill':'原生js+css','imgId':'0023','link':'javascript/banner_f/index.html'},
{'title':'仿京东轮播广告图','time':'2014年8月','skill':'原生js+css','imgId':'0024','link':'javascript/banner_jd/index.html'},
{'title':'带进度条的轮播图','time':'2014年8月','skill':'原生js+css','imgId':'0025','link':'javascript/banner_s/index.html'},
{'title':'投篮小游戏(点击篮球控制角度、力度)','time':'2014年8月','skill':'原生js+css','imgId':'0026','link':'javascript/basketBall/index.html'},
{'title':'仿必应导航管理模块','time':'2014年7月','skill':'原生js+css','imgId':'0027','link':'javascript/bingyingNAV/index.html'},
{'title':'双色球随即摇号器','time':'2014年7月','skill':'原生js+css','imgId':'0028','link':'javascript/caipiao/index.html'},
{'title':'自定义日期选择控件','time':'2014年7月','skill':'原生js+css','imgId':'0029','link':'javascript/calendar/index.html'},
{'title':'自定义单选框、复选框','time':'2014年7月','skill':'原生js+css','imgId':'0030','link':'javascript/checkbox/index.html'},
{'title':'弹性横向导航','time':'2014年7月','skill':'原生js+css','imgId':'0031','link':'javascript/menu_t/index.html'},
{'title':'仿淘宝广告轮播窗','time':'2014年6月','skill':'原生js+css','imgId':'0032','link':'javascript/mogu/index.html'},
{'title':'图片跟鼠标位置上下滚动','time':'2014年6月','skill':'原生js+css','imgId':'0033','link':'javascript/mouseUD/index.html'},
{'title':'小游戏','time':'2014年6月','skill':'原生js+css','imgId':'0034','link':'javascript/run/index.html'},
{'title':'星星评分','time':'2014年6月','skill':'原生js+css','imgId':'0035','link':'javascript/start/index.html'},
{'title':'抢购到计时','time':'2014年6月','skill':'原生js+css','imgId':'0036','link':'javascript/timeCount/index.html'},
{'title':'瀑布流效果','time':'2014年6月','skill':'原生js+css','imgId':'0037','link':'javascript/waterfall/index.html'},
{'title':'计算器','time':'2014年6月','skill':'原生js+css','imgId':'0038','link':'javascript/calculator.html'},
{'title':'炫酷数码时钟','time':'2014年5月','skill':'原生js+css','imgId':'0039','link':'javascript/clock.html'},
{'title':'预加载图片、滚动条提示效果','time':'2014年4月','skill':'原生js+css','imgId':'0040','link':'javascript/loadIMG.html'},
{'title':'自定义下拉框','time':'2014年4月','skill':'原生js+css','imgId':'0041','link':'javascript/selectCity.html'},
{'title':'仿淘宝输入框水印效果','time':'2014年3月','skill':'原生js+css','imgId':'0042','link':'javascript/watermark.html'},
{'title':'矩形图片变蜂窝形、hover时旋转','time':'2014年3月','skill':'纯css3实现','imgId':'0043','link':'html5/beehive.html'},
{'title':'娱乐抽奖（点击鼠标旋转）','time':'2014年1月','skill':'使用html5的canvas实现','imgId':'0044','link':'html5/award.html'}
];