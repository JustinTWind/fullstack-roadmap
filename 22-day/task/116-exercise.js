/*

  116. Replace Hash in String to Make Divisible by 3

  Write a JavaScript program to find all the possible options to replace the hash
  in a string (Consists of digits and one hash (#)) with a digit to produce an integer divisible by 3. 
  For a string "2*0", the output should be : ["210", "240", "270"]

*/

function replaceHash(givenString) {
  const optionsArray = [];

  for (let index = 0; index <= 9; index++) {
    const replacedString = givenString.replace("#", index);

    if (replacedString % 3 === 0) {
      optionsArray.push(replacedString);
    }
  }

  return optionsArray;
}

console.log(replaceHash("2#0"));
console.log(replaceHash("4#2"));
