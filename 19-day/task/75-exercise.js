/*

  75. Create Array with Middle Elements from Two Arrays
  
    Write a JavaScript program to create an array taking
    the middle elements of the two arrays of integer and each length 3.   

*/

function middleOfArrays(givenArray1, givenArray2) {
  return [givenArray1[1], givenArray2[1]]
}

console.log(middleOfArrays([1,2,3],[1,5,6]))
console.log(middleOfArrays([3,2,3],[2,8,6]))
console.log(middleOfArrays([4,2,7],[2,4,5]))