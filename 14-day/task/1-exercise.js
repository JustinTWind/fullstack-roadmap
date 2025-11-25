/**
 * Write a JavaScript program to compute the sum of the two given integers.
 * If the two values are the same, then return triple their sum.
*/

function sumOfGivenIntegers(userNumberOne, userNumberTwo) {
  return typeof userNumberOne !== 'number' || typeof userNumberTwo !== 'number'
    ? "The parameters are invalid"
    : userNumberOne === userNumberTwo
      ? (userNumberOne + userNumberTwo) * 3
      : userNumberOne + userNumberTwo;
};

console.log(sumOfGivenIntegers(10, 10));
console.log(sumOfGivenIntegers(10,2));
console.log(sumOfGivenIntegers(14,1));
console.log(sumOfGivenIntegers(undefined,2));
console.log(sumOfGivenIntegers(null,4));
console.log(sumOfGivenIntegers(2.5,5));
console.log(sumOfGivenIntegers("asds",5));
console.log(sumOfGivenIntegers("2.5",6));
