$(window).scroll(function(){
    parallax();

})
function parallax(){
   
    var imgPos =$(window).scrollTop()+1;
    
    $(".header").css("transform", 'translate(0px,' + imgPos/5+'%)');
    $(".textbody").css("transform", 'translate(0px,-' + imgPos/8+'%)');

};

