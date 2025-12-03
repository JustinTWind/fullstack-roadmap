/*

  66. Return City Name if Starts with 'Los' or 'New'

    Write a JavaScript program to display the city name
    if the string begins with "Los" or "New" otherwise return blank.  

*/

function filterCityByPrefix(givenString) {
  return givenString.trim().toLowerCase().startsWith("los") ||
    givenString.trim().toLowerCase().startsWith("new")
    ? givenString
    : "";
}

console.log(filterCityByPrefix("New York"))
console.log(filterCityByPrefix("Los Angeles"))
console.log(filterCityByPrefix("London"))
