/*

  136. Replace First Digit in String with $

    Write a JavaScript program to replace the first digit in a string 
    (should have at least one digit) with the $ character. 
    
*/

function replaceFirstDigit(givenString) {
  return givenString.replace(/\d/, "$");
}

console.log(replaceFirstDigit("abc1dabc"));
console.log(replaceFirstDigit("p3ython"));
console.log(replaceFirstDigit("Hello wor1d"));
