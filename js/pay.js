 $(function(){
    var newdate=new Date();
    var olddate=new Date(newdate.getFullYear(),newdate.getMonth(),newdate.getDate()+1,newdate.getHours(),newdate.getMinutes(),newdate.getSeconds());
    function day() {
        var newdate=new Date();
        var Time=olddate.getTime()-newdate.getTime();
        document.getElementById('hour').innerHTML=parseInt(Time/1000/60/60%24);
        document.getElementById('min').innerHTML=parseInt(Time/1000/60%60);
        document.getElementById('sec').innerHTML=parseInt(Time/1000%60);

    }
    setInterval(day,1000);



    $(".paylist").click(function(){
        $(this).siblings().find($(".for")).slideUp(100);
        $(this).find($(".for")).slideToggle(100);
    })

    $(".amount").html("￥"+window.localStorage.amount);
})