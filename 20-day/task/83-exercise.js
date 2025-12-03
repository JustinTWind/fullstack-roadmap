/*

  83. Find Longest String in Array

    Write a JavaScript program to find the longest string from a given array of strings.  

*/

function findLongestString(givenArray) {
  let longestArrayIndex = 0;
  givenArray.forEach((element, index) => {
    if (element.length > givenArray[longestArrayIndex].length) {
      longestArrayIndex = index;
    }
  });
  return givenArray[longestArrayIndex]
}

console.log(findLongestString(["a", "aa", "aaa", "aaaaa", "aaaa"]));
console.log(findLongestString(["a", "aa", "aaa", "aaaaa", "aaaa", "xxxxxx"]));
console.log(findLongestString(["a", "aa", "aaa", "aaaaa", "aaaa", "123456", "1234567"]));
console.log(findLongestString(["a", "aa", "aaa", "aaaaa", "aaaa", "123456", "1234567", "12345678"]));

