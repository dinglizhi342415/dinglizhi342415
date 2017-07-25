$(function() {
	$('.sp_title div').click(function() {
		if($(this).attr('class') == 'sp_shore') {
			$(this).attr('class', 'sp_baby')
		}
		$(this).siblings().attr('class', 'sp_shore')
	})
	//搜索栏宝贝与店铺切换
	$('.sp_ul li').click(function() {
		$(this).siblings().attr('id', '')
		$(this).attr('id', 'li_show')
	})
	//大分类列表选择栏
	$('.page_list ul li').click(function() {
		$(this).siblings().attr('id', '')
		$(this).attr('id', 'page_list_checked')
	})
	//页数点击效果切换
	$('.middle_img_list ul li').mouseover(function() {
		$(this).siblings().stop().animate({ opacity: '0.5' }, 500)
		$(this).parent().parent().siblings().children().children().stop().animate({ opacity: '0.5' }, 500)
		$(this).stop().animate({ opacity: '1' }, 500)
	})
	$('.middle_img_all').mouseout(function() {
		$(this).children().children().children().stop().animate({ opacity: '1' }, 500)
	})
	//宝贝图片动画遮罩效果
	//列表
	var arr = [
		{ img: "img/lig005.gif", price: "171", star: "300", detail: "2017新款百搭风格，潮流新品,热款推荐巴拉巴拉" },
		{ img: "img/lig004.gif", price: "172", star: "300", detail: "2017新款百搭风格，潮流新品,热款推荐巴拉巴拉" },
		{ img: "img/lig003.gif", price: "178", star: "300", detail: "2017新款百搭风格，潮流新品,热款推荐巴拉巴拉" },
		{ img: "img/lig002.gif", price: "179", star: "300", detail: "2017新款百搭风格，潮流新品,热款推荐巴拉巴拉" },
		{ img: "img/lig001.gif", price: "180", star: "300", detail: "2017新款百搭风格，潮流新品,热款推荐巴拉巴拉" },
		{ img: "img/lig005.gif", price: "171", star: "300", detail: "2017新款百搭风格，潮流新品,热款推荐巴拉巴拉" },
		{ img: "img/lig004.gif", price: "172", star: "300", detail: "2017新款百搭风格，潮流新品,热款推荐巴拉巴拉" },
		{ img: "img/lig003.gif", price: "178", star: "300", detail: "2017新款百搭风格，潮流新品,热款推荐巴拉巴拉" },
		{ img: "img/lig002.gif", price: "179", star: "300", detail: "2017新款百搭风格，潮流新品,热款推荐巴拉巴拉" },
		{ img: "img/lig001.gif", price: "180", star: "300", detail: "2017新款百搭风格，潮流新品,热款推荐巴拉巴拉" },
		{ img: "img/lig005.gif", price: "171", star: "300", detail: "2017新款百搭风格，潮流新品,热款推荐巴拉巴拉" },
		{ img: "img/lig004.gif", price: "172", star: "300", detail: "2017新款百搭风格，潮流新品,热款推荐巴拉巴拉" },
		{ img: "img/lig003.gif", price: "178", star: "300", detail: "2017新款百搭风格，潮流新品,热款推荐巴拉巴拉" },
		{ img: "img/lig002.gif", price: "179", star: "300", detail: "2017新款百搭风格，潮流新品,热款推荐巴拉巴拉" },
		{ img: "img/lig001.gif", price: "180", star: "300", detail: "2017新款百搭风格，潮流新品,热款推荐巴拉巴拉" },
		{ img: "img/lig005.gif", price: "171", star: "300", detail: "2017新款百搭风格，潮流新品,热款推荐巴拉巴拉" },
		{ img: "img/lig004.gif", price: "172", star: "300", detail: "2017新款百搭风格，潮流新品,热款推荐巴拉巴拉" },
		{ img: "img/lig003.gif", price: "178", star: "300", detail: "2017新款百搭风格，潮流新品,热款推荐巴拉巴拉" },
		{ img: "img/lig002.gif", price: "179", star: "300", detail: "2017新款百搭风格，潮流新品,热款推荐巴拉巴拉" },
		{ img: "img/lig001.gif", price: "180", star: "300", detail: "2017新款百搭风格，潮流新品,热款推荐巴拉巴拉" },
	];
	list(arr)
	//点击价格排序
	$("#price1").click(function() {
		$(".middle_img_all").html("")
		arr.sort(function(a, b) {
			return a.price - b.price
		});
		list(arr);
		for(var i = 0; i < arr.length; i++) {
			console.log(arr[i].price)

		}
		console.log(i)
	})
	//($('<div class="list nomargin"><img src="' + arr[i].img + '"><p><i>￥' + arr[i].price + '</i><i><img src="img/xing.png">' + arr[i].star +
	//						'</i></p><p>' + arr[i].detail + '</p></div>'))
	function list(arr) {
		for(i = 0; i < 20; i++) {
			if(arr[i].price >= 170 && arr[i].price <= 180) {
				if((i + 1) % 5 == 0) {
					$(".middle_img_all").append($('<div class="list nomargin"><img src="' + arr[i].img + '"><p><i>￥' + arr[i].price + '</i><i><img src="img/xing.png">' + arr[i].star +
						'</i></p><p>' + arr[i].detail + '</p></div>'))
				} else {
					$(".middle_img_all").append($('<div class="list"><img src="' + arr[i].img + '"><p><i>￥' + arr[i].price + '</i><i><img src="img/xing.png">' + arr[i].star +
						'</i></p><p>' + arr[i].detail + '</p></div>'))
				}
			}
		}
		return i;
	}

	//流行、上新、价格切换
	$(".top_two_list>ul>li").click(function() {
		$(this).siblings().attr('id', '')
		$(this).attr('id', 'pop')
	})

	//价格搜索
	$(".price_done").click(function() {
		//console.log($("#cost,#cost1").val()<170)
		if($("#cost").val() < 170) {

			var mag = "请输入大于170"
			$(".onError").html("第一个输入框" + mag)
		} else if($("#cost").val() > 180) {
			var mag = "请输入小于180"
			$(".onError").html("第一个输入框" + mmag)
		} else {
			var mag = "成功！"
		}
		if($("#cost1").val() < 170) {

			var mag = "请输入大于170"
			$(".onFrror").html("第二个输入框" + mag)
		} else if($("#cost1").val() > 180) {
			var mag = "请输入小于180"
			$(".onFrror").html("第二个输入框" + mag)
		} else {
			var mag = "成功！"
		}
		$(".middle_img_all").html("")
		arr.sort(function(a, b) {
			return a.price - b.price
		});
		var arra=[];
		for(i = 0; i < 20; i++) {
			if(arr[i].price >= $("#cost").val() && arr[i].price <= $("#cost1").val()) {
				arra[arra.length]=arr[i];
				
				
			}

		}
		for(var j=0;j<arra.length;j++){
					console.log((j+1))
					if((j+1) % 5 == 0) {
					$(".middle_img_all").append($('<div class="list nomargin"><img src="' + arra[j].img + '"><p><i>￥' + arra[j].price + '</i><i><img src="img/xing.png">' + arra[j].star +
						'</i></p><p>' + arra[j].detail + '</p></div>'))
				} else {
					$(".middle_img_all").append($('<div class="list"><img src="' + arra[j].img + '"><p><i>￥' + arra[j].price + '</i><i><img src="img/xing.png">' + arra[j].star +
						'</i></p><p>' + arra[j].detail + '</p></div>'))
				}
			}
	})


	$(".title_login span").html(window.localStorage.login);
	if($(".title_login span").html()=="undefined"){
		$(".title_login span").html("登录");
		$(".title_join span").html("注册");
	}else{
		$(".title_join span").html("退出");
		
	}

	$(".title_join span").click(function(){
		if($(".title_join span").html()=="退出"){
			window.localStorage.login=undefined;
			window.location.href="index.html";
		}else{
			window.localStorage.demo="register";
			window.location.href="register_and_login.html";
		}
	})
})