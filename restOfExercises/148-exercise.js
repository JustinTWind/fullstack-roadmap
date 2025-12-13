/*

  148. Swap Halves of Even-Length Array

    Write a JavaScript program to swap two halves of a given array of integers of even length.  

*/

function swapHalves(givenArray) {
  const arrayLength = givenArray.length;

  if (arrayLength % 2 !== 0) return "The Array must have an even length";

  return [
    ...givenArray.slice(arrayLength / 2),
    ...givenArray.slice(0, arrayLength / 2),
  ];
}

console.log(swapHalves([1, 2, 3, 4, 5, 6]));
console.log(swapHalves([1, 2, 3, 4, 5, 6, 7]));
console.log(swapHalves([1, 2, 3, 4, 5, 6, 7, 8]));
