$("nav li").on("click", function() {
    $("nav li").removeClass("active");
    $(this).addClass("active");
  });
//smooth scrolling
$("nav ul li a[href^='#']").on('click', function(e) {
 // prevent default anchor click behavior
 e.preventDefault();
 // store hash
 var hash = this.hash;
 // animate
 $('html, body').animate({
   scrollTop: $(hash).offset().top
 }, 700, function(){
  // when done, add hash to url
 // (default click behavior)
     window.location.hash = hash;
   });
});
new WOW().init();