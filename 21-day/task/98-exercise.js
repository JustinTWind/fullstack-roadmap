/*

  98. Change Case Minimally for Upper or Lower Case

    Write a JavaScript program to change the case of the minimum number of letters
    to make a given string written in upper case or lower case. 
    Fox example "Write" will be write and "PHp" will be "PHP"

*/

function switchMinimunCase(givenString) {
  let upperCaseCount = 0;
  let lowerCaseCount = 0;

  for (element of givenString) {
    upperCaseCount;
    if (element.search(/[a-z]/) !== -1) lowerCaseCount++;
    else upperCaseCount++;
  }

  return lowerCaseCount > upperCaseCount
    ? givenString.toLowerCase()
    : givenString.toUpperCase();
}

console.log(switchMinimunCase("PHp")); // PHP
console.log(switchMinimunCase("Write")); // write
