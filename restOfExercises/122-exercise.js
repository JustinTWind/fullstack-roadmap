/*

  122. Check if Array is Strictly Increasing/Decreasing
  
    Write a JavaScript program to check whether a given array of integers represents
    a strictly increasing or decreasing sequence. 

*/

function checkIncreasingArray(givenArray) {
  return givenArray.every((element, index) => {
    return (
      element < givenArray[index + 1] || givenArray[index + 1] === undefined
    );
  });
}

console.log(checkIncreasingArray([1, 2, 3]));
console.log(checkIncreasingArray([-3, -2, -1]));
console.log(checkIncreasingArray([1, 2, 2]));
console.log(checkIncreasingArray([3, 4, 5]));
console.log(checkIncreasingArray([2, 1]));
console.log(checkIncreasingArray([0, -1]));
console.log(checkIncreasingArray([0, 1]));
