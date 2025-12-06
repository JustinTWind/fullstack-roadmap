/*

  115. Check if Matrix is Diagonal Matrix

    Write a JavaScript program to check whether a matrix is a diagonal matrix or not.
    In linear algebra, a diagonal matrix is a matrix in which the entries outside the
    main diagonal are all zero (the diagonal from the upper left to the lower right).
    
    [1, 0, 0], [0, 2, 0], [0, 0, 3] ]) = true
    [1, 0, 0], [0, 2, 3], [0, 0, 3] ]) = false

*/

function checkDiagonalMatrix(givenMatrix) {
  const flattedMatrix = givenMatrix.flat();
  const matrixLength = flattedMatrix.length;

  for (let index = 0; index < matrixLength; index += 4) {
    if (index === 8 && flattedMatrix[index] !== 0) return "Diagonal Matrix";

    if (
      flattedMatrix[index] === 0 ||
      flattedMatrix[index + 1] !== 0 ||
      flattedMatrix[index + 2] !== 0 ||
      flattedMatrix[index + 3] !== 0
    )
      return "It's not a diagonal matrix";
  }
}

console.log(
  checkDiagonalMatrix([
    [1, 0, 0],
    [0, 2, 0],
    [0, 0, 3],
  ])
);

console.log(
  checkDiagonalMatrix([
    [1, 0, 0],
    [0, 2, 3],
    [0, 0, 3],
  ])
);
