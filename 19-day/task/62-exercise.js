/*

  62. Move Last 3 Characters to Start of String

    Write a JavaScript program to move the last three characters
    to the start of a given string. The string length must be greater than or equal to three.  

*/

function moveFrontCharacters(givenString) {
  const firstCharacters = givenString.trim().slice(0, 3);
  return givenString.trim().slice(3) + firstCharacters;
}

console.log(moveFrontCharacters("Python"));
