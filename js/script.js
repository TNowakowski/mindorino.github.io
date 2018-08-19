document.getElementById("hideAll").style.display = "block";
window.onload = function() 
  { document.getElementById("hideAll").style.display = "none"; }

document.addEventListener("DOMContentLoaded", function(event) {
  $("nav li").on("click", function() {
    $("nav li").removeClass("active");
    $(this).addClass("active");
  });
$("nav ul li a[href^='#']").on('click', function(e) {
 e.preventDefault();
 var hash = this.hash;
 $('html, body').animate({
   scrollTop: $(hash).offset().top
 }, 700, function(){
     window.location.hash = hash;
   });
});
new WOW().init();
});

