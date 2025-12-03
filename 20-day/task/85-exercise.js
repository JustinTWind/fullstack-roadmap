/*

  85. Split Array into Two Sums Alternating Elements

    Write a JavaScript program to divide a given array of positive integers into two parts.
    First element belongs to the first part, 
    second element belongs to the second part, 
    and third element belongs to the first part and so on. 
    Now compute the sum of two parts and store it in an array of size two.  

*/

function getAlternatingSums(givenArray) {
  const firstPartSum = givenArray.reduce((total, element, index) => {
    if ((index + 1) % 2 !== 0) {
      return total + element;
    }
    return total;
  }, 0);

  const secondPartSum = givenArray.reduce((total, element, index) => {
    if ((index + 1) % 2 === 0) {
      return total + element;
    }
    return total;
  }, 0);

  return [firstPartSum, secondPartSum];
}

console.log(getAlternatingSums([1, 3, 6, 2, 5, 10]));
