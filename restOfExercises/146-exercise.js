/*

  146. Sum of Cubes from 1 to n

    Write a JavaScript program to compute the sum of cubes of all integers from 1 to a given integer.  

*/

function sumOfCubes(givenNumber) {
  let totalSum = 0;

  for (let index = 1; index <= givenNumber; index++) {
    totalSum += index ** 3
  }

  return totalSum
}

console.log(sumOfCubes(3))
console.log(sumOfCubes(4))
