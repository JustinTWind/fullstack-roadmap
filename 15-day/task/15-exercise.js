/*

  15. Difference Between Number and 13

    Write a JavaScript program to get the difference between a given number and 13,
    if the number is broader than 13 return double the absolute difference.  

*/

function numberDifferenceWith13(userNumber) {
  return userNumber > 13 ?  Math.abs((userNumber - 13) * 2) : userNumber - 13;
};

console.log(numberDifferenceWith13(14))
