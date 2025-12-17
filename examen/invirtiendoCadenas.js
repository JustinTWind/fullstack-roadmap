/* (30 puntos)
 * Crea un programa que invierta el orden de una cadena de texto
 * sin usar funciones propias del lenguaje que lo hagan de forma automática.
 * - Si le pasamos "Hola mundo" nos retornaría "odnum aloH"
 */

const reverseStringPrimitiveWay = function (givenString) {
  let reversedString = "";
  for (let index = givenString.length - 1; index >= 0; index--) {
    reversedString += givenString[index];
  }
  return reversedString;
}

console.log(reverseStringPrimitiveWay("Hola Mundo"));
