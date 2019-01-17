$(function(){
    $.ajax({
        url:"http://127.0.0.1:3000/index",
        type:"get",
        dataType:"json",
        success:function(res){
           //console.log(res)
            //主页商品加载
          var pro=res;
          var html="";
          for(var i=0;i<4;i++){
              html+=`<div class="col-3 pt-3">
                <a href="products.html"><img src=${pro[i].url_img}></a>
                <h3><a href="products.html">${pro[i].title}</a></h3>
                <p>${pro[i].detail}</p>
                <p><span>${pro[i].price.toFixed(2)}元</span></p>
              </div>`
          }
          $(".products .hList>:nth-child(3)").html(html);
          var html1="";
            for(var i=4;i<8;i++){
                html1+=`<div class="col-3 pt-3">
                <a href="products.html"><img src=${pro[i].url_img}></a>
                <h3><a href="products.html">${pro[i].title}</a></h3>
                <p>${pro[i].detail}</p>
                <p><span>${pro[i].price.toFixed(2)}元</span></p>
              </div>`
            }
            $(".products .hList>:nth-child(4)").html(html1);
            var html2="";
            for(var i=0;i<4;i++){
                html2+=`<div class="col-3 pt-3">
                <a href="products.html"><img src=${pro[i].url_img}></a>
                <h3><a href="products.html">${pro[i].title}</a></h3>
                <p>${pro[i].detail}</p>
                <p><span>${pro[i].price.toFixed(2)}元</span></p>
              </div>`
            }
            $(".products .othList>.intel>:last-child").html(html2);
            var html3="";
            for(var i=4;i<8;i++){
                html3+=`<div class="col-3 pt-3">
                <a href="products.html"><img src=${pro[i].url_img}></a>
                <h3><a href="products.html">${pro[i].title}</a></h3>
                <p>${pro[i].detail}</p>
                <p><span>${pro[i].price.toFixed(2)}元</span></p>
              </div>`
            }
            $(".products .othList>:last-child>:last-child").html(html3);
        }
    })
    //商品详情列表
    $(".homeList").on("mouseenter",".goodDeltail",function(){
        var $top=$(this);
        var $lis=$(".homeList>li");
        var i=parseInt($lis.index($top));
        $top.children(2).removeClass("out").css({'top':`${-42*i-12}px`})
    })
    $(".homeList").on("mouseleave",".goodDeltail",function(){
        var $top=$(this);
        $top.children(2).addClass("out")
    })
    //倒计时
    setInterval(function () {
        var date = new Date;
        // console.log(date.getHours())
        var nowHour = parseInt(date.getHours())
        // console.log(nowHour)
        var targetTime = nowHour +1
        // console.log(targetTime)
        $(".time").html(`${targetTime}:00场`)
        var nowMinutes = date.getMinutes()
        var minutes = 60-nowMinutes-1
        // console.log(60-nowMinutes-1)
        if(minutes<10){
          $(".minutes").html(`0${minutes}`)
        }else{
          $(".minutes").html(`${minutes}`)
        }
        var nowSeconds = date.getSeconds()
        var seconds = 60-nowSeconds-1
        if(seconds<10){
          $(".seconds").html(`0${seconds}`)
        }else{
          $(".seconds").html(`${seconds}`)
        }
      },1000);
})