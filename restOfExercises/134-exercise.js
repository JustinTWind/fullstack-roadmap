/*

  134. Reverse Alphabetical Order of Lowercase Letters

    Write a JavaScript program to change the characters (lower case) in a string where
    a turns into z, b turns into y, c turns into x, ..., n turns into m, m turns into n, ..., z turns into a. 

*/

// prueba.codePointAt() - 96) % 26

function reverseAlphabeth(givenString) {
  let stringArray = givenString.toLowerCase().split("");

  return stringArray
    .map((element) => {
      const characterInAlphabeth = element.codePointAt() - 97;
      return String.fromCharCode(26 - characterInAlphabeth + 96);
    })
    .join("");
}

console.log(reverseAlphabeth("python"));
console.log(reverseAlphabeth("abcxyz"));
