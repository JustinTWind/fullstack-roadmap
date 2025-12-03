/*

  87. Check if Two Arrays Are Similar with One Swap

  Write a JavaScript program to determine if two arrays of integers of the same length are similar.
  The arrays will be similar if one array can be obtained from another array by swapping at most one pair of elements.  

*/

function checkOneSwapSimilarity(givenArray1, givenArray2) {
  if (givenArray1.length !== givenArray2.length) {
    return false;
  }

  const diffIndexes = [];

  for (let i = 0; i < givenArray1.length; i++) {
    if (givenArray1[i] !== givenArray2[i]) {
      diffIndexes.push(i);
    }
  }

  if (diffIndexes.length === 0) {
    return true;
  }

  if (diffIndexes.length === 2) {
    const firstDifference = diffIndexes[0];
    const secondDifference = diffIndexes[1];

    return (
      givenArray1[firstDifference] === givenArray2[secondDifference] &&
      givenArray1[secondDifference] === givenArray2[firstDifference]
    );
  }

  return false;
}

console.log(checkOneSwapSimilarity([10, 20, 30], [10, 20, 30]));
console.log(checkOneSwapSimilarity([10, 20, 30], [30, 10, 20]));
console.log(checkOneSwapSimilarity([10, 20, 30, 40], [10, 30, 20, 40]));
