/*

  111. Find Unique Number Among Three
  
    Write a JavaScript program to check a number from three given numbers
    where two numbers are equal. Find the third one. 

*/

function findUniqueNumber(givenArray) {
  const arrayLenght = givenArray.length;
  const sortedArray = givenArray.sort();
  let equalIndexesStart = [];
  for (let index = 0; index < arrayLenght; index++) {
    if (sortedArray[index] === sortedArray[index + 1]) {
      equalIndexesStart.push(index);
      break;
    }
  }

  if (equalIndexesStart.length === 0) {
    return "Not any numbers are equal";
  }

  return equalIndexesStart[0] === 0 ? sortedArray[2] : sortedArray[0];
}

console.log(findUniqueNumber([1, 2, 2]));
console.log(findUniqueNumber([1, 2, 3]));
console.log(findUniqueNumber([3, 3, 1]));
console.log(findUniqueNumber([3, 3, 2]));
console.log(findUniqueNumber([3, 2, 3]));
