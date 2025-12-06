/*

  108. Dot Product of Two 3D Vectors

    Write a JavaScript program to create the dot products of two given 3D vectors. 
    Note: The dot product is the sum of the products of the corresponding entries of the two sequences of numbers.

*/

function dotProduct(givenArray1, givenArray2) {
  const arrayLenght = givenArray1.length;
  let sum = 0;
  for (let index = 0; index < arrayLenght; index++) {
    sum += givenArray1[index] * givenArray2[index];
  }
  return sum;
}

console.log(dotProduct([1, 2, 3], [1, 2, 3]));
console.log(dotProduct([2, 4, 6], [2, 4, 6]));
console.log(dotProduct([1, 1, 1], [0, 1, -1]));


// Con el Reduce

function dotProductReduce(givenArray1, givenArray2) {
  // Probando lo de ayer de los errores
  if (givenArray1.length !== givenArray2.length) {
    throw new Error("Vectors must have the same dimension.");
  }

  return givenArray1.reduce((sum, value, index) => {
    return sum + value * givenArray2[index];
  }, 0);
}

console.log(dotProductReduce([1, 2, 3], [1, 2, 3]));