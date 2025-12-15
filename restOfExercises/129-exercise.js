/*

  129. Find Smallest Prime > Value

    Write a JavaScript program to find the smallest prime number strictly greater than a given number. 

*/

function smallestPrime(givenNumber) {
  do {
    givenNumber++;
  } while (checkPrime(givenNumber) !== true);
  return givenNumber;
}

function checkPrime(givenNumber) {
  const numbersToCheck = Math.floor(Math.sqrt(givenNumber));
  for (let index = 2; index <= numbersToCheck; index++) {
    if (givenNumber % index === 0) {
      return false;
    }
  }
  return true;
}

console.log(smallestPrime(3));
console.log(smallestPrime(17));
console.log(smallestPrime(100));
console.log(smallestPrime(400));
console.log(smallestPrime(45));
console.log(smallestPrime(48));
console.log(smallestPrime(62));
