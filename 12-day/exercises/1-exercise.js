/*

  Create a function countObjectProperties that receives an object as a parameter.
  The function should return the number of enumerable own properties that the object possesses.

*/

function countObjectProperties(Userobject) {
  return Object.keys(Userobject).length
}

let person = {
  name: "Jhon",
  age: 33
}

console.log(countObjectProperties(person))