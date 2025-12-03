/*

  65. Check if String Ends with 'Script'

    Write a JavaScript program to test whether a string ends with "Script".
    The string length must be greater than or equal to 6.  

*/

function checkIfScript(givenString) {
  if (givenString.length < 6)
    return "The String must have at least 6 characters";
  return givenString.trim().toLowerCase().endsWith("script");
}

console.log(checkIfScript("Javascript"));
console.log(checkIfScript("Java script"));
console.log(checkIfScript("Java scripts"));
