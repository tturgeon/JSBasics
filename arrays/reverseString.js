// Write a JavaScript function reverseString to reverse a given string.

function reverseString(string){
  string = string.split("");
  string = string.reverse();
  string = string.join("");
  return string;
}

// DO NOT DELETE
module.exports = reverseString;
