/*

  17. Difference Between Number and 19 (Triple if >19)

    Write a JavaScript program to compute the absolute difference between a specified number and 19.
    Returns triple the absolute difference if the specified number is greater than 19.  

*/

function numberDifferenceWith19(userNumber) {
  return userNumber > 19
    ? Math.abs(userNumber - 19) * 3
    : Math.abs(userNumber - 19);
}

console.log(numberDifferenceWith19(20));
console.log(numberDifferenceWith19(10));
