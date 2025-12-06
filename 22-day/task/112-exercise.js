/*

  112. Count Trailing Zeros in Factorial

    Write a JavaScript program to find the number of trailing zeros
    in the decimal representation of the factorial of a given number. 

*/

function trailingZeros(givenNumber) {
  let factorial = 1;

  for (let index = 1; index <= givenNumber; index++) {
    factorial *= index;
  }

  const factorialString = factorial.toString();
  let positionCounter = -1;
  let numberOfZeros = 0;

  while (factorialString.at(positionCounter) === "0") {
    numberOfZeros++;
    positionCounter--;
  }

  return numberOfZeros;
}

console.log(trailingZeros(8));
console.log(trailingZeros(9));
console.log(trailingZeros(10));
console.log(trailingZeros(11));
