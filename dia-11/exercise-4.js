/**
 * create a function that receives an string
 * if the string has more than 30 characters
 * the function should return a truncated string with elipsis
 * that only contains 30 valid characters
 */

function truncateString(words) {
  let string = [...words];
  if (string.length > 30) {
    string = string.slice(0, 31);
  }
  string.push("...")
  return string.join("")
}

console.log(truncateString(
  "Lorem Ipsum Soled it amed mi mondaesasasadasdsadsadsadsadsadsadsadsdsadsadsadassadsadsaddasdsadsadasdad"
));