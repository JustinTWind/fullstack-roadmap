/*

  79. Check if Array Contains 30 and 40 Twice

    Write a JavaScript program to test whether a given array of integers contains 30 and 40 twice.
    The array length should be 0, 1, or 2.  

*/

function checkNumberTwice(givenArray) {
  if (givenArray.length < 0 || givenArray.length > 2)
    return "Invalind Array length";
  return givenArray[0] === givenArray[1];
}
console.log(checkNumberTwice([30, 30]));
console.log(checkNumberTwice([15, 30]));
