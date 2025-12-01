/*

  51. Transform Number to Hours and Minutes

    Write a JavaScript application that transforms 
    a provided numerical value into hours and minutes.   

*/

function numberIntoTime(givenNumber) {
  const hours = Math.floor(givenNumber / 60);
  const minutes = givenNumber % 60;
  return `${hours} hrs ${minutes} minutes`;
}

console.log(numberIntoTime(121));
console.log(numberIntoTime(450));
