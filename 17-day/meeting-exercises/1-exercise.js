/*

  Write a JavaScript program to check two given non-negative integers
  if one (not both) is a multiple of 7 or 11.

*/

function checkMultiples(givenNumber1, givenNumber2) {
  if (
    typeof givenNumber1 !== "number" ||
    typeof givenNumber2 !== "number" ||
    isNaN(givenNumber1) ||
    isNaN(givenNumber2)
  )
    return "The arguments must be numbers";

  if (givenNumber1 === 0 || givenNumber2 === 0)
    return "The arguments must be different of 0";

  if (givenNumber1 < 0 || givenNumber2 < 0)
    return "The arguments must be positive numbers";

  return (
    givenNumber1 % 7 === 0 ||
    givenNumber1 % 11 === 0 ||
    givenNumber2 % 7 === 0 ||
    givenNumber2 % 11 === 0
  );
}

console.log(checkMultiples(7, 11));
console.log(checkMultiples(2, 11));
console.log(checkMultiples(7, 2));
console.log(checkMultiples(null, 1));
console.log(checkMultiples(1, undefined));
console.log(checkMultiples(NaN, 1));
console.log(checkMultiples(1, NaN));
