/*

  21. Add 'Py' to Start of String if Not Present

    Write a JavaScript program to create another string by adding "Py" in front of a given string.
    If the given string begins with "Py" return the original string.  

*/

function stringWithPy(userString) {
  return userString.trim().substring(0, 2).toLowerCase() === "py"
    ? userString
    : "Py" + userString;
}

console.log(stringWithPy("Tin"));
console.log(stringWithPy("Pyton"));
console.log(stringWithPy("TonPy"));
