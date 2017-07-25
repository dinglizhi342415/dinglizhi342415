$(function(){
	$("#login").html(window.localStorage.login);
    if($("#login").html()!="登录"){
        $("#register").html("退出");
    }

    if($("#login").html()=="undefined"){
        $("#login").html("登录");
        $("#register").html("注册");
    }

    //进入购物车
    $("#gwc").click(function(){
        if($("#login").html()!="登录"){
            window.location.href="shopping.html";
        }
    })

    

    

    $("#login,#register").click(function(){
        if($(this).html()=="登录"){
            window.localStorage.demo=$(this).attr('id');
            window.location.href="register_and_login.html";
        }else if($(this).html()=="注册"){
            window.localStorage.demo=$(this).attr('id');
            window.location.href="register_and_login.html";
        }else if($(this).html()=="退出"){
            window.localStorage.demo=undefined;
            window.localStorage.login=undefined;
            window.localStorage.reg=undefined;
            window.location.href="index.html";
        }else{
            window.localStorage.reg=$(this).html();
            window.location.href="personal_center.html";
        }
        
    })
})