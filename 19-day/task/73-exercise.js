/*

  73. Reverse Elements of Array (Length 3)

    Write a JavaScript program to reverse the elements of a given array of integers of length 3.  

*/

function reverseArray(givenArray) {
  return givenArray.reverse();
}

console.log(reverseArray([5, 4, 3]));
console.log(reverseArray([1, 0, -1]));
console.log(reverseArray([2, 3, 1]));

// Hecho más artesanal

function manualReverseArray(givenArray) {
  return givenArray.map((element, index) => {
    index++
    return givenArray.at(-index)
  })
}

console.log(manualReverseArray([5, 4, 3]));
console.log(manualReverseArray([1, 0, -1]));
console.log(manualReverseArray([2, 3, 1]));