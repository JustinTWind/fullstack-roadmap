/**
 * Write a JavaScript program to check whether a given positive number is a multiple of 3 or 7.
*/

function isMultipleOfThreeOrSeven(userNumber) {
  if (typeof userNumber !== "number" || isNaN(userNumber)) {
    return "The parameter must be a valid number.";
  }
  if (userNumber < 0) {
    return "Error: Input must be a positive number.";
  }

  const isMultipleOf3 = userNumber % 3 === 0;
  const isMultipleOf7 = userNumber % 7 === 0;
  return isMultipleOf3 && isMultipleOf7
    ? "It's a multiple of 7 and 3"
    : !(isMultipleOf3 || isMultipleOf7)
      ? "It's not multiple of 7 or 3"
      : isMultipleOf3
        ? "It's multiple of 3"
        : "It's multiple of 7"
}

console.log(isMultipleOfThreeOrSeven(21));
console.log(isMultipleOfThreeOrSeven(9));
console.log(isMultipleOfThreeOrSeven(14));
console.log(isMultipleOfThreeOrSeven(10));
console.log(isMultipleOfThreeOrSeven(0));
console.log(isMultipleOfThreeOrSeven(NaN))