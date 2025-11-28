/*

  35. Check Character Between 2nd and 4th Positions in String
  
    Write a program to check whether a specified character exists
    between the 2nd and 4th positions in a given string.  

*/

function itExistInRange(givenString, character) {
  return givenString.substring(1,4).includes(character)
}

console.log(itExistInRange("Python", "y"));
console.log(itExistInRange("Javascript", "a"));
console.log(itExistInRange("Console", "o"));
console.log(itExistInRange("Console", "C"));
console.log(itExistInRange("Console", "e"));
console.log(itExistInRange("Javascript", "s"));
