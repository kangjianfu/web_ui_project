
$(function(){
   
 $(window).on('resize',set_carousel_back).trigger('resize')
    
    
})
//设置轮播图的背景
function set_carousel_back(){
 //获取屏幕宽度
    var windowWidth=$(window).width();
    var isSmallScreen=parseInt(windowWidth)<768
    $("#main_ad > .carousel-inner > .item").each(function(index, el) {
        $(el).css('backgroundImage','url('+$(el).data(isSmallScreen?'image-xs':'image-lg')+')') //我们需要小图时候图片等比例缩放
        if(isSmallScreen){
            $(el).html('<img src="'+$(el).data('image-xs')+'" />')
        }else{
            $(el).empty()
        }
        
    });
}