/*

  125. Find Longest String in Array

  Write a JavaScript program to find the longest string in a given array. 

*/

function longestString(givenArray) {
  let biggestElement = [0];
  givenArray.forEach((element) => {
    if (element.length > biggestElement[0]) {
      biggestElement[0] = element.length;
      biggestElement[1] = element;
    }
  });

  return biggestElement[1];
}

console.log(longestString(["Hola", "Tin", "Tan", "Tonas"]));
console.log(longestString(["ab", "a", "abcd"]));
console.log(longestString(["ab", "ab", "ab"]));
