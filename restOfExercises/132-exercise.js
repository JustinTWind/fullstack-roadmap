/*

  132. Find Distinct Prime Factors of Integer

    Write a JavaScript program to find all distinct prime factors of a given integer. 
    
*/

function findDistinctPrimeFactors(givenNumber) {
  const distinctFactors = new Set();

  while (givenNumber % 2 === 0) {
    distinctFactors.add(2);
    givenNumber /= 2;
  }

  for (let index = 3; index * index <= givenNumber; index += 2) {
    while (givenNumber % index === 0) {
      distinctFactors.add(index);
      givenNumber /= index;
    }
  }

  if (givenNumber > 2) {
    distinctFactors.add(givenNumber);
  }

  return Array.from(distinctFactors.values());
}

console.log(findDistinctPrimeFactors(100));
console.log(findDistinctPrimeFactors(13));
console.log(findDistinctPrimeFactors(101));
console.log(findDistinctPrimeFactors(105));
console.log(findDistinctPrimeFactors(104));
