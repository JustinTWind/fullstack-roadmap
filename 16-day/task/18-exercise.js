/*

  18. Check if Number or Sum is 50

    Write a JavaScript program to check a pair of numbers and return true if one of the numbers is 50 or if their sum is 50.  

*/

function checkPairToFifty(userNumberOne, userNumberTwo) {
  return (
    userNumberOne === 50 ||
    userNumberTwo === 50 ||
    userNumberOne + userNumberTwo === 50
  );
}

console.log(checkPairToFifty(50, 0));
console.log(checkPairToFifty(49, 1));
console.log(checkPairToFifty(1, 10));
