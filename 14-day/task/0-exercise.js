/**
 * Write a JavaScript program to get the difference between a given number and 13,
 * if the number is broader than 13 return double the absolute difference.
*/

// Si ve mucho ternario, es que los estaba probando 🙂

function numberDifferenceWith13(userNumber) {
  return userNumber == null || isNaN(userNumber)
    ? "Invalid number"
    : userNumber > 13
      ? Math.abs((userNumber - 13) * 2)
      : 13 - userNumber;
} ;

console.log(numberDifferenceWith13(10));
console.log(numberDifferenceWith13(14));
console.log(numberDifferenceWith13(undefined));
console.log(numberDifferenceWith13(null));
console.log(numberDifferenceWith13(2.5));
console.log(numberDifferenceWith13("asds"))
console.log(numberDifferenceWith13("2.5"));