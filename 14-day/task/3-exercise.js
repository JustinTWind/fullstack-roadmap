/**
 * Write a JavaScript program to create another string by adding "Py" in front of a given string
 * If the given string begins with "Py" return the original string.
*/

function stringWithPy(userString) {
  if (typeof userString !== 'string') return "Non an available parameter";
  return userString.trim().substring(0, 2).toLowerCase() === "py" // si lo queremos sin que sea case sensitive, sino, solo se quita el tolocaleLowerCase
    ? userString
    : userString + "Py";
};

console.log(stringWithPy(undefined));
console.log(stringWithPy("Phyton"));
console.log(stringWithPy("Hola Mundo"));