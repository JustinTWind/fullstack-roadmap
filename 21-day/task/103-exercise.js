/*

  103. Max Integer by Removing One Digit

    Write a JavaScript program to find the maximum number
    of a given positive integer by deleting exactly one digit of the given number. 

*/

function maxNumberRemovingDigit(givenNumber) {
  const numberString = givenNumber.toString();
  let maxNumberPossible = 0;

  for (let index = 0; index < numberString.length; index++) {
    const newNumberString =
      numberString.slice(0, index) + numberString.slice(index + 1);

    const currentNumber = Number(newNumberString);

    maxNumberPossible = Math.max(maxNumberPossible, currentNumber);
  }

  return maxNumberPossible;
}

console.log(maxNumberRemovingDigit(1245));
console.log(maxNumberRemovingDigit(100));
console.log(maxNumberRemovingDigit(123));
console.log(maxNumberRemovingDigit(12345));
