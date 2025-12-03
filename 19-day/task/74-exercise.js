/*

  74. Set All Elements to Largest of First/Last in Array

    Write a JavaScript program to find the largest value between the first and last elements
    and set all the other elements to that value. Display the updated array.  
*/

function boundariesLargest(givenArray) {
  const largest =
    givenArray[0] > givenArray.at(-1) ? givenArray[0] : givenArray.at(-1);

  return givenArray.map(() => {
    return largest;
  });
}

console.log(boundariesLargest([20, 30, 40]));
console.log(boundariesLargest([-7, -9, 0]));
console.log(boundariesLargest([12, 10, 3]));
