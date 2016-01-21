function exception(textE){
    (function(){
        var _html = '<div class="modal" style="margin:0px auto 20px;position:relative;z-index:1;'+
                    'max-width: 100%;width:360px;left: 80px; top: 140px;">'+
                    '<div class="modal-header">'+
                      '<button class="close" aria-hidden="true" type="button" data-dismiss="modal">×</button>'+
                      '<h3 class="text-error"><span class="label label-important t">! </span> 系统异常</h3></div>'+
                    '<div class="modal-body" style="display:none;height:680px;"><p></p></div>'+
                    '<div class="modal-footer">'+
                      '<a class="btn cl" href="#" data-dismiss="modal" aria-hidden="true">关闭</a>'+
                      '<a class="btn btn-primary" href="#">查看详情</a></div></div>';
        var modal = $(_html);
        var con = modal.find('.modal-body');

        modal.find('.close').on('click', function(){
          modal.fadeOut('normal', function(){
            modal.remove();
          });
        });
        modal.find('.cl').on('click', function(){
          modal.fadeOut('normal', function(){
            modal.remove();
          });
        });
        
        modal.find('.btn-primary').on('click', function(){
          if(this.open){
            $(this).html('查看详情');
            this.open=false;
            
            con.slideUp(400,function(){
              con.children('p').html('');
              modal.animate({'top':140,'left':80,'width':360},400);
            });
          }else{
            $(this).html('收起');
            this.open=true;
            
            modal.animate({'top':20,'left':0,'width':680},400,function(){
              con.children('p').html(textE);
              con.slideDown(400);
            });
          };
          
        });
        $('body').append(modal);
    })();
}