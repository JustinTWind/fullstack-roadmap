/*

  133. Check if Fraction is Proper

    Write a JavaScript program to check whether a given fraction is proper or not. 

    Note: There are two types of common fractions, proper or improper.
    When the numerator and the denominator are both positive, the fraction is called proper
    if the numerator is less than the denominator, and improper otherwise.

*/

function checkProperFraction(numerator, denominator) {
  if (numerator <= 0 || denominator <= 0) {
    return "Both numbers must be positive";
  }

  return numerator < denominator;
}

console.log(checkProperFraction(12, 300));
console.log(checkProperFraction(2, 4));
console.log(checkProperFraction(103, 3));
console.log(checkProperFraction(104, 2));
console.log(checkProperFraction(5, 40));
