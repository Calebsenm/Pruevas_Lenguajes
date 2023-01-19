
// Optimized implementation of bubble sort Algorithm
 
function bubbleSort(arr){
   
  var i, j;
  var len = arr.length;
   
  var isSwapped = false;
   
  for(i =0; i < len; i++){
     
    isSwapped = false;
     
    for(j = 0; j < len; j++){
        if(arr[j] > arr[j + 1]){
          var temp = arr[j]
          arr[j] = arr[j+1];
          arr[j+1] = temp;
          isSwapped = true;
        }
    }
     
    // IF no two elements were swapped by inner loop, then break 
    if(!isSwapped){
      break;
    }
  }
   
  // Print the array
  println(arr)
}

//print Algorithm 

function println(arr){
    for(var i = 0; i < arr.length; i++){
        console.log(arr[i]);
    }
}
 
var arr = [243, 45, 23, 356, 3, 5346, 35, 5];
 
println(arr)
console.log()
// calling the bubbleSort Function
bubbleSort(arr)

