let tableChart = document.querySelector("#table-chart");
let pageNumberFromSessionStorage = sessionStorage.getItem("pageNumber");

window.addEventListener("load", getCoinInfo);
function getCoinInfo() {
  //   tableChart.innerHTML = "";
  fetch(
    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=20&page=${pageNumberFromSessionStorage}&x_cg_demo_api_key=CG-3bjv7fwArQ5Tw29Kii5swyL1`
  )
    .then((res) => res.json())
    .then((coins) => {
      console.log(coins);
      coins.forEach((coin) => {
        tableChart.insertAdjacentHTML(
          "beforeend",
          `
        <tr class="table__row">
        <td class="table__data">${coin.market_cap_rank}</td>

        <td class="table__data">
          <div class="table__data__box">
            <img
              src="${coin.image}"
              alt="image"
              class="table__data__box-image"
            />
            ${coin.symbol.toUpperCase()}
            <span class="table__data__box-name">${coin.name}</span>
          </div>
        </td>
        <td class="table__data">$ ${coin.current_price.toLocaleString()}</td>
        <td class="table__data">${Math.trunc(coin.price_change_24h)}</td>
        <td class="table__data red low__price">$
         ${coin.low_24h.toLocaleString()}
         <svg class='down-token' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6 9 12.75l4.286-4.286a11.948 11.948 0 0 1 4.306 6.43l.776 2.898m0 0 3.182-5.511m-3.182 5.51-5.511-3.181" />
        </svg>

         </td>

        <td class="table__data green high__price">$
         ${coin.high_24h.toLocaleString()}
         <svg class='up-token' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
             </svg>

         </td>
        <td class="table__data">${coin.market_cap}</td>
        <td class="table__data">
        <a href="#" class="table__data-link" onclick='clickHandler(event)'>Info Of ${coin.id}</a>
        </td>
      </tr>
        `
        );
      });
    });
}

function clickHandler(event) {
  let CoinID = event.target.innerHTML.split(" ").slice(2).join(" ");
  sessionStorage.setItem("CoinID", CoinID);
  location.href = "token-info.html";
}

let paginationListItem = document.querySelectorAll(".pagination__list-item");
const paginationListItemLinks = document.querySelectorAll(
  ".pagination__list-item a"
);

paginationListItem.forEach((item) => {
  item.addEventListener("click", (event) => {
    sessionStorage.setItem("pageNumber", event.target.innerHTML);
    location.reload();
    window.scrollTo(0, 0);
  });
});
