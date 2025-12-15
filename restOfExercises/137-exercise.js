/*

  137. Return Number if >15, Else 15

    Write a JavaScript program to test whether a given integer is greater than 15
    and return the given number, otherwise return 15. 

*/
   
function checkingfifteen(givenNumber) {
  return givenNumber >= 15 ? givenNumber : 15;
}

console.log(checkingfifteen(123));
console.log(checkingfifteen(10));
