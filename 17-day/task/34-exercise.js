/*

  34. Find Larger Number in Range 40?60

    Write a JavaScript program to find the largest number from the two given positive integers.
    The two numbers are in the range 40..60 inclusive.  


*/

function wichIsLargerInRange(givenNumber1, givenNumber2) {
  const rangeCheck =
    givenNumber1 >= 45 &&
    givenNumber1 <= 60 &&
    givenNumber2 >= 45 &&
    givenNumber2 <= 60;

  if (!rangeCheck) return "Invalid Input";

  return Math.max(givenNumber1, givenNumber2);
}

console.log(wichIsLargerInRange(45, 46));
console.log(wichIsLargerInRange(25, 60));
console.log(wichIsLargerInRange(45, 80));
