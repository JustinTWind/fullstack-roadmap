/*

  71. Check if 1 is First/Last Element in Array

    Write a JavaScript program to check whether 1 appears in the first or last position of a given array of integers.
    The array length must be larger than or equal to 1.   

*/

function hasOneAtBoundaries(givenArray) {
  if (givenArray.length < 1)
    return "The array length must be larger than or equal to 1";
  return givenArray[0] === 1 || givenArray.at(-1) === 1;
}

console.log(hasOneAtBoundaries([1, 3, 5]));
console.log(hasOneAtBoundaries([1, 3, 5, 1]));
console.log(hasOneAtBoundaries([2, 4, 6]));
console.log(hasOneAtBoundaries([2, 4, 1]));
