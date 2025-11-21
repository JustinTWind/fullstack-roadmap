// Write a function that accepts a string and returns the count of words, using a single space (" ") as the delimiter.

function howManyWords(sentence) {
  if (!sentence || sentence == null) {
    console.log("Escribe Algo");
    return "";
  }

  const normalizedSentence = sentence.trim().replace(/\s+/g, " "); // Regex De multiples espacios a solo uno a nivel global

  if (!normalizedSentence) {
    return 0
  }

  const words = normalizedSentence.split(" ");

  return words.length;
}

console.log(howManyWords("sadsad asdsa as sad asd asd dd"));