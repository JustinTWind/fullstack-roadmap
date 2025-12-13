/*

  144. Break URL into Parts

    Write a JavaScript program to break an URL address and put its parts into an array.  
    Note: url structure : ://.org[/] and there may be no part in the address.

*/

function breakUrl(givenUrl) {

  const protocol = givenUrl.split("://")[0]
  const domain = givenUrl.split(/\/|.com/)[2]
  const page = givenUrl.split("/")[3]
  
  return [protocol, domain, page]

}

console.log(breakUrl("https://www.w3resource.com/javascript-exercises/"));