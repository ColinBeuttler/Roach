$(window).scroll(function(){
    parallax();

})
function parallax(){
   
    var imgPos =$(window).scrollTop();
    
    $(".header").css("transform", 'translate(0px,' + imgPos/5+'%)');

}

