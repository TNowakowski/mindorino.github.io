window.onload = function () {
  document.getElementById("hideAll").style.display = "none";
  $("nav li").on("click", function () {
    $("nav li").removeClass("active");
    $(this).addClass("active");
  });
  $("nav ul li a[href^='#']").on('click', function (e) {
    e.preventDefault();
    var hash = this.hash;
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 700, function () {
      window.location.hash = hash;
    });
  });

  new WOW().init();

  document.getElementById("navigation").classList.remove("d-none");
}


