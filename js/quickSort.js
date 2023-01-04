quickNum = 50; //number of elements

var qxValues = [];
for (var i=1; i<=quickNum; i++){
  qxValues.push(i);
}

var qyValues = Array.from({length: quickNum}, () => Math.floor(Math.random() * quickNum));

// var barColors = ["red", "green", "blue", "orange", "brown", "teal", 'magenta', "maroon", "yellow", "black"];

var quickSortChart = new Chart("quickSortChart", {
  type: "bar",
  data: {
    labels: qxValues,
    datasets: [{
      // backgroundColor: barColors,
      backgroundColor: "lightBlue",
      data: qyValues
    }]
  },
  options: {
    legend: {display: false},
    title: {
      display: true,
      text: "Quick Sort" //Graph Title
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

// Javascript implementation of QuickSort by Saurabh Jaiswal
// Frameselect implementaiton for Chart Update by David O'Mullan
   
// A utility function to swap two elements
function swap(qArr, i, j) {
    let temp = qArr[i];
    qArr[i] = qArr[j];
    qArr[j] = temp;
}
  
/* This function takes last element as pivot, places
   the pivot element at its correct position in sorted
   array, and places all smaller (smaller than pivot)
   to left of pivot and all greater elements to right
   of pivot */
function partition(qArr, low, high) {
  
    // pivot
    let pivot = qArr[high];
  
    // Index of smaller element and
    // indicates the right position
    // of pivot found so far
    let i = (low - 1);
  
    for (let j = low; j <= high - 1; j++) {
  
        // If current element is smaller 
        // than the pivot
        if (qArr[j] < pivot) {
  
            // Increment index of 
            // smaller element
            i++;
            swap(qArr, i, j);
        }
    }
    swap(qArr, i + 1, high);
    return (i + 1);
}
  
/* The main function that implements QuickSort
          qArr[] --> Array to be sorted,
          low --> Starting index,
          high --> Ending index
 */
function quickSort(qArr, low, high) {
    if (low < high) {
  
        // pi is partitioning index, qArr[p]
        // is now at right place 
        let pi = partition(qArr, low, high);

        quickSortChart.data.datasets[0].data = qArr;
        // console.log('New array: ', qArr);
        quickSortChart.update();
  
        // Separately sort elements before
        // partition and after partition
        setTimeout(() => {
          requestAnimationFrame(() => {
            quickSort(qArr, low, pi - 1);
          });
        }, 500);      
        setTimeout(() => {
          requestAnimationFrame(() =>{
            quickSort(qArr, pi + 1, high);
          });
        }, 500);
        
    }
}

function quickReset(quickNum){
  qyValues = Array.from({length: quickNum}, () => Math.floor(Math.random() * quickNum));
  quickSortChart.data.datasets[0].data = qyValues;
  quickSortChart.update();
}