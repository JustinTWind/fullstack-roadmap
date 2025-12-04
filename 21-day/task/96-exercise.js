/*

  96. Sum of Absolute Differences of Consecutive Numbers

    Write a JavaScript program to compute the sum of the absolute differences
    of consecutive numbers in a given array of integers. 


*/

function consecutiveDifferenceSum(givenArray) {
  return givenArray.reduce((total, value, index) => {
    if (value === givenArray.at(-1)) return total;
    return (total += Math.abs(value - givenArray[index + 1]));
  }, 0);
}

console.log(consecutiveDifferenceSum([1, 2, 3, 2, -5]));
console.log(consecutiveDifferenceSum([1, 2, 3, 2, -5, 5]));
