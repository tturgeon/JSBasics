// Write a JavaScript function removeDuplicates that removes duplicate values fom an array.

function removeDuplicates(arr, number){
  for (var i = 0; i < arr.length; i++){
    for (var j = i+1; j<arr.length; j++){
      if (arr[i]===arr[j]){
        arr.splice(j,1);
      }
    }
  }
  return arr;
}

// DO NOT DELETE
module.exports = removeDuplicates;
