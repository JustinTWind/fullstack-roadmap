/**
 *  create a function that receives an string and a letter as parameters
 *  removes all the letter occurrences from the string and return it
 */

function removeCharacter(word, character) {
  const regex = new RegExp(character, "g");
  return word.replace(regex, "");
}

console.log(removeCharacter("hola mundo", "o"))

