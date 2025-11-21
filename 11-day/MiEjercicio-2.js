// Write a JavaScript function that accepts a string as an argument and collapses repeated spaces into a single space


function noExtraSpaces(sentence) {

 //return sentence.trim().replace(/\s+/g, " "); // Regex De multiples espacios a solo uno a nivel global

  return sentence.trim().replaceAll("   ", " ").replaceAll("  ", " ");
  
}

console.log(noExtraSpaces("     sadsad    asdsa as                   sad asd asd dd"));