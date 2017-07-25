$(document).ready(function(){
	var $width=parseInt($(".changeli").width());
    var n=0;
    $(".change").click(function(){
        n++;
        if(n==2){
            n=0
        }
        $(".changelist").animate({marginLeft:-($width*n)},10)
    })
})