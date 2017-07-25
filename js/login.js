$(function() {
	//注册登录页面跳转
	$(".register_list_right_top p").click(function() {
		$("#register_list_right").hide();
		$("#login_list_right").show();
	})
	$(".login_list_right_top p").click(function() {
		$("#register_list_right").show();
		$("#login_list_right").hide();
	})

	
	if(window.localStorage.demo=="register"){
        $('#register_list_right').hide();
        $('#login_list_right').show();
    }else{
        $('#register_list_right').show();
        $('#login_list_right').hide();
    }
	//登录页面验证
	$("#confirm").click(function() {
		if($('#username').val() == "") {
			var msg = "请输入手机号码";
			$("#username").siblings().html("*" + msg)
		}else if($('#password').val() == "") {
			$("#username").siblings().html();
			var msg = "请填写密码";
			$("#password").siblings().html("*" + msg)
		}else{
			$("#password").siblings().html();
			var username = $("#username").val();
			var $username = $("#username").val();
			var $password = $("#password").val();
			$.post('php/login.php',{
				username: $username,password: $password
			},function(result) {
					if(result) {
						window.localStorage.login=username;
						window.location.href="index.html";
					} else {
						$('#username1').siblings().html('用户名或密码错误');
					}
				})
		}

		
		
	})

	//条款确认
	$("#checkbox1").click(function() {
		if($("#checkbox1").is(":checked")==true){
			$(".register1").attr("id","register2");
			//注册页面验证
			$(".register1").click(function() {
				var flag = 1;
				var phone = $("#username1").val();
				var partten = /(?:\(\d{3,4}\)|\d{3,4}-?)\d{8}/;
				if(phone == "") {
					var msg = "手机号不能为空";
					//alert(msg);  
					$('#username1').siblings().html("*" + msg);
				} else if(partten.test(phone)) {
					$('#username1').siblings().html("");
				} else {
					var msg = "请输入有效的手机号！";
					$('#username1').siblings().html("*" + msg);
				}
				var $phone = $("#username1").val();
				var $code = $("password1").val();
				$.post('php/register.php',{
						phone:$phone
					},function(res) { 
						if(!res) {
							$('#username1').siblings().html("*手机号已被注册");
						}else{
							window.localStorage.reg=phone;
							window.location.href="personal_center.html";
						}
					}
				);
			});
		}else{
			$(".register1").attr("id","register1")
		}
		
	})
	
	
})