/*

  150. Swap Adjacent Pairs in Even-Length Integer

    Write a JavaScript program to swap pairs of adjacent digits of a given integer of even length.  

*/

function swapAdjacentPairs(givenArray) {
  if (givenArray.length % 2 !== 0) return "The Array must have an even length";

  for (let index = 0; index < givenArray.length; index += 2) {
    [givenArray[index], givenArray[index + 1]] = [
      givenArray[index + 1],
      givenArray[index],
    ];
  }

  return givenArray;
}

console.log(swapAdjacentPairs([1, 2, 3, 4]));
console.log(swapAdjacentPairs([1, 2, 3, 4, 5]));
console.log(swapAdjacentPairs([1, 2, 3, 4, 5, 6]));
