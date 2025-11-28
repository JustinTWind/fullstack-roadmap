/*

  43. Check Rightmost Digits of Three Numbers

    Write a JavaScript program to check from three given numbers (non negative integers)
    that two or all of them have the same rightmost digit.  

*/

function areRightmostDigitsEqual(givenNumber1, givenNumber2, givenNumber3) {
  const firstRightDigit = givenNumber1 % 10;
  const secondRightDigit = givenNumber2 % 10;
  const thirdRightDigit = givenNumber3 % 10;

  return (
    firstRightDigit === secondRightDigit ||
    secondRightDigit === thirdRightDigit ||
    firstRightDigit === thirdRightDigit
  );
}

console.log(areRightmostDigitsEqual(22, 32, 42));
console.log(areRightmostDigitsEqual(102, 302, 2));
console.log(areRightmostDigitsEqual(20, 22, 45));
console.log(areRightmostDigitsEqual(25, 22, 45));
console.log(areRightmostDigitsEqual(25, 25, 42));
console.log(areRightmostDigitsEqual(21, 25, 41));