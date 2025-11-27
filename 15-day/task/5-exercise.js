/*

  5. Rotate String 'w3resource' Periodically

    Write a JavaScript program to rotate the string 'w3resource' in the right direction.
    This is done by periodically removing one letter from the string end and attaching it to the front.  

*/

const rotatingString = "w3resource";

const rotatingStringArray = rotatingString.split("");

for (let i = rotatingString.length - 1; i >= 0; i--) {
  rotatingStringArray.unshift(rotatingString[i]);
  rotatingStringArray.pop();
  console.log(rotatingStringArray.join(""));
}
