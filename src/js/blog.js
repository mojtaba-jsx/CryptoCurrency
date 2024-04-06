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
  



fetch('https://660e35436ddfa2943b36123b.mockapi.io/api/v1/articles')
.then(response=>response.json())
.then(data=>console.log(data))