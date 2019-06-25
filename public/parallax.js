$(window).scroll(function(){
    parallax();

})
function parallax(){
   
    var imgPos =$(window).scrollTop();
    
    $(".header").css("transform", 'translateX(0px,-' + imgPos/2+'%)');

}

