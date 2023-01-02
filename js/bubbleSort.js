ne = 50; //number of elements

var xValues = [];
for (var i=1; i<=ne; i++){
  xValues.push(i);
}

var yValues = Array.from({length: ne}, () => Math.floor(Math.random() * ne));

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
  }, 500);

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