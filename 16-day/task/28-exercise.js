/*

  28. Check if Two Integers are in Range 50?99

    Write a JavaScript program to check whether two given integer values are in the range 50..99 (inclusive).
    Return true if either of them falls within the range.  

*/

function isAnyInRange50To99(givenNumber1, givenNumber2) {
  const firstNumberCheck = givenNumber1 >= 50 && givenNumber1 <= 99;
  const secondNumberCheck = givenNumber2 >= 50 && givenNumber2 <= 99;
  return firstNumberCheck || secondNumberCheck;
}

console.log(isAnyInRange50To99(10, 50));
