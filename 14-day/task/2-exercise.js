/**
 * Write a JavaScript program to check a pair of numbers and return
 * true if one of the numbers is 50 or if their sum is 50.
*/

function checkPairToFifty(userNumberOne, userNumberTwo) {
  return typeof userNumberOne !== "number" || typeof userNumberTwo !== "number"
    ? "The parameters are invalid"
    : userNumberOne === 50 || userNumberTwo === 50 || (userNumberOne + userNumberTwo) === 50
      ? true
      : false ;
};

console.log(checkPairToFifty(50, 0));
console.log(checkPairToFifty(25, 25));
console.log(checkPairToFifty(49, 1));
console.log(checkPairToFifty(undefined, 2));
console.log(checkPairToFifty(null, 4));
console.log(checkPairToFifty(2.5, 5));
console.log(checkPairToFifty("asds", 5));
console.log(checkPairToFifty("2.5", 6));
