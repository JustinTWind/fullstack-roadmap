// create a function that given an string as a parameter returns how many vowels the string had.


function howManyVowels(words) {
  if (!words || words == null) {
    console.log("Escribe Algo");
    return "";
  }

  const string = [...words]
  const vowels = { "a": 0, "e": 0, "i": 0, "o": 0, "u": 0 }
  string.forEach((character) => {
    for (let [key] of Object.entries(vowels)) {
      if (character == key) vowels[key]++
    }
  })
  return vowels
}

console.log(howManyVowels("Hola Mundo"))