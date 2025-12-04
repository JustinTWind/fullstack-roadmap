/*

  105. Replace Number with Digit Sum Until Single Digit

    Write a JavaScript program to find the number of times to replace a given number
    with the sum of its digits. This is until it converts to a single-digit number. 
    
*/

function convertIntoDigitSum(givenNumber) {
  let counter = 0;
  let blockSumOfDigits = givenNumber;

  do {
    let givenNumberLength = String(blockSumOfDigits).length;
    let actualDigits = blockSumOfDigits;
    blockSumOfDigits = 0;

    for (let index = 0; index < givenNumberLength; index++) {
      blockSumOfDigits += Math.floor(actualDigits / 10 ** index) % 10;
    }

    counter++;
  } while (blockSumOfDigits > 9);

  return counter;
}

console.log(convertIntoDigitSum(1234));
console.log(convertIntoDigitSum(123));
console.log(convertIntoDigitSum(156));
