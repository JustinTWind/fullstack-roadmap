/*

  39. Sum Two Integers and Return Based on Range

    Write a JavaScript program to compute the sum of the two given integers.
    If the sum is in the range 50..80 return 65 otherwise return 80.  

*/

function isSumInRange(givenNumber1, givenNumber2) {
  sum = givenNumber1 + givenNumber2
  return sum >= 50 && sum <= 80 ? 65 : 85
}

console.log(isSumInRange(30,20))
console.log(isSumInRange(90,80))
console.log(isSumInRange(50,1))