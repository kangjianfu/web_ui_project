
$(function(){
   
 $(window).on('resize',set_carousel_back).trigger('resize')
    
 //
 $('[data-toggle="tooltip"]').tooltip();
    set_tab_width();
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

//控制标签页的标签宽度
//
function set_tab_width(){
    var ul_container=$(".nav-tabs");

    //获取其所有子元素的宽度的和
    var tab_width=30;
    //遍历子元素
    console.info(ul_container.children().clientWidth)
    ul_container.children().each(function(index, el) {
        tab_width+=el.clientWidth
    });

    //判断当前宽度是否超出了屏幕宽度，如果超出了就显示横向滚动条
    if(tab_width>$(window).width()){
          $(ul_container).css('width',tab_width).parent().css('overflow-x','scroll');
    }
  
}