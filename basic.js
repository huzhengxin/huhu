$(function(){
  //鼠标进入导航时触发的事件
  $(".nav").on("mouseenter",".nav-item",function(){
    $li=$(this)
    var lis=$(".nav>li")
    var i=parseInt(lis.index($li))
    //console.log(i)
    $li.children(2).removeClass("in")
                    .css({'left':`${-47*i-202}px`})
  })
  $(".nav").on("mouseleave",".nav-item",function(){
    
    $(".nav-detail").addClass("in")
  })
})