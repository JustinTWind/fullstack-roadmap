/*

  30. Remove 'Script' from String at 5th Position

    Write a JavaScript program to check whether a string "Script"
    appears at the 5th (index 4) position in a given string. If "Script" appears in the string,
    return the string without "Script" otherwise return the original one.  

*/

function removeScriptFromIndex4(givenString) {
  if (givenString.trim().substring(4, 10).toLowerCase() === "script") {
    return givenString.toLowerCase().split("script").join("")
  } return givenString
}

console.log(removeScriptFromIndex4("javascript"));
console.log(removeScriptFromIndex4("Holascript"));
console.log(removeScriptFromIndex4("Hola Mundo"));


