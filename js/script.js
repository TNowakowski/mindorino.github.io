window.onload = function () {
  document.getElementById("hideAll").style.display = "none";
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

  var navs = document.querySelectorAll('li.nav-item')

  window.onscroll = function navAnimate () {
    var points = [];
    document.querySelectorAll("section.section-header").forEach(function (elem) {
      points.push(elem.getBoundingClientRect());
    });
    for (i = 0; i < points.length; i++) {
      if (points[i].y <= 2 && -(points[i].height) < points[i].y) {
        navs[i].classList.add("active");
      } else {
        navs[i].classList.remove("active");
      }
    }

  }
  document.getElementById("navigation").classList.remove("d-none");
  window.onscroll();
}

