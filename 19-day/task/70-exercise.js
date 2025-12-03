/*

  70. Rotate Elements Left in Array (Length 3)

    Write a JavaScript program to rotate the elements left in a given array of integers of length 3.  

*/

function rotateElementsLeft(givenArray) {
  return [givenArray[1], givenArray[2], givenArray[0]]
}

console.log(rotateElementsLeft([3, 4, 5]));
console.log(rotateElementsLeft([0, -1, 2]));
console.log(rotateElementsLeft([, 6, 5]));