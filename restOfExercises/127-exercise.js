/*

  127. Reverse Bits in Integer

    Write a JavaScript program to reverse the order of bits in a integer. 
    14 -> 00001110 -> 01110000 -> 112
    56 -> 00111000 -> 00011100 -> 28
    234 -> 11101010 -> 01010111 -> 87

*/

function reverseBits(givenNumber) {
  let arrayNumberOnByte = givenNumber
    .toString(2)
    .padStart(8, 0)
    .split("")
    .reverse();

  return parseInt(arrayNumberOnByte.join(""), 2);
}

console.log(reverseBits(14));
console.log(reverseBits(56));
console.log(reverseBits(234));
