/*

  106. Divide Integers Until Result is Integer

    Write a JavaScript program to divide an integer by another
    integer as long as the result is an integer and return the result.  
    
*/

function divideUntillFloat(dividend, divisor) {
  while (dividend % divisor === 0) {
    dividend /= divisor;
  }
  return dividend;
}

console.log(divideUntillFloat(-12, 2));
console.log(divideUntillFloat(13, 2));
console.log(divideUntillFloat(13, 1));
