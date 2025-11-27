/*

  14. Get File Extension of Filename

    Write a JavaScript exercise to get the filename extension.  

*/

function getFilenameExtension(givenFilename) {
 return givenFilename.split(".").pop()
}

console.log(getFilenameExtension("java.php"))
console.log(getFilenameExtension("index.html"));