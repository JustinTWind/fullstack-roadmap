/*

  49. Replace Each Character with Next Alphabet Letter

    Write a JavaScript program to replace every character
    in a given string with the character following it in the alphabet. 

*/

function caesarCipher(givenString) {
  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "ñ",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "a"
  ];

  const arrayString = givenString.toLowerCase().split("");
  const encryptedString = [];

  arrayString.forEach((character) => {
    const actualCharacterIndex = alphabet.indexOf(character);
    encryptedString.push(alphabet[actualCharacterIndex + 1]);
  });

  return encryptedString.join(" ");
}

console.log(caesarCipher("Halo"));
console.log(caesarCipher("Hello World"));