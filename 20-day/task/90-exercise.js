/*

  90. Find kth Greatest Element in Array

    Write a JavaScript program to find the kth greatest element in a given array of integers.  

*/

function findKGreatestElement(givenArray, PositionK) {
  return givenArray.toSorted().at(-PositionK);
}

console.log(findKGreatestElement([1, 2, 6, 4, 5], 3));
console.log(findKGreatestElement([-10, -25, -47, -36, 0], 1));
