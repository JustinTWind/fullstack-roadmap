/*

  50. Capitalize First Letter of Each Word in String

    Write a JavaScript program to capitalize the first letter of each word in a given string.   

*/

function capitalizeEachWord(givenString) {
  const stringArray = givenString.trim().split(" ");
  const capitalizedArray = [];

  stringArray.forEach((word) => {
    capitalizedArray.push(word.charAt(0).toUpperCase() + word.slice(1));
  });

  return capitalizedArray.join(" ");
}

console.log(capitalizeEachWord("hola mundo como estan"));
