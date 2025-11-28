/*

  33. Check if Two Numbers are in Specific Ranges

    Write a JavaScript program to check whether
    two numbers are in the range 40..60 or 70..100 inclusive.  

*/

function IsAnyInRange(givenNumber1, givenNumber2) {
  const firstRangeCheck =
    givenNumber1 >= 40 &&
    givenNumber1 <= 60 &&
    givenNumber2 >= 40 &&
    givenNumber2 <= 60;
  
  const secondRangeCheck =
    givenNumber1 >= 70 &&
    givenNumber1 <= 100 &&
    givenNumber2 >= 70 &&
    givenNumber2 <= 100;
  
  return firstRangeCheck || secondRangeCheck
}

console.log(IsAnyInRange(44, 56));
console.log(IsAnyInRange(70, 95));
console.log(IsAnyInRange(50, 89));
