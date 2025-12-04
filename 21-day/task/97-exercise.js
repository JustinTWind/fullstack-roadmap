/*

  97. Shortest String to Convert into Palindrome

    Write a JavaScript program to find the shortest possible string.
    This can be converted into a string and converted into a palindrome by adding characters to the end of it. 

*/

function makeStringPalindrome(givenString) {
  if (
    givenString.toLowerCase().trim() ===
    givenString.toLowerCase().trim().split("").reverse().join("")
  )
    return givenString;
  return givenString.trim() + givenString.split("").reverse().slice(1).join("");
}

console.log(makeStringPalindrome("asd"));
console.log(makeStringPalindrome("abcddc"));
console.log(makeStringPalindrome("122"));
console.log(makeStringPalindrome("ana"));
