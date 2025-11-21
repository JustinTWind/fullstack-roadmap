/**
 * create a function that receives an string
 * if the string has more than 30 characters
 * the function should return a truncated string with elipsis
 * that only contains 30 valid characters
 */

function truncateString(words) {
  if (!words || words == null) {
    console.log("Escribe Algo")
    return ""
  }

  let string = [...words];

  if (string.length > 30) {
    string = string.slice(0, 31);
  } else return words

  string.push("...")
  return string.join("")
}

console.log(truncateString(
  "asdsad asdsad  sdadasdddddddddddddddddddddddasd"
));

console.log(truncateString())