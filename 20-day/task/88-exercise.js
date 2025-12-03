/*

  88. Check Similarity of Two Integers with Divisor

    Write a JavaScript program that takes two integers and a divisor.
    If the given divisor divides both integers and does not divide either,
    two specified integers are similar.
    Check whether two integers are similar or not.  

*/

function checkIntegersSimilarity(givenNumber1, givenNumber2, divisor) {
  return givenNumber1 % divisor === 0 && givenNumber2 % divisor === 0;
}

console.log(checkIntegersSimilarity(10, 25, 5));
console.log(checkIntegersSimilarity(10, 20, 5));
console.log(checkIntegersSimilarity(10, 20, 4));
console.log(checkIntegersSimilarity(10, 20, 2));
console.log(checkIntegersSimilarity(30, 17, 2));