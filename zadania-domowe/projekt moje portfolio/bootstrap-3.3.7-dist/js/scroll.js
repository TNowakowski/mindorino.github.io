
'use strict';
$(document).ready(function (){
    
$('a[href*=\\#]').on('click', function(event){     
    event.preventDefault();
    $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
});   
//    w poniższym trzeba jeszcze zrobić że po odświerzeniu ma się zmienić kolor na inny niezależnie w którym jest miejscu
$(window).on("scroll", function() {
    if($(window).scrollTop() > 20) {
        $("#mainnav").addClass("scrollkolor");
    } else {
       $("#mainnav").removeClass("scrollkolor");
    }
});
    
});