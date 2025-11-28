/*

  37. Modify String Based on Length (First 3 Lowercase/Uppercase)

    Write a JavaScript program to produce a new string that has the
    first 3 characters in lower case from a given string. If the string
    length is less than 3 convert all the characters to upper case.  

*/

function adjustStringCaseByLength(givenString) {
  if (givenString.length < 3) return givenString.toUpperCase();
  const firstCharacters = givenString.trim().substring(0, 3).toLowerCase();
  const restOfString = givenString.trim().substring(3).toUpperCase();
  return firstCharacters + restOfString;
}

console.log(adjustStringCaseByLength("javascript"));
console.log(adjustStringCaseByLength("Py"));
console.log(adjustStringCaseByLength("JAVAScript"));
console.log(adjustStringCaseByLength("    pytHon"));
