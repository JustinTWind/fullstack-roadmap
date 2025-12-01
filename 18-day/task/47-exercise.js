/*

  47. Check if Integer is in Range 40?10,000

    Write a JavaScript program to check whether a given number exists in the range 40..10000.  
    For example 40 presents in 40 and 4000

*/

function checkNumberInRange(givenNumber) {
  return givenNumber >= 40 && givenNumber <= 10000
}

console.log(checkNumberInRange(40))
console.log(checkNumberInRange(41))
console.log(checkNumberInRange(10000))
console.log(checkNumberInRange(100))
console.log(checkNumberInRange(5000))