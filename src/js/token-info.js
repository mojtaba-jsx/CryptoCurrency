const ctx = document.getElementById("myChart");

new Chart(ctx, {
  type: "line",
    data: {
        labels: ['7:00', '8:00', '9:00', '10:00', '11:00', '12:00'],

        datasets: [
        {
            label: 'BitCooin',
            data: [100_000, 80_000, 70_00, 60_000, 50_000, 30_000,20_000,10_000,5_000],
            backgroundColor: 'rgba(255, 217, 0, 0.496)',
            borderColor: 'black',
            borderWidth: 2,
            yAxisID: 'saleY',
            fill: true
        },
        ]
    },
  fill:true,

  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    // responsive: true
  },
});
