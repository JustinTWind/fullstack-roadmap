/*

  121. Check if Matrix is Lower Triangular

    Write a JavaScript program to check whether a given matrix is lower triangular or not. 

    Note: A square matrix is called lower triangular if all the entries above the main diagonal are zero.

*/

function checkLowerTriangularMatrix(givenArray) {
  let isLowerTriangularFlag = true;
  let positionCounter = 1;

  givenArray.forEach((array) => {
    const arrayLength = array.length;

    for (let index = positionCounter; index < arrayLength; index++) {
      if (array[index] !== 0) {
        isLowerTriangularFlag = false;
      }
    }

    positionCounter++;
  });

  return isLowerTriangularFlag;
}

console.log(
  checkLowerTriangularMatrix([
    [1, 0, 0],
    [2, 0, 0],
    [0, 3, 3],
  ])
);

console.log(
  checkLowerTriangularMatrix([
    [1, 0, 1],
    [2, 0, 0],
    [0, 3, 3],
  ])
);

console.log(
  checkLowerTriangularMatrix([
    [1, 0, 0],
    [2, 0, 1],
    [0, 3, 1],
  ])
);

console.log(
  checkLowerTriangularMatrix([
    [1, 0, 0, 0],
    [2, 1, 0, 0],
    [0, 3, 1, 0],
    [1, 2, 3, 4],
  ])
);
