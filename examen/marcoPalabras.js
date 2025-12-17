/* (30 puntos)
 * Crea una función que reciba un texto y muestre cada palabra en una línea,
 * formando un marco rectangular de asteriscos.
 * - ¿Qué te parece el reto? Se vería así:
 *   **********
 *   * ¿Qué   *
 *   * te     *
 *   * parece *
 *   * el     *
 *   * reto?  *
 *   **********
 */

const markedText = function (givenString) {
  const arrayStringWords = givenString.split(" ");
  const longestWord = arrayStringWords.reduce((maxLength, word) => {
    if (word.length > maxLength) {
      return word.length;
    }
    return maxLength;
  }, 0);

  console.log("*".repeat(longestWord + 4));
  arrayStringWords.forEach((element) => {
    console.log(`* ${element}`.padEnd(longestWord + 3, " ") + "*");
  });
  console.log("*".repeat(longestWord + 4));
};

markedText("¿Qué te parece el reto?");
console.log("");
markedText("¿Por qué te casaste adonay?");
console.log("");
markedText("Parangaricutirimicuaro esta es una prueba");
