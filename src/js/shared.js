let mobileMenuBtn = document.querySelector(".mobile-menu-btn");
let mobileMenu = document.querySelector(".mobile-menu");
let flag = false;

//* Logic For Show And Hide Mobile Menu
mobileMenuBtn.addEventListener("click", () => {
  if (!flag) {
    mobileMenu.style.display = "block";
    flag = true;
  } else {
    mobileMenu.style.display = "none";
    flag = false;
  }
});

//* Logic For SerchBox
let navbarSearchBox = document.querySelector(".navbar__left-search");
let navbarSearchIcon = document.querySelector(".navbar__middle-search-icon");

navbarSearchIcon.addEventListener("click", () => {
  let searchBoxValue = navbarSearchBox.value.toLowerCase();

  const options = {
    method: "GET",
    headers: { "x-cg-demo-api-key": "CG-3bjv7fwArQ5Tw29Kii5swyL1" },
  };

  fetch(
    `https://api.coingecko.com/api/v3/coins/${searchBoxValue}`,
    options
  ).then((response) => {
    if (response.status === 200) {
      sessionStorage.setItem("CoinID", searchBoxValue);
      location.href = "./src/html/token-info.html";
    } else {
      location.href = "./src/html/404.html";
    }
  });
});

let footerMainColumn2List = document.querySelector(
  ".footer-main__column2-list"
);

window.addEventListener("load", getCoinInFooter);
function getCoinInFooter() {
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
      // console.log(response);
      response.forEach((coin) => {
        footerMainColumn2List.insertAdjacentHTML(
          "beforeend",
          `
      <li class="footer-main__column2-item">
      <a href="#" class="footer-main__column2-link" onclick='setIdToSessionStorage(event)' >${coin.id.toUpperCase()}</a>
    </li>
      `
        );
      });
    });
}

function setIdToSessionStorage(event) {
  sessionStorage.setItem("CoinID", event.target.innerHTML.toLowerCase());
  location.href = "./token-info.html";
}
