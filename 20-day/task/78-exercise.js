/*

  78. Check if Array Does Not Contain 1 or 3

    Write a JavaScript program to test whether an array of integers of length 2 does not contain 1 or 3.  

*/

function checkNotNumbers(givenArray) {
  return !(givenArray.includes(1) || givenArray.includes(3));
}
console.log(checkNotNumbers([1, 5]));
console.log(checkNotNumbers([0, 5]));
console.log(checkNotNumbers([2, 3]));
