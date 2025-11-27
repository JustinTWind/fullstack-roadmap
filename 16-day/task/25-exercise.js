/*

  25. Check if Number is Multiple of 3 or 7

    Write a JavaScript program to check whether a given positive number is a multiple of 3 or 7.  

*/

function isMultipleOfThreeOrSeven(userNumber) {
  return userNumber % 3 === 0 || userNumber % 7 === 0;
}

console.log(isMultipleOfThreeOrSeven(12));
console.log(isMultipleOfThreeOrSeven(21));
