/*

  68. Use First and Last 'n' Characters from String

    Write a JavaScript program to create a new string using the first and last n characters
    from a given string. The string length must be larger than or equal to n.  

*/

function extractFirstAndLastN(givenString, nCharacters) {
  return (
    givenString.trim().slice(0, nCharacters) +
    givenString.trim().slice(-nCharacters)
  );
}

console.log(extractFirstAndLastN("Javascript", 2));
console.log(extractFirstAndLastN("Javascript", 3));
