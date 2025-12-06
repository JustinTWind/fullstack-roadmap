/*

  107. Count Divisible Sorted Pairs in Array

    Write a JavaScript program to find the number of sorted pairs formed by arrays of integers.
    This is such that one element in the pair is divisible by the other one. 
    
    For example - The output of [1, 3, 2] ->2 - (1,3), (1,2).
    The output of [2, 4, 6] -> 2 - (2,4), (2,6)
    The output of [2, 4, 16] -> 3 - (2,4), (2,16), (4,16)

*/

function sortPairs(givenArray) {
  const pairs = [];
  const arrayLenght = givenArray.length;

  for (let index = 0; index < arrayLenght; index++) {
    for (let innerIndex = index + 1; innerIndex <= arrayLenght; innerIndex++) {
      if (
        givenArray[index] % givenArray[innerIndex] === 0 ||
        givenArray[innerIndex] % givenArray[index] === 0
      ) {
        pairs.push([givenArray[index], givenArray[innerIndex]]);
      }
    }
  }
  return pairs.length;
}

console.log(sortPairs([1, 3, 2]));
console.log(sortPairs([2, 4, 6]));
console.log(sortPairs([2, 4, 16]));
