/*

  117. Check if Matrix is Identity Matrix

    Write a JavaScript program to check whether a given matrix is an identity matrix. 
    Note: In linear algebra, the identity matrix, or sometimes ambiguously called a unit matrix,
    of size n is the n ? n square matrix with ones on the main diagonal and zeros elsewhere.

    [[1, 0, 0], [0, 1, 0], [0, 0, 1]] -> true
    [[1, 0, 0], [0, 1, 0], [1, 0, 1]] -> false

*/

function isIdentityMatrix(givenMatrix) {
  const matrixLength = givenMatrix.length;

  if (matrixLength === 0) {
    return "It should be at least 1x1";
  }

  for (let index = 0; index < matrixLength; index++) {
    if (givenMatrix[index].length !== matrixLength) {
      return "Should be an square matrix";
    }
  }

  for (let index = 0; index < matrixLength; index++) {
    for (let j = 0; j < matrixLength; j++) {
      if (index === j) {
        if (givenMatrix[index][j] !== 1) {
          return "Is not a identity matrix";
        }
      } else {
        if (givenMatrix[index][j] !== 0) {
          return "Is not a identity matrix";
        }
      }
    }
  }

  return "Identity Matrix";
}

console.log(
  isIdentityMatrix([
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1],
  ])
);

console.log(
  isIdentityMatrix([
    [1, 1, 0],
    [0, 1, 0],
    [0, 0, 1],
  ])
);

console.log(
  isIdentityMatrix([
    [1, 1, 0],
    [0, 1, 0],
    [0, 0, 1, 1],
  ])
);

console.log(
  isIdentityMatrix([
    [1, 0, 0],
    [0, 1, 0],
    [1, 0, 1],
  ])
);
