// Write a JavaScript function that accepts two arguments,
// a string and a letter and the function will count the number
// of occurrences of the specified letter within the string.

function countString(string, letter){
  string=string.toLowerCase();
  letter=letter.toLowerCase();
  var count=0;
for (var i = 0; i< string.length; i++){
  if(string[i] == letter){
    count++;
  }
}
return count;
}

// DO NOT DELETE
module.exports = countString;
