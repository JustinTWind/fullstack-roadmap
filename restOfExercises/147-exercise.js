/*

  147. Sum of Digits in String
  
    Write a JavaScript program to compute the sum of all the digits that occur in a given string.  

*/

function sumOfDigits(givenSting) {
  const digitsArray = givenSting.replace(/[^0-9]/g, "");
  let sumOfDigits = 0;
  const digitsArrayLength = digitsArray.length;

  for (let index = 0; index < digitsArrayLength; index++) {
    sumOfDigits += Number(digitsArray[index]);
  }

  return sumOfDigits;
}

console.log(sumOfDigits("abcd12efg9"));
console.log(sumOfDigits("w3resource"));
