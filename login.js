$(function(){
    $("#btn").click(function(){
        var uname=$("#un").val();
        var upwd=$("#up").val();
        $.ajax(
            {url:"http://127.0.0.1:3000/users/login",
                type:"post",
                data:{uname,upwd},
                dataType:"json",
                success:function(res){
                            alert("登录成功");
                            location="index.html"
                }
        })
    })
    $("#un").blur(e=>{
        var reg=/^[a-zA-Z0-9]{6}$/;
        var uname=$("#un").val();
        if(uname==''){
            $(".userLog").html("用户名不能为空")
        }else if(!reg.test(uname)){
            $(".userLog").html("用户至少6位，请重新输入")
        }else(
            $(".userLog").html("")
        )
    });
    $("#up").blur(e=>{
        var regUp=/^\w{6,16}$/;
        var upwd=$("#up").val();
        if(upwd==''){
            $(".userUp").html("密码不能为空")
        }else if(!regUp.test(upwd)){
            $(".userUp").html("密码必须为6-16位，请重新输入")
        }else{
            $(".userUp").html("")
        }
    })
    $(window).keyup(e=>{
        if(e.keyCode==13){
            $("#btn").click()
        }
    })
})
