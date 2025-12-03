/*

  63. Extract Middle 3 Characters from Odd-Length String

    Write a JavaScript program to create a string using the middle three characters
    of a given string of odd length. The string length must be greater than or equal to three.  

*/

function extractMiddleCharacters(givenString) {
  const stringLength = givenString.length;
  if (stringLength < 3)
    return "The string it's too short, it must have at least 3 characters";
  if (stringLength % 2 === 0) return "The String has an even length";
  return stringLength === 3
    ? givenString
    : givenString.slice(
        Math.floor(stringLength / 2) - 1,
        Math.floor(stringLength / 2) + 2
      );
}

console.log(extractMiddleCharacters("abc"));
console.log(extractMiddleCharacters("abcdefg"));
console.log(extractMiddleCharacters("abcdefghijk"));
console.log(extractMiddleCharacters("abcde"));
console.log(extractMiddleCharacters("HTML5"));
console.log(extractMiddleCharacters("Python"));
console.log(extractMiddleCharacters("PHP"));
console.log(extractMiddleCharacters("Exercises"));
