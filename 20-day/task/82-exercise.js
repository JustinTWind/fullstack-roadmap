/*

  82. Add Two Integers Without Carrying
  
    Write a JavaScript program to add two positive integers without carrying.  

*/

function sumWithoutCarrying(givenNumber1, givenNumber2) {
  const arrayFirstNumberDigits = [
    Math.floor(givenNumber1 / 100),
    Math.floor(givenNumber1 / 10) % 10,
    givenNumber1 % 10,
  ];

  const arraySecondNumberDigits = [
    Math.floor(givenNumber2 / 100),
    Math.floor(givenNumber2 / 10) % 10,
    givenNumber2 % 10,
  ];

  return Number(
    String((arrayFirstNumberDigits[0] + arraySecondNumberDigits[0]) % 10) +
      ((arrayFirstNumberDigits[1] + arraySecondNumberDigits[1]) % 10) +
      ((arrayFirstNumberDigits[2] + arraySecondNumberDigits[2]) % 10)
  );
}

console.log(sumWithoutCarrying(222, 911));
console.log(sumWithoutCarrying(200, 900));
