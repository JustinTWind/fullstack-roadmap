function deleteEvenWords(givenString) {
  const wordsArray = givenString.split(" ");
  console.log(wordsArray);

  const oddLengthWords = wordsArray.filter((element) => {
    return element.length % 2 !== 0;
  });

  return oddLengthWords.join(" ");
}

console.log(deleteEvenWords("Hola Mundo Cómo Están"));
