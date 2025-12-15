/*

  142. Simplify Unix-Style Absolute File Path

    Write a JavaScript program to simplify a given absolute path for a file in Unix-style.  

*/

function simplifyFilePath(givenPath) {
  givenPath = givenPath.replace(/\./g, "");
  givenPath = givenPath.replace(/w/g, "");
  return givenPath.replace(/\/+/g, "/");
}

console.log(simplifyFilePath("/home/var/./www/../html//sql/"));
