// Create a function called addFront that takes in an array and a number and
// positions the number at the front of the array. Return the new array.

function addFront(arr, num){
  arr.unshift(num);
  return arr;
}

// DO NOT DELETE
module.exports = addFront;
