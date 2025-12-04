/*

  93. Find Max Difference Among All Pairs in Array

    Write a JavaScript program to find the maximum difference among all possible pairs of a given array of integers. 

*/

function maxDifferenceAnyPair(givenArray) {
  let maxDifference = 0;

  for (let index = 0; index < givenArray.length; index++) {
    for (let innerIndex = index + 1; innerIndex < givenArray.length; innerIndex++) {
      const ActualDifference = Math.abs(givenArray[index] - givenArray[innerIndex]);
      maxDifference = Math.max(maxDifference, ActualDifference);
    }
  }

  return maxDifference;
}

console.log(maxDifferenceAnyPair([13, 2, 3, 8, 9]));
console.log(maxDifferenceAnyPair([1, 2, 3, 18, 9]));
console.log(maxDifferenceAnyPair([13, 2, 3, 8, 9]));
