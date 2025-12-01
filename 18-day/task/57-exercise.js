/*

  57. Create String of Specified Copies

    Write a JavaScript program to create one string of
    specified copies (positive numbers) of a given string.  

*/

function stringCopies(givenString, numberOfCopies) {
  if (numberOfCopies <= 0)
    return "The number of copies must be a positive number";
  return givenString.repeat(numberOfCopies);
}

console.log(stringCopies("abc", 5));
