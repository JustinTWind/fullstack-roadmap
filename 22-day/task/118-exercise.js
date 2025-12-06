/*

  118. Check if Number is in Range

    Write a JavaScript program to check whether a given number is in a given range. 

*/

function checkNumberInRange(givenNumber1, givenNumber2, givenNumber3) {
  return givenNumber2 >= givenNumber1 && givenNumber2 <= givenNumber3;
}

console.log(checkNumberInRange(1, 2, 3));
console.log(checkNumberInRange(1, 2, -3));
console.log(checkNumberInRange(1.1, 1.2, 1.3));
