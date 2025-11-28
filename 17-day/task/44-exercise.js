/*

  44. Evaluate if Integer is =20 and Less Than Another

    Write a JavaScript program that evaluates three given integers to determine
    if any one of them is greater than or equal to 20 and less than at least one of the other two.  

*/

function check20AndSmaller(givenNumber1, givenNumber2, givenNumber3) {
  const firstGreaterValidation = givenNumber1 >= 20;
  const secondGreaterValidation = givenNumber2 >= 20;
  const thirdGreaterValidation = givenNumber3 >= 20;

  return (
    (firstGreaterValidation &&
      (givenNumber1 < givenNumber2 || givenNumber1 < givenNumber3)) ||
    (secondGreaterValidation &&
      (givenNumber2 < givenNumber1 || givenNumber2 < givenNumber3)) ||
    (thirdGreaterValidation &&
      (givenNumber3 < givenNumber2 || givenNumber3 < givenNumber1))
  );
}

console.log(check20AndSmaller(23, 45, 10));
console.log(check20AndSmaller(23, 23, 10));
console.log(check20AndSmaller(21, 66, 75));
console.log(check20AndSmaller(19, 15, 10));
console.log(check20AndSmaller(23, 24, 25));
