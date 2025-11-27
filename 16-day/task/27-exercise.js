/*

  27. Check if String Starts with 'Java'

    Write a JavaScript program to check whether a string starts with 'Java' if it does not otherwise.  

*/

function startsWithJava(givenString) {
  return givenString.trim().substring(0, 4).toLowerCase() === "java";
}

console.log(startsWithJava("hola mundo"));
console.log(startsWithJava("java mundo"));
console.log(startsWithJava(" javac mundo"));
