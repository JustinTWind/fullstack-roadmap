/*

  141. Find Number of Elements in Both Arrays

    Write a JavaScript program to find the number of elements in both arrays.   

*/

function numberOfEquals(givenArray1, givenArray2) {
  givenArray1.sort();
  givenArray2.sort();
  return givenArray1.reduce((total, element, index) => {
    if (element == givenArray2[index]) {
      return ++total;
    }
    return total;
  }, 0);
}

console.log(numberOfEquals([1, 2, 3, 4], [1, 2, 3, 4]));
console.log(numberOfEquals([1, 2, 3, 4], [1, 2, 3, 5]));
console.log(numberOfEquals([1, 2, 3, 4], [11, 22, 33, 44]));
