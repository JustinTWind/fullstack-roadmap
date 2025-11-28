/*

  40. Check if Integer is 8 or Difference/Sum Equals 8

    Write a JavaScript program to check from two given
    integers whether one of them is 8 or their sum or difference is 8.  

*/

function checkEighNumbertConditions(givenNumber1, givenNumber2) {
  return (
    givenNumber1 === 8 ||
    givenNumber2 === 8 ||
    Math.abs(givenNumber1 - givenNumber2) === 8 ||
    givenNumber1 + givenNumber2 === 8
  );
}

console.log(checkEighNumbertConditions(17, 9));
console.log(checkEighNumbertConditions(4, 4));
console.log(checkEighNumbertConditions(8, 1));
console.log(checkEighNumbertConditions(0, 8));