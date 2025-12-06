/*

  109. Sort All Primes Between 1 and n

    Write a JavaScript program to sort an array of all prime numbers between 1 and a given integer. 
    
*/

function sortPrimes(givenNumber) {
  const primeNumbers = []
  for (let index = 2; index <= givenNumber; index++) {
    if (wilsonTheoreme(index)) {
      primeNumbers.push(index)
    }
  }
  return primeNumbers
}

function wilsonTheoreme(givenNumber) {
  let factorial = 1
  for (let index = givenNumber - 1; index >= 1; index--) {
    factorial *= index
  }
  return ((factorial + 1) % givenNumber === 0)
}


console.log(sortPrimes(19))
console.log(sortPrimes(100))