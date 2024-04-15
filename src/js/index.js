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
        nav: false,
        loop: true,
      },
    },
    nav: true,
  });
});

let traderLeftList = document.querySelector(".trader__left-list");

window.addEventListener("load", getCoinInfoFortable);

function getCoinInfoFortable() {
  const options = {
    method: "GET",
    headers: { "x-cg-demo-api-key": "CG-3bjv7fwArQ5Tw29Kii5swyL1" },
  };

  fetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=5&page=1",
    options
  )
    .then((response) => response.json())
    .then((response) => {
      response.forEach((coin) => {
        traderLeftList.insertAdjacentHTML(
          "beforeend",
          `
      <div class="trader__left-list-item">
      <span class="trader__left-list-item-logo">
        <img src="${
          coin.image
        }" alt="image" class="trader__left-list-item-logo-image">
      </span>

      <span class="trader__left-list-item-name">
        ${coin.name}
        <span class="trader__left-list-item-name-abbreviation">
          ${coin.symbol.toUpperCase()}
        </span>
      </span>

      <span class="trader__left-list-item-price">
         $ ${coin.current_price.toLocaleString()}

      </span>
    </div>
      `
        );
      });
    });
}

AOS.init({
  debounceDelay: 50,
  // throttleDelay:800,
  duration: 1000,
});
// ! ////////////////////////////////////////////////////////

let articlesWrapper = document.querySelector(".articles__wrapper");
window.addEventListener("load", () => {
  fetch("https://660e35436ddfa2943b36123b.mockapi.io/api/v1/articles")
    .then((response) => response.json())
    .then((articles) => {
      let owlCarousel = $(".owl-carousel");
      console.log(articles);
      articles.forEach((article) => {
        owlCarousel
          .owlCarousel(
            "add",
            `
      <div class="articles__box">
      <img
        src="${article.image}"
        alt="image"
        class="articles__box-img"
      />
      <div class="articles__box-data">
        <span class="articles__box-author"> ${article.author} </span>

        <span class="articles__box-date"> ${article.createdAt} </span>
      </div>
      <span class="articles__box-title">
            ${article.subject}
      </span>
      <p class="articles__box-text">
            ${article.body.substring(0, 100) + "..."}
      </p>
      <a href="#" class="articles__box-btn" onclick='goToSelectedAtricle(${
        article.id
      })'> Read More ... </a>
    </div>
      `
          )
          .owlCarousel("update");
      });
    });
});

function goToSelectedAtricle(id) {
  console.log(id);
  sessionStorage.setItem("articleID", id);
  location.href = "./blog-info.html";
}



