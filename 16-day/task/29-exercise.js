/*

  29. Check if Three Integers are in Range 50?99

    Write a JavaScript program to check whether three given integer values
    are in the range 50..99 (inclusive). 
    Return true if one or more of them are in the specified range.  

*/

function isAnyInRange50To99(givenNumber1, givenNumber2, givenNumber3) {
  const firstNumberCheck = givenNumber1 >= 50 && givenNumber1 <= 99;
  const secondNumberCheck = givenNumber2 >= 50 && givenNumber2 <= 99;
  const thirdNumberCheck = givenNumber3 >= 50 && givenNumber3 <= 99;
  return firstNumberCheck || secondNumberCheck || thirdNumberCheck;
}

console.log(isAnyInRange50To99(10, 0, 50));
