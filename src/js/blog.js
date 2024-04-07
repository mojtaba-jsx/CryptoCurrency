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
  



let recentNewsWrapper = document.querySelector('.recent-news__wrapper');

fetch('https://660e35436ddfa2943b36123b.mockapi.io/api/v1/articles')
.then(response=>response.json())
.then(data=>{
  console.log(data);
  data.forEach((article)=>{
    recentNewsWrapper.insertAdjacentHTML('beforeend',`
    <div class="recent-news__box">
    <img
      src="${article.image}"
      alt="image"
      class="recent-news__box-image"
    />
    <div class="recent-news__box-date">
      <span class="recent-news__box-date--name">${article.author}</span>
      <span class="recent-news__box-date--text">${article.createdAt}</span>
    </div>
    <span class="recent-news__box-title">
      ${article.subject}
    </span>
    <p class="recent-news__box-text">
      ${(article.body).substring(0, 50) + '...'}
    </p>
<button class="recent-news__box-btn">Read More</button>


  </div>
    `)
  })
})