$(function() {
	$("#username").html(window.localStorage.reg);
	$("#register_mail").val(window.localStorage.reg);
	if($("#login").html()!="登录"){
        $("#register").html("退出");
    }
    $("#register").click(function(){
    	window.localStorage.demo=undefined;
        window.localStorage.login=undefined;
        window.localStorage.reg=undefined;
        window.location.href="index.html";
    })

	// 二级导航
	$(".nav_one").mouseover(function() {
		$(this).children().show();
	})
	$(".nav_one").mouseout(function() {
		$(this).children().hide();
	})
	$('.onesss').mouseover(function() {
		$(this).next().show();
	});
	$('.onesss').mouseout(function() {
		$(this).next().hide();
	});
	//上传头像
	$(function(){
		        upload("file","photo");//上传证书1
		    });
		/*
		 * id file input的id
		 * thumb 缩略图id
		 */
		    function upload(id,photo){
		        //上传证书
		        var u = new UploadPic();
		        u.init({
		            input: document.getElementById(id),
		            callback: function (base64,fileType) {
		                $("#"+photo).attr("src",base64);
		                $("#"+photo).attr("filetype",fileType);
		            },
		            loading: function () {
		                //say_error("等待上传...");
		            }
		        });
		    }
	//	生日

	$("#birthday").calendar({
		controlId: "divDate", // 弹出的日期控件ID，默认: $(this).attr("id") + "Calendar"
		speed: 200, // 三种预定速度之一的字符串("slow", "normal", or "fast")或表示动画时长的毫秒数值(如：1000),默认：200
		complement: true, // 是否显示日期或年空白处的前后月的补充,默认：true
		readonly: true, // 目标对象是否设为只读，默认：true
		upperLimit: new Date(), // 日期上限，默认：NaN(不限制)
		lowerLimit: new Date("2011/01/01"), // 日期下限，默认：NaN(不限制)
		callback: function() { // 点击选择日期后的回调函数
			//alert("您选择的日期是：" + $("#txtBeginDate").val());
		}
	});

	//	验证
	//姓名

	$("#true_name").blur(function() {
		if(!$("#true_name").val().match("[\u4E00-\u9FA5]{2,4}")) {
			var mag = "姓名不能包括字母，数字及特殊字符"
			$(this).next().addClass("onError")
			$(this).next().html(mag);
		} else {
			var mag = "成功"
			$(this).next().addClass("")
			$(this).next().html("")
		}
	})
	//	昵称
	$("#nickname").blur(function() {
		if($("#nickname").val() == "") {
			var mag = "昵称不能为空"
			$(this).next().addClass("onError")
			$(this).next().html(mag);
		} else if($("#nickname").val().length < 6 || $("#nickname").val().length > 20) {
			var mag = "用户名只能6~20位，中文占两位"
			$(this).next().addClass("onError")
			$(this).next().html(mag);
		} else {
			var mag = "成功"
			$(this).next().addClass("")
			$(this).next().html("")

		}
	})

	//	form提交
	$("#submit").click(function(){
		var $register_mail=$("#register_mail").val();
		var $true_name=$("#true_name").val();
		var $nickname=$("#nickname").val();
		if($("#female").is(":checked")==true){
			var $gender=$("#female").val();
		}else{
			var $gender=$("#male").val();
		}
		var $birthday=$("#birthday").val();
		var $provinceid=$("#province_id").val();
		var $city_id=$("#city_id").val();
		var $occupation=$("#occupation").val();
		var $introduction=$("#introduction").val();
		$.post('php/personal.php',{
				username: $register_mail,
				true_name: $true_name,
				nickname: $nickname,
				gender: $gender,
				birthday: $birthday,
				provinceid: $provinceid,
				city_id: $city_id,
				occupation: $occupation,
				introduction: $introduction
			},function(res) {
					if(res) {

						location.href = 'index.html';
					} else {
						alert(1);
					}
				})
	})
	

})

//地址
window.onload = function() {
	var province = document.getElementById("province_id");
	var city = document.getElementById("city_id");
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

}