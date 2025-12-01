/*

  58. Four Copies of Last 3 Characters

    Write a JavaScript program to create an updated string of 4 copies
    of the last 3 characters of a given original string. The string length must be 3 and above.  

*/

function LastDigitsCopies(givenString) {
  if (givenString.length < 3)
    return "The string must have at least 3 characters";
  return givenString.trim().slice(-3).repeat(4);
}

console.log(LastDigitsCopies("hola Mundo"));
console.log(LastDigitsCopies("Python"));
