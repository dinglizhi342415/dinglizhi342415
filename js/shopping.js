$(function () {
    var i=1,j,total=0,arr=[],j1;
    /*全选上*/
    $('.input input').click(function () {
        if($('.input input').is(':checked')==true){
            $('.checked').prop("checked",true);
            $('.inputs input').prop("checked",true);
            $('.input_sum input').prop("checked",true);
            for(var k=0;k<=$('.checked').length;k++){
                if(k==$('.checked').length){
                    $(".total span").html(total);
                }else{
                    total+=parseFloat($('.subtotal').eq(k).html());

                }
            }

        }else{
            $('.checked').prop("checked",false);
            $('.inputs input').prop("checked",false);
            $('.input_sum input').prop("checked",false);
            $(".total span").html("0.00");
            total=0;
        }
    })
    /*全选下*/
    $('.input_sum input').click(function () {
        if($('.input_sum input').is(':checked')==true){
            $('.inputs input').prop("checked",true);
            $('.checked').prop("checked",true);
            $('.input input').prop("checked",true);
            for(var k=0;k<=$('.checked').length;k++){
                if(k==$('.checked').length){
                    $(".total span").html(total);
                }else{
                    total+=parseFloat($('.subtotal').eq(k).html());
                }
            }
        }else{
            $('.inputs input').prop("checked",false);
            $('.checked').prop("checked",false);
            $('.input input').prop("checked",false);
            $(".total span").html("0.00");
            total=0;
        }
    })


    /*单选*/
    $('.checked').click(function () {
        if($(this).is(':checked')==true){
            total+=parseFloat($(this).parent().siblings().find(".subtotal").html());
            $(".total span").html(total);
            arr[0]=total;
        }else{
            total-=parseFloat($(this).parent().siblings().find(".subtotal").html());
            $(".total span").html(total);

            arr[0]=total;
        }
    })

    /*单删除*/
    $('.del').click(function () {
        if(confirm("确认删除本商品！！！")){
            if($(this).parent().siblings().find(".checked").is(':checked')==true){
                $(".total span").html($(".total span").html()-parseFloat($(this).parent().siblings().find(".subtotal").html()));
                total-=parseFloat($(this).parent().siblings().find(".subtotal").html());
                
            }
            if($('.total span').html()=="0")$('.total span').html("0.00");
            $(this).parent().parent().remove();
            $('#shopping_num').html($('.checked').length);
            
        };
    })
 
    /*全删除*/
    $('.dell1').click(function () {
        if($('.input_sum input').is(':checked')==true||$('.input_sum input').is(':checked')==true){
            if(confirm("确认删除所有商品！！！")){
                $('.shopping_box').hide();
                $('.shopping_box_k').slideDown();
            }
        }
    })

    /*加*/
    $('.add').click(function () {

        i=$(this).prev().html();
        i++;
        $(this).prev().html(i);
        $(this).parent().parent().siblings().find('.subtotal').html(i*parseFloat($(this).parent().parent().siblings().find('.enable').html()));
        // console.log(parseFloat($(this).parent().parent().siblings().find('.enable').html()))
        if($(this).parent().parent().siblings().find(".checked").is(':checked')==true){
            total=parseFloat($(".total span").html());
            total+=parseFloat($(this).parent().parent().siblings().find('.enable').html());
            $(".total span").html(total);
            arr[0]=total;
        }
    })

    /*减*/
    $('.subtract').click(function () {
        i=$(this).next().html();
        if(i<=1){
            i=1;
            $(this).parent().parent().siblings().find('.subtotal').html(i*parseFloat($(this).parent().parent().siblings().find('.enable').html()));
            if($(this).parent().parent().siblings().find(".checked").is(':checked')==true){
                total=parseFloat($(".total span").html());
                $(".total span").html(total);
            }
        }else{
            i--;
            if($(this).parent().parent().siblings().find(".checked").is(':checked')==true) {
                total = parseFloat($(".total span").html());
                total -= parseFloat($(this).parent().parent().siblings().find('.enable').html());
                $(".total span").html(total);
            }
        }
        $(this).next().html(i);
        $(this).parent().parent().siblings().find(".subtotal").html(i*parseFloat($(this).parent().parent().siblings().find('.enable').html()));
    })
    //console.log($(".checked").parent().next().next().next().find("p").eq(1).html())
    //console.log(typeof $('.total span').html())

    /*判断总价是否为0.00*/
    $('.shopping_box input[type="checkbox"]').click(function () {
        if($('.total span').html()=="0")$('.total span').html("0.00");
        if($('.total span').html()!="0.00"){
            $('.total').next().attr({"class":"qrfk"});
            $('.total').next().text("确认付款 >");
        }else{
            $('.total').next().attr({"class":"daifukuan"});
            $('.total').next().text("待付款 >");
        }
    })


    /*所有商品个数*/
    $('#shopping_num').html($('.checked').length);

    /*导航条下拉*/
    $('.nav_right>ul>li').hover(function(){
        $(this).find('.top_sel').show();
    },function(){
        $(this).find('.top_sel').hide();
    })

    //购物车nav
    $(".user span").html(window.localStorage.login);
    $(".exit").click(function(){
        window.localStorage.demo=undefined;
        window.localStorage.login=undefined;
        window.localStorage.reg=undefined;
        window.location.href="index.html";
    })

    /*付款*/
    $(".jiezhang>div").eq(1).click(function(){
        if($(this).attr("class")=="qrfk"){
            window.localStorage.amount=$(".total span").html();
            window.location.href="affirm.html";
        }
        
    })
})
