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
      location.href = "./token-info.html";
    } else {
      location.href = "./404.html";
    }
  });
});


AOS.init({
  debounceDelay: 50, 
  // throttleDelay:800, 
  duration: 1000,
});