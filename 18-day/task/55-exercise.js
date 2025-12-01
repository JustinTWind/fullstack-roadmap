/*

  55. Check Equal Number of 'p's and 't's

    Write a JavaScript program to check whether a given string contains an equal number of p's and t's.  

*/

function checkEqualCharacters(givenString) {
  return givenString.match(/p/gi).length === givenString.match(/t/gi).length;
}

console.log(checkEqualCharacters("paatpss"));
console.log(checkEqualCharacters("pptt"));
console.log(checkEqualCharacters("ppttt"));
console.log(checkEqualCharacters("pppttt"));
