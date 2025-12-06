/*

  119. Check if Digits in Integer Are Increasing
  
    Write a JavaScript program to check if a given integer has an increasing digit sequence. 

*/

function checkDigitsIncreasing(givenNumber) {
  const numberString = givenNumber.toString();
  const numberStringLength = numberString.length;

  for (let index = 0; index < numberStringLength; index++) {
    if (numberString[index] >= numberString[index + 1]) {
      return "Non increasing Digits";
    }
  }

  return "Increasing Digits";
}

console.log(checkDigitsIncreasing(123));
console.log(checkDigitsIncreasing(132));
console.log(checkDigitsIncreasing(1223));
console.log(checkDigitsIncreasing(45677));
console.log(checkDigitsIncreasing(5678));
