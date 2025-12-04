/*

  100. Check if Arrays Share at Least One Common Element
  
    Write a JavaScript program to check if there is at least one element in two given sorted arrays of integers.  

*/

function checkCommonCharacter(givenArray1, givenArray2) {
  const regex = new RegExp(`[${givenArray2.join("")}]`);
  return givenArray1.join("").search(regex) !== -1;
}

console.log(checkCommonCharacter([1, 2, 3], [3, 4, 5]));
console.log(checkCommonCharacter([1, 2, 3], [7, 8, 9]));
console.log(checkCommonCharacter([1, 2, 3], [7, 8, 2]));
