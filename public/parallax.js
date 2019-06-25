$(window).scroll(function(){
    parallax();

})
function parallax(){
   
    var imgPos =$(window).scrollTop();
    
    $(".parallax").css("transform", 'translateY(0px,-' + imgPos/2+'%)');

}

