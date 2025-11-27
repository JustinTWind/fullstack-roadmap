/*

  22. Remove Character at Specified Position in String

    Write a JavaScript program to remove a character at the specified position in a given string and return the modified string.  

*/

function removeCharAtIndex(userString, userPosition) {
  return (
    userString.slice(0, userPosition) +
    userString.slice(userPosition + 1, userString.length)
  );
}

console.log(removeCharAtIndex("Hello World", 0));