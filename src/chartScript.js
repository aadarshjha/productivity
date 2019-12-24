var Chart = require('chart.js');

let plotColors = [];

let lineColors = [];

var ctx = document.getElementById('myChart');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: [],
        datasets: [{
            label: '# of minutes',
            data: [],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1
        }]
    },
    options: {
        legend: {
          display: false
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

//for each data that is added by the end of a session.
function addData(sessionName, time){

  myChart.data.labels.push(sessionName);
  myChart.data.datasets.forEach((dataset) => {
       dataset.data.push(time);
   });
   myChart.update();
}
