$(window).scroll(function(){
    parallax();

})
function parallax(){
   
    var imgPos =$(window).scrollTop()+1;
    
    $(".header").css("transform", 'translate(0px,' + imgPos/5+'%)');
    $(".parallax").scroll(function (e) {
        parallax();

})};

