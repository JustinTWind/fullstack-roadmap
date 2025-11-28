/*

  36. Check if Last Digit of Three Integers is Same

    Write a JavaScript program that checks whether
    the last digit of three positive integers is the same.  

*/

let tin = "tan";

console.log(tin.at(-1));

function isLastDigitEqual(givenNumber1, givenNumber2, givenNumber3) {
  return (
    String(givenNumber1).at(-1) === String(givenNumber2).at(-1) &&
    String(givenNumber1).at(-1) === String(givenNumber3).at(-1)
  );
}

console.log(isLastDigitEqual(1213213, 1123123, 112313));

// Esta es la versión de la página, muy machetero transformarlo a Strings? que opinas.
function isLastDigitPage(x, y, z) {
  return x % 10 === y % 10 && y % 10 === z % 10 && x % 10 === z % 10;
}

console.log(isLastDigitPage(12321313213, 112321313231123, 112213213213313));
