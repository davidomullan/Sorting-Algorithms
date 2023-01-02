var xValues = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var yValues = [ 5, 1, 9, 8, 2, 3, 7, 4, 0, 6];
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

function bubbleSort(arr, n){

  //base case
  if (n==1)
    return;

  var count = 0;

  for(var i = 0; i<n-1; i++){
    if(arr[i] > arr[i+1]){
      var temp = arr[i];
      arr[i] = arr[i+1];
      arr[i+1] = temp;
      count++;
    }
  }

  if(count == 0){
    return;
  }

  bubbleSortChart.data.datasets[0].data = arr;
  // console.log('New array: ', arr);
  bubbleSortChart.update();

  setTimeout(() => {
    requestAnimationFrame(() => {
      bubbleSort(arr, n-1);
    });
  }, 800);

}


/* For loop will not sync with frames to update chart...

function bubbleSort(arr){
  for(var i = 0; i < arr.length; i++){
    for(var j = 0; j < (arr.length-i-1); j++){
      if(arr[j] > arr[j+1]){
        var temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
      }

      bubbleSortChart.data.datasets[0].data = arr;
      console.log('New array: ', arr);
      bubbleSortChart.update();
    }
  }
}
*/