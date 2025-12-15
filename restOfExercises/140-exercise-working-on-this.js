/*

  140. Check if All Digits in Number Are Same
  
    Write a JavaScript program to check whether all the digits in a given number are the same or not.  

*/

function checkAllDigitsEqual(givenNumber) {
  return givenNumber
    .toString()
    .split("")
    .every((element) => element === Math.round(givenNumber % 10));
}

console.log(checkAllDigitsEqual(11111));
console.log(checkAllDigitsEqual(11111));
