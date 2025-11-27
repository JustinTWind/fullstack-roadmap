/*

  20. Check if One Integer is Positive and One is Negative

    Write a JavaScript program to check two given integers whether one is positive and another one is negative.  


*/

function areOppositeSigns(userFirstInteger, userSecondInteger) {
  const firstCheck = userFirstInteger >= 0;
  const secondCheck = userSecondInteger >= 0;
  return firstCheck !== secondCheck;
}
console.log(areOppositeSigns(-1, -1));
console.log(areOppositeSigns(1, -1));
console.log(areOppositeSigns(0, 0));
