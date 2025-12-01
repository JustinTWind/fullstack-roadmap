/*

  54. Count Vowels in String

    Write a JavaScript program to count the number of vowels in a given string.  

*/

function countVowels(givenString) {
  const regex = /[aeiou]/gi;
  return givenString.match(regex).length;
}

console.log(countVowels("Hola Mundoooooooo"));
console.log(countVowels("w3resource.com"));
