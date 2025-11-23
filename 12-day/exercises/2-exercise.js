/*

  Create a function getUserSummary that takes a user object as a parameter. 
  This object will have firstName, lastName, and age properties.
  Use object destructuring to extract these properties.
  If age is not provided, it should default to 25. 
  The function should return a string in the format: "User: [First Name] [Last Name], Age: [Age]".

*/

function getUserSummary({ firstName = "noName", lastName = "noLastName", age = null }) {
  console.log(`User: ${firstName} ${lastName}, Age: ${age}`)
}

let person = {
  firstName: "Laura",
  lastName: "Acevedo",
  age: 20
}

let person2 = {}

getUserSummary(person)
getUserSummary(person2);
