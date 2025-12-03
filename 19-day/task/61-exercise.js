/*

  61. Concatenate Two Strings Without First Character

    Write a JavaScript program to concatenate
    two strings except for their first character.   

*/

function concatSkipFirst(givenString1, givenString2) {
  return givenString1.trim().slice(1) + givenString2.trim().slice(1);
}

console.log(concatSkipFirst("PHP", "JS"));
