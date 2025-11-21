/**
 *  write a js function that receives an object and two strings as parameters
 *  the function should add a property named as the second parameter and
 *  the value of that property should be the third parameter.
 */

function propertyObjectCreation(object, addedKey, addedValue) {
  if (Object.keys(object) == "" || Array.isArray(object)) {
    console.log("Estás pasando un elemento inválido");
    return null;
  }
  return object[addedKey] = addedValue
}

let user = {
  name: "John",
  age: 30,
  isMarried: false,
};

let user2 = {};

let user3 = {
  age: 30,
  name: "El Pepe",
};

let user4 = {
  " ": "prueba",
  name: "Laura",
};

let user5 = ["name", "namo"];

console.log(propertyObjectCreation(user, "salary", 1423500));

console.log(propertyObjectCreation(user2, "salary", 1423500));

console.log(propertyObjectCreation(user3, "salary", 1423500));

console.log(propertyObjectCreation(user4, "salary", 1423500));

console.log(propertyObjectCreation(user5, "salary", 1423500));

console.log(user)