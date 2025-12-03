/*

  67. Remove First/Last 'P' Characters in String

    Write a JavaScript program to create a new string from a given string.
    This program removes the first and last characters of the string
    if the first or last character is 'P'. Return the original string if the condition is not satisfied.  

*/

function removeByP(givenString) {
  const arrayString = givenString.trim().split("");
  if (givenString.toLowerCase().trim()[0] === "p") arrayString.shift();
  if (givenString.toLowerCase().trim().at(-1) === "p") arrayString.pop();
  return arrayString.join("");
}

console.log(removeByP("PythonP"));
console.log(removeByP("Python"));
console.log(removeByP("PjavascriptP"));
