$(function(){
    $(".btn").click(function(){
        var uname=$(".uname").val();
        var upwd=$(".upwd").val();
        var email=$(".email").val();
        var tel=$(".tel").val();
        $.ajax({
        url:"http://127.0.0.1:3000/reg",
        type:"post",
        data:{uname,upwd,email,tel},
        dataType:"json",
        success:function(res){
         if(res.code==200){
            alert("注册成功")
            location="login.html"
         }
         }
       })
   })
   $(".uname").blur(e=>{
      var reg=/^[a-zA-Z0-9]{6}$/; 
      var uname=$(".uname").val();
      if(uname==''){
          $("#userName").html("用户名不能为空")
      }else if(!reg.test(uname)){
          $("#userName").html("用户至少6位，请重新输入")
      }else(
          $("#userName").html("")
      )
    });
    $(".upwd").blur(e=>{
        var regUp=/^\w{6,16}$/; 
        var upwd=$(".upwd").val();
        if(upwd==''){
            $("#userUp").html("密码不能为空")
        }else if(!regUp.test(upwd)){
            $("#userUp").html("密码必须为6-16位，请重新输入")
        }else(
            $("#userUp").html("")
        )
      })
      $(".email").blur(e=>{
        var regEm=/\w+ @ [0-9A-Za-z-]+ (\.[0-9A-Za-z-]+)+/; 
        var email=$(".email").val();
        if(email==''){
            $("#userEmail").html("邮箱地址不能为空")
        }else if(!regEm.test(email)){
            $("#userEmail").html("邮箱地址不正确，请重新输入")
        }else(
            $("#userEmail").html("")
        )
      });
      $(".tel").blur(e=>{
        var regT=/(\+86|0086)? \s* 1 [3-8] \d{9}/; 
        var tel=$(".tel").val();
        if(tel==''){
            $("#userTel").html("手机号不能为空")
        }else if(!regT.test(tel)){
            $("#userTel").html("手机号码输入有误，请重新输入")
        }else(
            $("#userTel").html("")
        )
      });
})
