/*

  92. Find Max Difference Between Adjacent Elements

    Write a JavaScript program to find the maximum difference between any two adjacent elements of a given array of integers.

*/

function maxdifferenceSlidingWindow(givenArray) {
  let maxDifference = 0;

  for (let i = 0; i < givenArray.length - 1; i += 2) {
    const windowDifference = Math.abs(givenArray[i] - givenArray[i + 1]);
    maxDifference = Math.max(windowDifference, maxDifference);
  }

  return maxDifference;
}

console.log(maxdifferenceSlidingWindow([1, 2, 3, 4]));
console.log(maxdifferenceSlidingWindow([1, 2, 3, 8, 9]));
console.log(maxdifferenceSlidingWindow([2, 3, 5, 1, 6]));
console.log(maxdifferenceSlidingWindow([9, 3, 5, 1, 7]));
console.log(maxdifferenceSlidingWindow([1, 15, 1, 2, 6, 12, 5, 7]));
console.log(maxdifferenceSlidingWindow([1, 2, 3, 18, 9]));
console.log(maxdifferenceSlidingWindow([13, 2, 3, 8, 9]));
