/*

  53. Check 'a' and 'b' Separated by Exactly 3 Places

    Write a JavaScript program to check whether the characters a and b
    are separated by exactly 3 places anywhere (at least once) in a given string.  

*/

function checkSeparationBAndA(givenString) {
  return givenString.search(/a...b/i) !== -1;
}

console.log(checkSeparationBAndA("Hola Mundo"));
console.log(checkSeparationBAndA("Chainsbreak"));
console.log(checkSeparationBAndA("a   b"));
