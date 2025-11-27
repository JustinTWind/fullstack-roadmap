/*

  24. Add First Character to Front and Back of String

    Write a JavaScript program to create another string from a given string with the first character of the given string added to the front and back.  

*/

function wrapWithFirstChar(givenString) {
  const firstCharacter = givenString[0];
  const givenStringArray = givenString.split("");
  givenStringArray.unshift(firstCharacter);
  givenStringArray.push(firstCharacter);
  return givenStringArray.join("");
}

console.log(wrapWithFirstChar("halo"));
