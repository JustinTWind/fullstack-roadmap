/*

  56. Divide Numbers and Format with Commas

    Write a JavaScript program to divide two positive numbers
    and return the result as string with properly formatted commas.  

*/

function divisionFormatted(givenNumber1, givenNumber2) {
  const quotient = givenNumber1 / givenNumber2;
  return quotient.toLocaleString("en-US");
}

console.log(divisionFormatted(100000000, 3));
console.log(divisionFormatted(1000000, 107));
