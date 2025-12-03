/*

  72. Check if First and Last Elements Are Same

    Write a JavaScript program to check whether the first and last elements
    are the same in a given array of integers of length 3.  

*/

function boundariesAreEqual(givenArray) {
  return givenArray[0] === givenArray.at(-1);
}

console.log(boundariesAreEqual([10, 20, 30]));
console.log(boundariesAreEqual([10, 20, 30, 10]));
console.log(boundariesAreEqual([20, 20, 20]));
console.log(boundariesAreEqual([1, 20, 1]));
