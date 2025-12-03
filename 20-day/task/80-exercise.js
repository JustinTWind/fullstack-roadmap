/*

  80. Swap First and Last Elements in Array

    Write a JavaScript program to swap the first and last elements
    of a given array of integers. The array length should be at least 1.  
    
*/

function swapBoundaries(givenArray) {
  [givenArray[0], givenArray[givenArray.length - 1]] = [
    givenArray[givenArray.length - 1],
    givenArray[0],
  ];
  return givenArray;
}

console.log(swapBoundaries([5, 10]));
console.log(swapBoundaries([20, 30, 40]));
console.log(swapBoundaries([1, 2, 3, 4]));
console.log(swapBoundaries([0, 2, 1]));
console.log(swapBoundaries([3]));
