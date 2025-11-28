/*

  16. Sum Two Integers (Triple if Equal)

   Write a JavaScript program to compute the sum of the two given integers.
   If the two values are the same, then return triple their sum.  

*/

function sumOrTripleIfEqual(numberOne, numberTwo) {
  return numberOne === numberTwo
    ? (numberOne + numberTwo) * 3
    : numberOne + numberTwo;
}

console.log(sumOrTripleIfEqual(10, 10));
console.log(sumOrTripleIfEqual(10, 20));
console.log(sumOrTripleIfEqual(20, 20));

