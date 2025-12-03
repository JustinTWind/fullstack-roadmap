/*

  76. Create Array with First/Last Elements from Array
  
    Write a JavaScript program to create an array by taking the first and last elements
    from a given array of integers. The length must be larger than or equal to 1.  

*/

function ArrayWithEdgeElements(givenArray) {
  return [givenArray[0], givenArray.at(-1)];
}

console.log(ArrayWithEdgeElements([20, 10, 30]));
console.log(ArrayWithEdgeElements([5, 2, 7, 8]));
console.log(ArrayWithEdgeElements([17, 12, 34, 78]));
