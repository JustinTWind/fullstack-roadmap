// create a function that check if a string is a palindrome

function isPalindrome(word) {
  if (!word || word == null) {
    console.log("Escribe Algo");
    return "";
  }

  let string = word.toLowerCase().trim()
  let reversedString = string.split("").reverse().join("")
  string === reversedString ? console.log("Esa Vaina es igual") : console.log("Esa vaina no es la misma mondá")
}

isPalindrome("radar")
isPalindrome("hola")