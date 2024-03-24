// window.addEventListener("load", getCoinInfo);

// let coinWrapper = document.querySelector(".coin__wrapper");
// function getCoinInfo() {
//   const options = {
//     method: "GET",
//     headers: { "x-cg-demo-api-key": "CG-3bjv7fwArQ5Tw29Kii5swyL1" },
//   };
//   fetch("https://api.coingecko.com/api/v3/coins/bitcoin?localization=true&tickers=false&market_data=true&community_data=true&developer_data=false&sparkline=true", options)
// }





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

    //   console.log(firstIndexes);
    //   console.log(secondIndexes);

      const ctx = document.getElementById("myChart");
      new Chart(ctx, {
        type: "line",
        data: {
          labels: firstIndexes,
          datasets: [
            {
              label: coinId.toUpperCase(),
              data: secondIndexes,
              borderWidth: 1,
              fill: true,
              borderColor: "black",
              backgroundColor: "#fff4558a",
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
              circular: true,
              ticks: {
                color: '#7781ff', 
              }
            },
          },
        },
      });
    });
};

getChartinfo();
