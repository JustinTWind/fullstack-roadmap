/*

  110. Count Evens Before First Occurrence of Number

    Write a JavaScript program to find the number of even values
    in sequence before the first occurrence of a given number. 

*/

function countEvens(givenArray, givenNumber) {
  return givenArray.filter((element) => {
    return element < givenNumber && element % 2 === 0;
  }).length;
}

console.log(countEvens([1, 2, 3, 4, 5, 6, 7, 8], 5));
console.log(countEvens([1, 3, 5, 6, 7, 8], 6));
