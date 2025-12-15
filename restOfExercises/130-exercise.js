/*

  130. Count Even Digits in Integer
  
    Write a JavaScript program to find the number of even digits in a given integer. 

*/

function countEventDigits(givenNumber) {
  const digitsArray = givenNumber.toString().split("");
  return digitsArray.reduce((totalEvenDigits, element) => {
    if (element % 2 === 0) {
      return ++totalEvenDigits;
    }

    return totalEvenDigits;
  }, 0);
}

console.log(countEventDigits(123));
console.log(countEventDigits(1020));
