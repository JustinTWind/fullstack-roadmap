/*

  99. Check if String Can Rearrange to Match Another

    Write a JavaScript program to check whether it is possible to rearrange the characters of a given string.
    This is in such a way that it will become equal to another given string.

*/

function checkRearrangeOfStrings(originalString, rearrangedString) {
  return (
    originalString.split("").sort().join("") ===
    rearrangedString.split("").sort().join("")
  );
}

console.log(checkRearrangeOfStrings("xyz", "zyx"));
console.log(checkRearrangeOfStrings("xyz", "zyp"));
