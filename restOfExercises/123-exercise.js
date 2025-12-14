/*

  123. Check if Array is Permutation of Numbers 1 to n

    Write a JavaScript program to find out if the members of a given array of integers
    are a permutation of numbers from 1 to a given integer. 


*/

function checkPermutation(givenArray, givenNumber) {
  for (let index = 1; index <= givenNumber; index++) {
    if (!givenArray.includes(index)) {
      return false;
    }
  }
  return true;
}

console.log(checkPermutation([1, 2, 3, 4, 5], 5));
console.log(checkPermutation([1, 2, 3, 4, 5], 6));
console.log(checkPermutation([1, 3, 4, 5], 3));
console.log(checkPermutation([5, 3, 4, 1, 2], 5));
