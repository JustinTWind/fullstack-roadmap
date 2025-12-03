/*

  64. Concatenate Strings with Matching Length

    Write a JavaScript program to concatenate two strings and return the result.
    If the length of the strings does not match,
    then remove the characters from the longer string.  

*/

function concatMatchingLength(givenString1, givenString2) {
  const firstLength = givenString1.length;
  const secondLength = givenString2.length;
  const maxCharacters = Math.min(firstLength, secondLength);
  return (
    givenString1.slice(-maxCharacters) + givenString2.slice(-maxCharacters)
  );
}

console.log(concatMatchingLength("Python", "JS"));
