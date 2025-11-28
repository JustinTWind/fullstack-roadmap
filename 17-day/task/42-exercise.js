/*

  42. Check Numbers in Strict or Soft Increasing Mode

    Write a JavaScript program to check whether three given numbers are increasing in strict or in soft mode.  
    Note: Strict mode -> 10, 15, 31 : Soft mode -> 24, 22, 31 or 22, 22, 31

*/

function checkSoftOrStrictIncrease(givenNumber1, givenNumber2, givenNumber3) {
  if (givenNumber3 > givenNumber2 && givenNumber2 > givenNumber1)
    return "Strict Mode";

  if (givenNumber3 > givenNumber2) return "Soft Mode";
}

console.log(checkSoftOrStrictIncrease(1, 2, 3));
console.log(checkSoftOrStrictIncrease(10, 15, 31));
console.log(checkSoftOrStrictIncrease(22, 24, 31));
console.log(checkSoftOrStrictIncrease(2, 1, 3));
console.log(checkSoftOrStrictIncrease(1, 1, 3));
console.log(checkSoftOrStrictIncrease(1, 3, 1));
console.log(checkSoftOrStrictIncrease(3, 1, 1));
