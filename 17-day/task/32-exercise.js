/*

  32. Find Closest Value to 100 from Two Numbers

    Write a JavaScript program to find the closest
    value to 100 from two numerical values.  

*/

function closestTo100(givenNumber1, givenNumber2) {
  const firstNumberCheck = Math.abs(givenNumber1 - 100);
  const secondNumberCheck = Math.abs(givenNumber2 - 100);
  return Math.min(firstNumberCheck, secondNumberCheck) === firstNumberCheck
    ? givenNumber1
    : givenNumber2;
}

console.log(closestTo100(102, 99));
console.log(closestTo100(101, 103));