/*

  135. Remove Characters Appearing More Than Once

    Write a JavaScript program to remove all characters from a given string that appear more than once. 
    
*/

function removeRepetitions(givenString) { //Curioso
  return givenString.replace(/./g, (match, index, fullString) => {
    if (fullString.indexOf(match) === fullString.lastIndexOf(match)) {
      return match;
    } else {
      return "";
    }
  });
}

console.log(removeRepetitions("abbcd"));
console.log(removeRepetitions("aabbcd"));
console.log(removeRepetitions("abcdcba"));
