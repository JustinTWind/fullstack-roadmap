/*

  94. Find Most Frequent Number in Array

    Write a JavaScript program to find the number appearing most frequently in a given array of integers. 

*/

function mostFrequentNumber(givenArray) {
  const frequencyOfNumbers = {};
  let mostFrequentNumber = 0;

  givenArray.forEach((element) => {
    frequencyOfNumbers[element] = 0;
  });

  givenArray.forEach((element) => {
    frequencyOfNumbers[element] = frequencyOfNumbers[element] + 1;

    if (frequencyOfNumbers[element] > mostFrequentNumber)
      mostFrequentNumber = frequencyOfNumbers[element];
  });

  return Object.keys(frequencyOfNumbers).find(
    (key) => frequencyOfNumbers[key] === mostFrequentNumber
  );
}

console.log(mostFrequentNumber([1, 2, 3, 2, 2, 8, 1, 9]));
console.log(mostFrequentNumber([1, 2, 3, 3, 3, 3, 2, 2, 8, 1, 9]));

function mostFrequentNumberOptimized(givenArray) {
  const frequencyMap = {};
  let maxFrequency = 0;
  let mostFrequentNum = givenArray[0];

  for (const element of givenArray) {
    frequencyMap[element] = (frequencyMap[element] || 0) + 1;
    const currentFrequency = frequencyMap[element];

    if (currentFrequency > maxFrequency) {
      maxFrequency = currentFrequency;
      mostFrequentNum = element;
    }
  }
  return mostFrequentNum;
}

console.log(mostFrequentNumberOptimized([1, 2, 2, 3, 4, 3, 1, 1]));
console.log(mostFrequentNumberOptimized([5, 5, 1, 1, 2, 5]));
