/*

  126. Find Largest Even Number in Array

    Write a JavaScript program to get the largest even number from an array of integers. 

*/

function findLargestEvenNumber(givenArray) {
  return givenArray.reduce((biggestNumber, actualNumber) => {
    if (actualNumber > biggestNumber && actualNumber % 2 === 0) {
      return (biggestNumber = actualNumber);
    }
    return biggestNumber;
  }, 0);
}

console.log(findLargestEvenNumber([1, 2, 3, 4, 7]));
console.log(findLargestEvenNumber([1, 2, 3, 4, 20]));
console.log(findLargestEvenNumber([95, 90, 103, 1002, 22]));
