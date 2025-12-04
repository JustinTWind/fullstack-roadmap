/*

  104. Find Pair with Closest Absolute Difference

    Write a JavaScript program to find two elements of an array such that their absolute difference
    is not larger than a given integer. However, it is as close as possible to the integer. 

*/

function closestAbsoluteNum(givenArray, givenNumber) {
  let closestAbsoluteDifference = 0;

  for (let index = 0; index < givenArray.length; index++) {
    for (let innerIndex = index + 1; innerIndex <= givenArray.length; innerIndex++) {

      const actualDifference = Math.abs(
        givenArray[innerIndex] - givenArray[index]
      );

      if (
        actualDifference <= givenNumber &&
        actualDifference > closestAbsoluteDifference
      )
       closestAbsoluteDifference = actualDifference;
    }
  }

  return closestAbsoluteDifference
}


console.log(closestAbsoluteNum([12, 10, 33, 34], 10));
console.log(closestAbsoluteNum([12, 10, 33, 34], 24));
console.log(closestAbsoluteNum([12, 10, 33, 44], 40));