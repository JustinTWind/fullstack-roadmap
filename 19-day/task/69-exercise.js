/*

  69. Sum of 3 Elements in Array (Length 3)

    Write a JavaScript program to compute the sum of three elements of a given array of integers of length 3.   

*/

function sumOfArray(givenArray) {
  return givenArray.reduce((sum, element) => sum + element);
}

console.log(sumOfArray([10,32,20]))
console.log(sumOfArray([5, 7, 9]));
console.log(sumOfArray([0, 8, -11]));