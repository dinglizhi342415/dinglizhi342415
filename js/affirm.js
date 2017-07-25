$(function() {
	//	新增地址
	$("#newAddress").click(function() {
		$("#newAddress1").show()
	})
	$("#cancel").click(function() {
		$("#newAddress1").hide()
	})
	//	新增地址表单验证

	//邮政码验证
	$("#postalcode").blur(function() {

		var postcode = $("#postcode").val();
		if(is_postcode(postcode)) {
			var mag = "成功"
			$(".onError").html("")
		} else {
			var mag = "请填写正确的邮政编码"
			$(".onError").html(mag)
			return false;
		}
	})

	function is_postcode(postcode) {
		if(postcode == "") {
			return false;
		} else {
			if(!/^[0-9][0-9]{5}$/.test(postcode)) {
				return false;
			}
		}
		return true;
	}

	//	街道地址验证
	$("#address_textarea").blur(function() {
		if($(this).val() < 5 && $(this).val() > 100&&$(this).val()=="") {
			$(".address_p").css("color", "red");
		} else {
			$(".address_p").css("color", "#999");
		}
	})
})
//地址
window.onload = function() {
	var province = document.getElementById("save_id");
	var city = document.getElementById("town_id");
	var area = document.getElementById("district_id");
	//省份
	province.onfocus = function() {
		var num = provinceList.length;
		for(var i = 0; i < num; i++) {
			var option = document.createElement("option");
			option.text = provinceList[i].name;
			this.appendChild(option);
		}
	}
	//城市
	var num;
	province.onchange = function() {
		num = this.selectedIndex - 1;
		var arr = provinceList[num].cityList;
		for(var i = 0; i < arr.length; i++) {
			var option = document.createElement("option");
			option.text = arr[i].name;
			city.appendChild(option);
		}
	}
	//地区
	var num1;
	city.onchange = function() {
		num1 = this.selectedIndex - 1;
		var arr = provinceList[num].cityList[num1].areaList;
		for(var i = 0; i < arr.length; i++) {
			var option = document.createElement("option");
			option.text = arr[i];
			area.appendChild(option);
		}
	}

	//购物车nav
    $(".user span").html(window.localStorage.login);
    $(".exit").click(function(){
    	window.localStorage.demo=undefined;
        window.localStorage.login=undefined;
        window.localStorage.reg=undefined;
        window.location.href="index.html";
    })

    /*导航条下拉*/
    $('.nav_right>ul>li').hover(function(){
        $(this).find('.top_sel').show();
    },function(){
        $(this).find('.top_sel').hide();
    })

    /* 返回购物车*/
	$(".footer_left").click(function(){
		window.location.href="shopping.html";
	})

	/*金额*/
	$(".footer_right>.t1").html("￥"+window.localStorage.amount);

	/*确认付款*/
	$(".footer_right>button").click(function(){
		window.location.href="pay.html";
	})
}