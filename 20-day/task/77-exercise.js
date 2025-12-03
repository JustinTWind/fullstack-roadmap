/*

  77. Check if Array Contains 1 or 3

    Write a JavaScript program to test whether an array of integers of length 2 contains 1 or 3.  
    
*/

function checkNumbers(givenArray) {
  return givenArray.includes(1) || givenArray.includes(3);
}
console.log(checkNumbers([1, 5]));
console.log(checkNumbers([0, 5]));
console.log(checkNumbers([2, 3]));
