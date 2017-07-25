$(function(){
	//导航栏
	$(".help").hover(function(){
		$(this).find("ul").stop().slideDown()
	},function(){
		$(this).find("ul").stop().slideUp()
	})
	//首页条
	$(".navtext1f").hover(function(){
		$(this).find("ul").stop().slideDown()
	},function(){
		$(this).find("ul").stop().slideUp()
	})
	//图片
	$(".smallimg ul li").mouseover(function(){
		var a=$(this).find("img").attr("src")
		$(".show img").attr("src",a);
	})
	$(".smallimg ul li").hover(function(){
		$(this).attr("style","opacity:1;border-bottom:1px solid red")
	},function(){
		$(this).attr("style","opacity:0.5;border-bottom:0")
	})
	$(".color div img").click(function(){
		var a=$(this).attr("src")
		$(".show img").attr("src",a);
	})
	//尺码
	$(".size div span").click(function(){
		$(".size div span").attr("index","0");
		$(this).css("border","1px solid red").attr("index","1");
		$(this).siblings().css("border","1px solid #e5e5e5").attr("index","0");

	})
	$(".size div span").hover(function(){
		if($(this).attr("index")==0){
			$(this).css("border","1px solid #000");
		}		
	},function(){
		if($(this).attr("index")==0){
			$(this).css("border","1px solid #e5e5e5");
		}
	})
	//购买数量
	var num=parseInt($(".num>div>span").html());
	$(".num>div>span").next().click(function(){
		num++
		$(this).prev().html(num);
	})
	$(".num div span").prev().click(function(){
		num--
		if(num<1){
			num=1;
		}else{
			$(this).next().html(num);
		}
	})
	//商品详情 累计评价切换
	$(".mall").click(function(){
		$(".maindetails").show();
		$(".evaluate").hide()
	})
	$(".eva").click(function(){
		$(".maindetails").hide();
		$(".evaluate").show()
	})

	window.onscroll=function(){
     	obj=document.body.scrollTop==0?document.documentElement:document.body;
        if(obj.scrollTop>=998){
        	$(".mainmiddle_top").css({"position":"fixed","top":"0","width":"740px"});
        	$(".beauty1f").css({"position":"fixed","top":"0","width":"216px"});
        	$(".mainright>p").css({"position":"fixed","top":"0","width":"240px"});
        }else{
        	$(".mainmiddle_top").css({"position":"static","top":"0"});
        	$(".beauty1f").css({"position":"static","top":"0","width":"200px"});
        	$(".mainright>p").css({"position":"static","top":"0","width":"240px"});
        }
     }

     $(".zhu span").eq(0).html(window.localStorage.login);
	if($(".zhu span").eq(0).html()=="undefined"){
		$(".zhu span").eq(0).html("登录");
		$(".zhu span").eq(1).html("注册");
	}else{
		$(".zhu span").eq(1).html("退出");
		
	}

	$(".zhu span").eq(1).click(function(){
		if($(".zhu span").eq(1).html()=="退出"){
			window.localStorage.login=undefined;
			window.location.href="index.html";
		}else{
			window.localStorage.demo="register";
			window.location.href="register_and_login.html";
		}
	})
	
})