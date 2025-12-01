/*

  48. Reverse a Given String

    Write a JavaScript program to reverse a given string.  

*/

function reversedString(givenString) {
  return givenString.split("").reverse().join("")
}

console.log(reversedString("Hola Mundo"))