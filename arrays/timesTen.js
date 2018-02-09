// Create a function called timesTen that takes in an array and multiplies
// each value by 10 and returns the new array.
// Hint: Use the map method

function timesTen(arr){
  for (var i = 0; i < arr.length; i++){
    arr[i] = arr[i]*10;
  }
  return arr;
}

// DO NOT DELETE
module.exports = timesTen;
