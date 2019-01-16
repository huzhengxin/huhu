$(function(){
    $.ajax({
        url:"http://127.0.0.1:3000/index",
        type:"get",
        dataType:"json",
        success:function(res){
           //console.log(res)
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
})