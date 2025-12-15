/*

  145. Max n for 1+2+...+n = Value

    Write a JavaScript program to find the maximum integer n such that 1 + 2 + ... + n <= a given integer.  

*/

function maximumSecuence(givenNumber) {
  let secuenceSum = 1;
  let counter = 0;
  while (secuenceSum < givenNumber) {
    secuenceSum += ++counter;
  }
  return counter;
}

console.log(maximumSecuence(11));
console.log(maximumSecuence(15));
console.log(maximumSecuence(17));
