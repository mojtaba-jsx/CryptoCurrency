
// ! ///////////
let coinId = sessionStorage.getItem("CoinID");
let getChartinfo = () => {
  const options = {
    method: "GET",
    headers: { "x-cg-demo-api-key": "CG-3bjv7fwArQ5Tw29Kii5swyL1" },
  };
  fetch(
    `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=usd&days=30&interval=daily`,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      let arrayChartData = response.prices;
      //   console.log(arrayChartData);

      const outerArray = arrayChartData;

      const firstIndexes = [];
      const secondIndexes = [];

      for (let i = 0; i < outerArray.length; i++) {
        firstIndexes.push(outerArray[i][0]);
        secondIndexes.push(outerArray[i][1]);
      }
      const fiveDigitsNumbers = firstIndexes.map((firstIndexes) => {
        return firstIndexes.toString().slice(0, 6);
      });

      // console.log(firstIndexes);
      // console.log(secondIndexes);

      const ctx = document.getElementById("myChart");
      new Chart(ctx, {
        type: "line",
        data: {
          labels: fiveDigitsNumbers,
          datasets: [
            {
              label: coinId.toUpperCase(),
              data: secondIndexes,
              borderWidth: 1,
              fill: true,
              borderColor: "black",
              backgroundColor: "#fff4558a",
              showLine: false,
              // pointStyle: 'none',
              pointRadius: 0,
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
              circular: true,
              ticks: {
                color: "#7781ff",
              },
            },
          },

          responsive: true,
        },
      });

      


    });
};

