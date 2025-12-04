/*

  95. Replace Numbers with Specified Value in Array

  Write a JavaScript program to replace all numbers with a specified number in an array of integers. 

*/

function replaceArrayValue(givenArray, oldValue, newValue) {
  const regex = new RegExp(`\s?${oldValue}\s?`, "g");
  console.log(regex);
  return givenArray.join(" ").replace(regex, newValue);
}

console.log(replaceArrayValue([1, 2, 3, 2, 2, 8, 1, 12], 2, 5));


function replaceWithMap(givenArray, oldValue, newValue) {
  return givenArray.map((value) => {
    if (value === oldValue) return newValue;
    return value;
  });
}

console.log(replaceWithMap([1, 2, 3, 2, 2, 8, 1, 12], 2, 5));
