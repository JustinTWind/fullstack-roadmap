/*

  149. Change Capitalization of All Letters

    Write a JavaScript program to change the capitalization of all letters in a given string.  

*/

function swapCapitalization(givenString) {
  const stringArray = givenString.split("");

  stringArray.forEach((element, index) => {
    if (element === element.toLowerCase()) {
      stringArray[index] = element.toUpperCase();
    }

    if (element === element.toUpperCase()) {
      stringArray[index] = element.toLowerCase();
    }
  });

  return stringArray.join("");
}

console.log(swapCapitalization("w3resource"));
console.log(swapCapitalization("Germany"));
console.log(swapCapitalization("HoLa MuNdO"));
