var xValues = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var yValues = [ 5, 1, 9, 2, 3, 7, 8, 4, 0, 6];
// var barColors = ["red", "green", "blue", "orange", "brown", "teal", 'magenta', "maroon", "yellow", "black"];

var bubbleSortChart = new Chart("bubbleSortChart", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [{
      // backgroundColor: barColors,
      backgroundColor: "lightBlue",
      data: yValues
    }]
  },
  options: {
    legend: {display: false},
    title: {
      display: true,
      text: "Bubble Sort" //Graph Title
    },
    scales: {
      xAxes: [{
        ticks: {
          display: false //hide x-axis labels
        }
      }]
    }
  }
});

function bubbleSort(){
  yValuesNew = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  bubbleSortChart.data.datasets[0].data = yValuesNew;
  bubbleSortChart.update();
}