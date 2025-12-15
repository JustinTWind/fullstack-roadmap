/*

  140. Check if All Digits in Number Are Same
  
    Write a JavaScript program to check whether all the digits in a given number are the same or not.  

*/

function checkAllDigitsEqual(givenNumber) {
  const numberArray = givenNumber.toString().split("");
  return numberArray.every((element) => element === numberArray[0]);
}

console.log(checkAllDigitsEqual(11111));
console.log(checkAllDigitsEqual(11112));
console.log(checkAllDigitsEqual(11211));
console.log(checkAllDigitsEqual(1234));
console.log(checkAllDigitsEqual(99999));
