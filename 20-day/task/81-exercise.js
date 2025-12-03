/*

  81. Add Two Digits in a Two-Digit Number

    Write a JavaScript program to add two digits to a given positive integer of length two.

*/

function sumOfDigits(givenNumber) {
  return (givenNumber % 10) + Math.floor(givenNumber / 10);
}

console.log(sumOfDigits(25));
console.log(sumOfDigits(30));
console.log(sumOfDigits(52));
console.log(sumOfDigits(55));
