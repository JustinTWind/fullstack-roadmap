/*

  139. Find Position of Rightmost Round Number

    Write a JavaScript program to find the position of the rightmost round number in an array of integers.
    If there are no round numbers, the function returns 0.  
    Note: A round number is informally considered to be an integer that ends with one or more zeros.
    
*/

function rightmostRoundNumber(givenArray) {
  const result = givenArray.findLastIndex((number) => number % 10 === 0);
  return result === -1 ? 0 : result;
}

console.log(rightmostRoundNumber([1, 22, 30, 54, 56]));
console.log(rightmostRoundNumber([1, 22, 32, 54, 56]));
console.log(rightmostRoundNumber([1, 22, 32, 54, 50]));
