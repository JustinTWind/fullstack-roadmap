/**
 * Write a JavaScript program to remove a character at the specified
 * position in a given string and return the modified string.
*/

function deleteStringInCertainPosition(userString, userPosition) {
  if (typeof userString !== "string") return "Non an available string";
  if (typeof userPosition !== "number") return "Non an available position";
  return userString.slice(0, userPosition) + userString.slice(userPosition+1, userString.length-1)
}

console.log(deleteStringInCertainPosition("Hola Mundo", 0));
