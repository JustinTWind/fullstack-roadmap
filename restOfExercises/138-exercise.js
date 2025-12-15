/*

  138. Reverse Bits in 16-Bit Unsigned Integer

    Write a JavaScript program to reverse the bits of a given 16-bit unsigned short integer. 

*/

function reverse16Bits(givenNumber) {
  let arrayNumberOnByte = givenNumber
    .toString(2)
    .padStart(16, 0)
    .split("")
    .reverse();

  return parseInt(arrayNumberOnByte.join(""), 2);
}

console.log(reverse16Bits(12345));
console.log(reverse16Bits(10));
console.log(reverse16Bits(5));