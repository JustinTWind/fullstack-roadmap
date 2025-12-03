/*

  89. Replace $ in Expression to Make True

    Write a JavaScript program to check whether it is possible to replace $
    in a given expression x $ y = z with one of the four signs +, -, * or / to obtain a correct expression.  
    For example x = 10, y = 30 and z = 300, we can replace $ with a multiple operator (*) to obtain x * y = z

*/

// Una versión para obtener cual es el operador correcto que me pareció más interesante

function checkCorrectOperator(givenNumber1, givenNumber2, result) {
  switch (true) {
    case givenNumber1 + givenNumber2 === result:
      return "+";
    case givenNumber1 - givenNumber2 === result:
      return "-";
    case givenNumber1 * givenNumber2 === result:
      return "*";
    case givenNumber1 / givenNumber2 === result:
      return "/";
    default:
      return "No valid operators where found";
  }
}

console.log(checkCorrectOperator(10, 25, 35));
console.log(checkCorrectOperator(10, 25, 250));
console.log(checkCorrectOperator(30, 25, 5));
console.log(checkCorrectOperator(100, 25, 4));
console.log(checkCorrectOperator(100, 25, 25));


// O si no, la versión del ejercicio es simplemente

function checkIfValidOperator(givenNumber1, givenNumber2, result) {
  return (
    givenNumber1 + givenNumber2 === result ||
    givenNumber1 - givenNumber2 === result ||
    givenNumber1 * givenNumber2 === result ||
    givenNumber1 / givenNumber2 === result
  );
}

console.log(checkIfValidOperator(10, 25, 35));
console.log(checkIfValidOperator(10, 25, 250));
console.log(checkIfValidOperator(30, 25, 5));
console.log(checkIfValidOperator(100, 25, 4));
console.log(checkIfValidOperator(100, 25, 25));