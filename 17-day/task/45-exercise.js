/*

  45. Check if Integer is 15, or Sum/Difference is 15

    Write a JavaScript program that checks two integer values
    and returns true if either one is 15 or if their sum or difference is 15.  

*/

function checkfifteenNumberConditions(givenNumber1, givenNumber2) {
  return (
    givenNumber1 === 15 ||
    givenNumber2 === 15 ||
    Math.abs(givenNumber1 - givenNumber2) === 15 ||
    givenNumber1 + givenNumber2 === 15
  );
}