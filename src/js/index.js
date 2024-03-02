//! owl Slider Logic
$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    items: 2.2,
    loop: true,
    center: true,
    autoWidth: true,
    // nav:true,
    // slideBy:1,
    autoplay: true,
    mergeFit: true,
    responsive: {
      0: {
        items: 1,
        // nav:true
      },
      600: {
        items: 3,
        // nav:false
      },
      1920: {
        items: 2,
        nav:false,
        loop: true,
      },
    },
    nav: true,
  });
});
