/**
 * create a function that Capitalizes the first letter of each word in a given string.
 */


function capitalizeEachWord(sentence) {
  const words = sentence.split(" ");
  const capitalizedWords = words.map(word => {
    if (word.length === 0) {
      return "";
    }
    return word[0].toUpperCase() + word.slice(1);
  });
  return capitalizedWords.join(" ");
}

console.log(capitalizeEachWord("detsakjdkjsadkjsad asdsad asdasd asdsad sadsa"));