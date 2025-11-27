/*

  23. Swap First and Last Characters in String

    Write a JavaScript program to create a new string from a given string by changing the position of the first and last characters.
    The string length must be broader than 1.  

*/

function swapFirstAndLastChars(userString) {
  if (userString.length <= 1) return "The String must have at least one letter";
  const firstChar = userString[0];
  const lastChar = userString[userString.length - 1];
  const middleOfString = userString.slice(1, -1);
  return lastChar + middleOfString + firstChar;
}

console.log(swapFirstAndLastChars("H"));

console.log(swapFirstAndLastChars("Hello World"));

console.log(swapFirstAndLastChars("PM"));
