/*

  128. Find Smallest Round Number = Value

    Write a JavaScript program to find the smallest round number not less than a given value. 

    Note: A round number is informally considered to be an integer that ends with one or more zeros.[3]
    So, 590 is rounder than 592, but 590 is less round than 600.

*/

function findSmallestRoundNumber(givenNumber) {
  while (givenNumber % 10) {
    givenNumber++;
  }
  return givenNumber;
}

console.log(findSmallestRoundNumber(56));
console.log(findSmallestRoundNumber(592));
