/*

  101. Check Latin Letters with No Adjacent Upper/Lower Case

    Write a JavaScript program to check whether a given string contains only Latin letters
    and no two uppercase and no two lowercase letters are in adjacent positions. 

*/

function checkLatinLetters(givenString) {
  if (givenString.search(/[^a-zA-Z]/) !== -1) return "It contains more than only latin letters"
  const casesRegex = /^(?!.*([A-Z]{2}|[a-z]{2})).*$/;
  return givenString.match(casesRegex) !== null
}

console.log(checkLatinLetters("xYr"))
console.log(checkLatinLetters("xYR"))
console.log(checkLatinLetters("xYR1"))
console.log(checkLatinLetters("xyR"))
