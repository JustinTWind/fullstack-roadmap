/*

  84. Replace Characters with Next in Alphabet

    Write a JavaScript program to replace each character in a given string with the next in the English alphabet.  
    Note: 'a' will be replace by 'b' or 'z' would be replaced by 'a'.

*/

function caesarCipherWithUnicode(givenString) {
  const stringArray = givenString.trim().toLowerCase().split("");
  const EncryptedCodes = [];

  for (let index = 0; index < stringArray.length; index++) {
    if (
      stringArray[index].charCodeAt() < 97 ||
      stringArray[index].charCodeAt() > 122
    ) {
      EncryptedCodes[index] = stringArray[index];
      continue;
    }

    if (stringArray[index].charCodeAt() === 122) {
      EncryptedCodes[index] = "a";
      continue;
    }

    EncryptedCodes[index] = String.fromCharCode(
      stringArray[index].charCodeAt() + 1
    );
  }

  return EncryptedCodes.join("");
}

console.log(caesarCipherWithUnicode("abcdxyz"));