// ! ///////////
let coinWrapper = document.querySelector(".coin__wrapper");
function getCoinMainInfo() {
  const options = {
    method: "GET",
    headers: { "x-cg-demo-api-key": "CG-3bjv7fwArQ5Tw29Kii5swyL1" },
  };

  fetch(`https://api.coingecko.com/api/v3/coins/${coinId}`, options)
    .then((response) => response.json())
    .then((response) => {
      coinWrapper.insertAdjacentHTML(
        "beforeend",
        `
      <div class="coin__bottom">
      <div class="coin__bottom__infos">
        <div class="coin__bottom__infos-rank">Market Cap Rank : ${
          response.market_cap_rank
        } </div>

        <div class="coin__bottom__infos-genesis-date">
          Genesis Date ${
            response.genesis_date ? response.genesis_date : "Once Time "
          }
        </div>

        <div class="coin__bottom__infos-website">
            
            <a href=${
              response.links.homepage[0]
            } class="coin__bottom__infos-website-link">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
              />
            </svg>
            Token HomePage
          </a>
        </div>

        <div class="coin__bottom__infos-forum">
          <a href= ${
            response.links.official_forum_url[0]
              ? response.links.official_forum_url[0]
              : "https://www.reddit.com/r/CryptoCurrency"
          } class="coin__bottom__infos-forum-link">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                d="M123.6 391.3c12.9-9.4 29.6-11.8 44.6-6.4c26.5 9.6 56.2 15.1 87.8 15.1c124.7 0 208-80.5 208-160s-83.3-160-208-160S48 160.5 48 240c0 32 12.4 62.8 35.7 89.2c8.6 9.7 12.8 22.5 11.8 35.5c-1.4 18.1-5.7 34.7-11.3 49.4c17-7.9 31.1-16.7 39.4-22.7zM21.2 431.9c1.8-2.7 3.5-5.4 5.1-8.1c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208s-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6c-15.1 6.6-32.3 12.6-50.1 16.1c-.8 .2-1.6 .3-2.4 .5c-4.4 .8-8.7 1.5-13.2 1.9c-.2 0-.5 .1-.7 .1c-5.1 .5-10.2 .8-15.3 .8c-6.5 0-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8 3.4-17.4c4.1-4.2 7.8-8.7 11.3-13.5c1.7-2.3 3.3-4.6 4.8-6.9c.1-.2 .2-.3 .3-.5z"
              />
            </svg>
            Forum
          </a>
        </div>

        <div class="coin__bottom__infos-hash">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64 64"
            stroke-width="3"
            stroke="currentColor"
            fill="none"
          >
            <circle cx="34.52" cy="11.43" r="5.82" />
            <circle cx="53.63" cy="31.6" r="5.82" />
            <circle cx="34.52" cy="50.57" r="5.82" />
            <circle cx="15.16" cy="42.03" r="5.82" />
            <circle cx="15.16" cy="19.27" r="5.82" />
            <circle cx="34.51" cy="29.27" r="4.7" />
            <line x1="20.17" y1="16.3" x2="28.9" y2="12.93" />
            <line x1="38.6" y1="15.59" x2="49.48" y2="27.52" />
            <line x1="50.07" y1="36.2" x2="38.67" y2="46.49" />
            <line x1="18.36" y1="24.13" x2="30.91" y2="46.01" />
            <line x1="20.31" y1="44.74" x2="28.7" y2="48.63" />
            <line x1="17.34" y1="36.63" x2="31.37" y2="16.32" />
            <line x1="20.52" y1="21.55" x2="30.34" y2="27.1" />
            <line x1="39.22" y1="29.8" x2="47.81" y2="30.45" />
            <line x1="34.51" y1="33.98" x2="34.52" y2="44.74" />
          </svg>
          ${
            response.hashing_algorithm ? response.hashing_algorithm : "Algoritm"
          }
        </div>

        <div class="coin__bottom__infos-github">
          <a href='${
            response.links.repos_url.github[0]
          }' class="coin__bottom__infos-github-link">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 496 512"
            >
              <path
                d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
              />
            </svg>
            GitHub
          </a>
        </div>

        <div class="coin__bottom__infos-24hchange">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z"
            />
          </svg>
          ${response.market_data.ath_change_percentage.usd} %
        </div>

        <div class="coin__bottom__infos-cap">Capacity ${
          response.market_data.market_cap.usd
        }$</div>

        <div class="coin__bottom__infos-whitepaper">
          <a href="${
            response.links.whitepaper
          }" class="coin__bottom__infos-whitepaper-link">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
              />
            </svg>

            Download WP
          </a>
        </div>

        <div class="coin__bottom__infos-votes">
          <span class="coin__bottom__infos-votes-agree">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z"
              />
            </svg>
            ${response.sentiment_votes_up_percentage}%
          </span>

          <span class="coin__bottom__infos-votes-disagree">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M7.498 15.25H4.372c-1.026 0-1.945-.694-2.054-1.715a12.137 12.137 0 0 1-.068-1.285c0-2.848.992-5.464 2.649-7.521C5.287 4.247 5.886 4 6.504 4h4.016a4.5 4.5 0 0 1 1.423.23l3.114 1.04a4.5 4.5 0 0 0 1.423.23h1.294M7.498 15.25c.618 0 .991.724.725 1.282A7.471 7.471 0 0 0 7.5 19.75 2.25 2.25 0 0 0 9.75 22a.75.75 0 0 0 .75-.75v-.633c0-.573.11-1.14.322-1.672.304-.76.93-1.33 1.653-1.715a9.04 9.04 0 0 0 2.86-2.4c.498-.634 1.226-1.08 2.032-1.08h.384m-10.253 1.5H9.7m8.075-9.75c.01.05.027.1.05.148.593 1.2.925 2.55.925 3.977 0 1.487-.36 2.89-.999 4.125m.023-8.25c-.076-.365.183-.75.575-.75h.908c.889 0 1.713.518 1.972 1.368.339 1.11.521 2.287.521 3.507 0 1.553-.295 3.036-.831 4.398-.306.774-1.086 1.227-1.918 1.227h-1.053c-.472 0-.745-.556-.5-.96a8.95 8.95 0 0 0 .303-.54"
              />
            </svg>
            ${response.sentiment_votes_down_percentage}%
          </span>
        </div>
      </div>

      <div class="coin__bottom__description">
        <span class="coin__bottom__description-title">
          About <span class="coin__bottom__description-title-word">${
            response.name
          }</span> 
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            >
            <path
              d="M512 80c0 18-14.3 34.6-38.4 48c-29.1 16.1-72.5 27.5-122.3 30.9c-3.7-1.8-7.4-3.5-11.3-5C300.6 137.4 248.2 128 192 128c-8.3 0-16.4 .2-24.5 .6l-1.1-.6C142.3 114.6 128 98 128 80c0-44.2 86-80 192-80S512 35.8 512 80zM160.7 161.1c10.2-.7 20.7-1.1 31.3-1.1c62.2 0 117.4 12.3 152.5 31.4C369.3 204.9 384 221.7 384 240c0 4-.7 7.9-2.1 11.7c-4.6 13.2-17 25.3-35 35.5c0 0 0 0 0 0c-.1 .1-.3 .1-.4 .2l0 0 0 0c-.3 .2-.6 .3-.9 .5c-35 19.4-90.8 32-153.6 32c-59.6 0-112.9-11.3-148.2-29.1c-1.9-.9-3.7-1.9-5.5-2.9C14.3 274.6 0 258 0 240c0-34.8 53.4-64.5 128-75.4c10.5-1.5 21.4-2.7 32.7-3.5zM416 240c0-21.9-10.6-39.9-24.1-53.4c28.3-4.4 54.2-11.4 76.2-20.5c16.3-6.8 31.5-15.2 43.9-25.5V176c0 19.3-16.5 37.1-43.8 50.9c-14.6 7.4-32.4 13.7-52.4 18.5c.1-1.8 .2-3.5 .2-5.3zm-32 96c0 18-14.3 34.6-38.4 48c-1.8 1-3.6 1.9-5.5 2.9C304.9 404.7 251.6 416 192 416c-62.8 0-118.6-12.6-153.6-32C14.3 370.6 0 354 0 336V300.6c12.5 10.3 27.6 18.7 43.9 25.5C83.4 342.6 135.8 352 192 352s108.6-9.4 148.1-25.9c7.8-3.2 15.3-6.9 22.4-10.9c6.1-3.4 11.8-7.2 17.2-11.2c1.5-1.1 2.9-2.3 4.3-3.4V304v5.7V336zm32 0V304 278.1c19-4.2 36.5-9.5 52.1-16c16.3-6.8 31.5-15.2 43.9-25.5V272c0 10.5-5 21-14.9 30.9c-16.3 16.3-45 29.7-81.3 38.4c.1-1.7 .2-3.5 .2-5.3zM192 448c56.2 0 108.6-9.4 148.1-25.9c16.3-6.8 31.5-15.2 43.9-25.5V432c0 44.2-86 80-192 80S0 476.2 0 432V396.6c12.5 10.3 27.6 18.7 43.9 25.5C83.4 438.6 135.8 448 192 448z"
            />
          </svg>
        </span>
        <p class="coin__bottom__description-text">
        ${response.description.en ?response.description.en :'There Is No Description'}
        </p>
      </div>
    </div>
      
      `
      );
    });
}

// ! ///////////
let coinTopLeft = document.querySelector(".coin__top-left");
function getCoinTopInfo() {
  const options = {
    method: "GET",
    headers: { "x-cg-demo-api-key": "CG-3bjv7fwArQ5Tw29Kii5swyL1" },
  };

  fetch(
    `https://api.coingecko.com/api/v3/coins/${coinId}?localization=false&tickers=false&community_data=false&developer_data=false&sparkline=false`,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);

      coinTopLeft.insertAdjacentHTML(
        "afterbegin",
        `
      <div class="coin__top__left-info">
      <img
        src="${response.image.large}"
        alt="imgae"
        class="coin__top__left-info-image"
      />
      <div class="coin__top__left-info-texts">
        <span class="coin__top__left-info-texts-name">${response.name}</span>
        <span class="coin__top__left-info-texts-abbreviation"
          >${response.symbol}</span
        >
        <span class="coin__top__left-info-price">
        <span class="coin__top__left-info-price-word">$</span>
        ${response.market_data.current_price.usd}
        </span>
      </div>
    </div>
      `
      );
    });
}

// ! ///////////
window.addEventListener("load", getChartinfo);
window.addEventListener("load", getCoinMainInfo);
window.addEventListener("load", getCoinTopInfo);
