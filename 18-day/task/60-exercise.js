/*

  60. Remove First and Last Characters in String

    Write a JavaScript program to create a new string
    without the first and last characters of a given string.  

*/

function removeBorderCharacters(givenString) {
  return givenString.trim().slice(1,-1)
}


console.log(removeBorderCharacters("Hola Mundo"));
console.log(removeBorderCharacters("JavaScript"));
