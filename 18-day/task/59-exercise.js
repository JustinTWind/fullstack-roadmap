/*

  59. Extract First Half of Even-Length String

    Write a JavaScript program to extract the first half of a even string.  

*/

function halfOfEvenString(givenString) {
  if (givenString.trim().length % 2 !== 0) return "The string it's not even";
  return givenString.trim().slice(0, givenString.length / 2);
}

console.log(halfOfEvenString("javascript"));
console.log(halfOfEvenString("HolaMundo"));
console.log(halfOfEvenString("Hola Mundo"));
