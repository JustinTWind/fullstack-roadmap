/*

  102. Count Inversions in Array

    Write a JavaScript program to find the number of inversions of a given array of integers. 
    Note: Two elements of the array a stored at positions i and j form an inversion if a[i] > a[j] and i < j. 
    
*/

// Se puede hacer con un merge sort, pero NO GRACIAS

function countInversions(givenArray) {
  let numberOfInversions = 0;

  for (let index = 0; index < givenArray.length; index++) {
    for (
      let innerIndex = index + 1;
      innerIndex <= givenArray.length;
      innerIndex++
    ) {
      if (givenArray[index] > givenArray[innerIndex]) numberOfInversions++;
    }
  }
  return numberOfInversions;
}

console.log(countInversions([2, 4, 1, 3, 5]));
console.log(countInversions([1, 5, 4, 3]));
console.log(countInversions([0, 3, 2, 5, 9]));
