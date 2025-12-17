/* (30 puntos)
 * Crea una función que reciba dos cadenas como parámetro (str1, str2)
 * e imprima otras dos cadenas como salida (out1, out2).
 * - out1 contendrá todos los caracteres presentes en la str1 pero NO
 *   estén presentes en str2.
 * - out2 contendrá todos los caracteres presentes en la str2 pero NO
 *   estén presentes en str1.
 */

const opositeCharacters = function (givenString1, givenString2) {
  const out2 = givenString1
    .toLowerCase()
    .split("")
    .filter((element) => {
      return !givenString2.includes(element.toLowerCase());
    });

  const out1 = givenString2
    .toLowerCase()
    .split("")
    .filter((element) => {
      return !givenString1.includes(element.toLowerCase());
    });

  return [out2.join(""), out1.join("")];
};

console.log(opositeCharacters("hola", "como estas"));


const opositeCharactersOptimized = function (givenString1, givenString2) {
  const setOfChars1 = new Set(givenString1.toLowerCase());
  const setOfChars2 = new Set(givenString2.toLowerCase());

  const out1 = Array.from(setOfChars1.difference(setOfChars2));
  const out2 = Array.from(setOfChars2.difference(setOfChars1));

  return [out1.join(""), out2.join("")];
};

console.log(opositeCharactersOptimized("hola", "como estas"));
console.log(opositeCharactersOptimized("JavaScript", "Python"));
console.log(opositeCharactersOptimized("abc", "cba"));
console.log(opositeCharactersOptimized("hello", "world"));
console.log(opositeCharactersOptimized("programming", "developer"));
