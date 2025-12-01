/*

  52. Sort Letters Alphabetically in String

    Write a JavaScript program to convert letters of a given string alphabetically.  

*/

function sortAlphabetically(givenString) {
  return givenString.split("").sort().join("");
}

console.log(sortAlphabetically("Python"));
console.log(sortAlphabetically("Hola"));
