function numbersToN(givenNumber) {
  console.log(givenNumber--);
  if (givenNumber > 0) numbersToN(givenNumber);
}

console.log(numbersToN(50));

function numbersToNFrom1(limit, start) {
  console.log(start++);
  if (start <= limit) numbersToNFrom1(limit, start);
}

console.log(numbersToNFrom1(50, 1));

// Versión De Sebas

/*

function printNumber(num) {
  if (num) printNumber(num - 1)
  console.log(num)
  return
}

printNumber(50)

*/
