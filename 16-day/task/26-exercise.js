/*

  26. Add Last 3 Characters to Front and Back of String

    Write a JavaScript program to create a string from a given string.
    This is done by taking the last 3 characters and adding them at both the front and back.
    The string length must be 3 or more.  

*/



function wrapWithLast3Chars(givenString) {
  if (givenString.length < 3) return "The string it's too short"
  const last3Characters = givenString.substring(givenString.length - 3);
  const givenStringArray = givenString.split("");
  givenStringArray.unshift(last3Characters);
  givenStringArray.push(last3Characters);
  return givenStringArray.join("");
}

console.log(wrapWithLast3Chars("halo"));
console.log(wrapWithLast3Chars("halo"));
console.log(wrapWithLast3Chars("alo"));