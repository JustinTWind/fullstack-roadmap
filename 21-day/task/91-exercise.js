/*

  91. Find Max Sum of digits Consecutive Numbers in Array
  
    Write a JavaScript program to find the maximum possible
    sum of some of its digits consecutive numbers (numbers that follow each other in order) 
    in a given array of positive integers. 

*/

function maxSumSlidingWindow(givenArray, digits) {
  let windowSum = 0;

  for (let i = 0; i < digits; i++) {
    windowSum += givenArray[i];
  }

  let maxSum = windowSum;

  for (let i = digits; i < givenArray.length; i++) {
    windowSum = windowSum - givenArray[i - digits] + givenArray[i];
    maxSum = Math.max(maxSum, windowSum);
  }

  return maxSum;
}

console.log(maxSumSlidingWindow([1, 2, 3, 4], 2));
console.log(maxSumSlidingWindow([2, 3, 5, 1, 6], 3));
console.log(maxSumSlidingWindow([9, 3, 5, 1, 7], 2));
console.log(maxSumSlidingWindow([1, 15, 1, 2, 6, 12, 5, 7], 4));
