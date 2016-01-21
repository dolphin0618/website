/**
* jquery.pagination.js v1.0
* jquery分页插件.
* 2015-09-02
* shanghang
* 78075021@qq.com
*/
'use strict'
!(function($){
	var methods = {
		//public
		init : function(options){
			var setting = $.extend({
				items: 1,
				itemsOnPage: 1,
				pages: 0,
				displayedPages: 3,
				edges: 1,
				currentPage: 1,
				hrefTextPrefix: '#page-',
				hrefTextSuffix: '',
				prevText: '<',
				nextText: '>',
				ellipseText: '&hellip;',
				selectOnClick: true,
				onPageClick: function(pageNumber, event) {
					//点击回调
				},
				init: function() {
					// 分页组件初始化完成时回调
				}
			}, options || {});
			//pages计算
			setting.pages = setting.pages?setting.pages:Math.ceil(setting.items/setting.itemsOnPage);
			//edges验证
			setting.edges = Math.min(setting.pages/2, setting.edges);
			//绘制
			this.data('config', setting);
			methods._draw.call(this);
			//绑定点击事件
			if(!this[0].getAttribute('bind')){
				methods._bindEvent.call(this);
				this[0].setAttribute('bind', 'true');
			};
			//初始化完毕
			setting.init();

			return this;
		},
		selectPage : function(page) {
			methods._selectPage.call(this, page);
			return this;
		},
		prevPage : function() {
			var o = this.data('config');
			if (o.currentPage > 1) {
				methods._selectPage.call(this, o.currentPage - 1);
			}
			return this;
		},
		nextPage : function() {
			var o = this.data('config');
			if (o.currentPage < o.pages) {
				methods._selectPage.call(this, o.currentPage + 1);
			}
			return this;
		},
		setPagesCount : function(pages){
			var config = this.data('config');
			config.pages = pages;
			return methods.setCurrentPage.call(this,  1);
		},
		getPagesCount : function() {
			return this.data('config').pages;
		},
		setCurrentPage : function (currentPage) {
			var config = this.data('config');
			config.currentPage = currentPage;
			return methods._draw.call(this);
		},
		getCurrentPage : function () {
			return this.data('config').currentPage;
		},
		destroy : function(){
			return this.empty();
		},
		redraw : function(){
			return methods._draw.call(this);
		},
		//private
		_destroy : function(){
			return this.empty();
		},
		_getScope : function(c){
			var halfDisplayedPages = (c.displayedPages-1)/2;
			return {
				star : c.currentPage > halfDisplayedPages?c.currentPage-Math.ceil(halfDisplayedPages):1,
				end : Math.min(Math.floor(c.currentPage+halfDisplayedPages), c.pages)
			}
		},
		_makeItem : function(obj){
			var config = this.data('config');
			if(!obj){
				return '<li class="disabled"><span class="ellipse">' + config.ellipseText + '</span></li>';
			};
			if(obj.active){
				return '<li class="active"><span class="current '+obj.liClass+'">'+obj.text+'</span></li>';
			}else{
				var turnPage = isNaN(obj.text)?(obj.liClass=='prev'?config.currentPage-1:config.currentPage+1):obj.text;
				return '<li><a href="'+config.hrefTextPrefix+turnPage+config.hrefTextSuffix+'" turnPage="'+turnPage+'" class="page-link '+obj.liClass+'">'+obj.text+'</a></li>';
			};
		},
		_draw : function(){
			var config = this.data('config');
			var scope = methods._getScope(config);

			methods._destroy.call(this);

			var $panel = this.prop("tagName") === "UL" ? this : $('<ul></ul>').appendTo(this);
			var _html = '';
			//上一页
			_html += methods._makeItem.call(this, {text: config.prevText, active: config.currentPage==1, liClass: 'prev'});
			
			var begin = 1;
			var isLue = config.pages == config.edges*2;
			//开始边界
			for (; begin <= config.edges; begin++) {
				_html += methods._makeItem.call(this, {text: begin, active: config.currentPage==begin, liClass: ''});
			};
			//边界到开始位置省略
			if(scope.star>begin && !isLue){
				begin = scope.star;
				_html += methods._makeItem.call(this);
			};
			begin = Math.min(config.pages-config.edges+1, begin);//开始位置大于尾边界时从尾边界开始画
			//开始到结束范围的
			for (; begin <= scope.end; begin++) {
				_html += methods._makeItem.call(this, {text: begin, active: config.currentPage==begin, liClass: ''});
			};
			//边界到结束位置省略
			var edgesEnd = config.pages-config.edges+1;
			if(begin<edgesEnd && !isLue){
				begin = edgesEnd;
				_html += methods._makeItem.call(this);
			};
			//结束边界
			for (; begin <= config.pages; begin++) {
				_html += methods._makeItem.call(this, {text: begin, active: config.currentPage==begin, liClass: ''});
			};
			//下一页
			_html += methods._makeItem.call(this, {text: config.nextText, active: config.currentPage==config.pages, liClass: 'next'});

			$panel.append(_html);

			return this;
		},
		_bindEvent : function(){
			var self = this;
			self.on('click', '.page-link', function(event){
				var turnPage = ~~this.getAttribute('turnPage');
				return methods._selectPage.call(self, turnPage, event);
			});
		},
		_selectPage : function(turnPage, event){
			var config = this.data('config');
			config.currentPage = turnPage;
			methods._draw.call(this);
			return config.onPageClick(turnPage, event);
		}
	};
	
	$.fn.pagination = function(method) {
		if(methods[method] && method.charAt(0) != '_'){
			return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
		}else if(method && typeof method === 'object'){
			return methods.init.apply(this, arguments);
		}
	};

})(jQuery);
