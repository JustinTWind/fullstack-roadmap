/*

  113. Sum n + n/2 + n/4 + ...

    Write a JavaScript program to calculate the sum of n + n/2 + n/4 + n/8 + .... 
    where n is a positive integer and all divisions are integers. 

*/

function sumOfNDivisions(givenNumber) {
  let sum = 0;

  while (givenNumber > 0) {
    sum += givenNumber;
    givenNumber = Math.floor(givenNumber / 2);
  }

  return sum;
}

console.log(sumOfNDivisions(8));
console.log(sumOfNDivisions(9));
console.log(sumOfNDivisions(26));
