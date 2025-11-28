/*

  41. Return 30, 40, or 20 Based on Same Numbers

    Write a JavaScript program to check a set of three numbers;
    if the three numbers are the same return 30;
    otherwise return 20; 
    and if two numbers are the same return 40.  

*/

function checkNumbersEquality(givenNumber1, givenNumber2, givenNumber3) {
  if (givenNumber1 === givenNumber2 && givenNumber1 === givenNumber3) return 30;

  if (
    givenNumber1 === givenNumber2 ||
    givenNumber2 === givenNumber3 ||
    givenNumber1 === givenNumber3
  ) return 40;

  return 20;
}

console.log(checkNumbersEquality(1, 20, 10));
console.log(checkNumbersEquality(20, 20, 10));
console.log(checkNumbersEquality(20, 20, 20));
