$(function(){
   


	$(".menuright2").prev().children().click(function(){
		$(this).attr("class","baby");
		$(this).siblings().attr("class","stom");
	})
	$(".navtext>ul>li").hover(function(){
		if($(this).attr('class')=='navtextc'){
			$(this).css("color","#fff")
		}else{
			$(this).css("color","#ff3366");
		}
	},function(){
		if($(this).attr('class')=='navtextc'){
			$(this).css("color","#fff")
		}else{
			$(this).css("color","#404040");
		}
	})

    
    $(".main2f>ul>li").click(function(){
        window.location.href="details.html";
    });

    $(".menuright2 img").click(function(){
        window.location.href="list.html";
    })

    
	//二级导航
	$(".navtextc2f li,.navtext3f").hover(function(){
		$(this).find("ul").stop().fadeIn();
	},function(){
		$(this).find("ul").stop().fadeOut()
	})
    //轮播
	setInterval(function(){
		$(".bannertext").animate({marginLeft:-2698},function(){
			$(".bannertext img").eq(0).appendTo($(".bannertext"));
		})
	},1000)
	//倒计时
	var dayspan=document.getElementById('day');
     var hourspan=document.getElementById('hour');
     var minspan=document.getElementById('min');
     var secspan=document.getElementById("sec");
     function jishi(obj){
     	var now=new Date();
     	var year=obj.year||now.getFullYear();
     	var month=obj.month-1||now.getMonth();
     	var day=obj.day||now.getDate();
     	var hour=obj.hour||0;
     	var min=obj.min||0;
     	var sec=obj.sec||0;
     	var future=new Date(year,month,day,hour,min,sec);
     	var change=future.getTime()-now.getTime();
        var day=Math.floor(change/(1000*60*60*24));
        var hours=Math.floor(change/(1000*60*60));
        var hour=hours%24;
        var mins=Math.floor(change/(1000*60));
        var min=mins%60;
        var sec=Math.floor(change/1000);
        var sec=sec%60;
        return{day:day,hour:hour,min:min,sec:sec};
     }
     
     setInterval(function(){
     var res=jishi({month:7,day:24,hour:0});
     dayspan.innerHTML=res.day;
     hourspan.innerHTML=res.hour;
     minspan.innerHTML=res.min;
     secspan.innerHTML=res.sec;
     },1000)
     //每日新品
     $(".main2f ul li").hover(function(){
     	$(this).find(".outs").show();
     	$(this).attr("style","border:1px solid #ff3366;border-bottom:0");
     	$(this).siblings().attr("style","opacity:0.5")
     	
     },function(){
     	$(this).find(".outs").hide();
     	$(this).attr("style","border:0");
     	$(this).siblings().attr("style","opacity:1")
     	
     })
     //楼层
     var floor=$(".floor");
     var btn=$(".btn")
     var obj;
     window.onscroll=function(){
     	obj=document.body.scrollTop==0?document.documentElement:document.body;
        if(obj.scrollTop>=900){
        	floor.show()
        }else{
        	floor.hide()
        }
     }
    btn.hover(function(){
   		$(this).find(".word").show();
   		$(this).find(".num").hide();
   	},function(){
   		$(this).find(".word").hide();
   		$(this).find(".num").show();
    });
    btn.click(function(){
    	$('html,body').stop();
   		var i=$(this).index();
   		if(i==btn.length-1){
   			$('html,body').animate({scrollTop: 0},1000);
   		}else{
   			var j=1200*i+900;
   			$('html,body').animate({scrollTop: j},1000);
   		};
   	});



})