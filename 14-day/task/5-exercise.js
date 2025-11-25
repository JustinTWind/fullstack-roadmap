/**
 * Write a JavaScript program to create a new string from a given string by changing the position of the first and last characters.
 * The string length must be broader than or equal to 1.
*/

function deleteStringInCertainPosition(userString) {
  if (typeof userString !== "string") return "Non an available string";
  if (userString.length < 1) return "The String must have at least one letter";
  const firstChar = userString[0];
  const lastChar = userString[userString.length - 1];
  const middle = userString.slice(1, -1);
  return lastChar + middle + firstChar; 
}

console.log(deleteStringInCertainPosition("Hola Mundo")) 

