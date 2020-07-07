// header
$(document).on("scroll", function () {
  if
    ($(document).scrollTop() > 50) {
    $(".header").addClass("shrink-header");
  }
  else {
    $(".header").removeClass("shrink-header");
  }
});
// carousel
$('.owl-carousel').owlCarousel({
  items: 1,
  dots: true,
  nav: true,
  smartSpeed: 450,

  responsive: {
    0: {
      margin: 10,
    },
    768: {
      margin: 20,
    },
    992: {
      margin: -80,
    },
    1200: {
      margin: -260,
    }
  }
});
