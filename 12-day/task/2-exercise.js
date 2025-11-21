/**
 *  write a js function that receives an object and a string as parameters
 *  the function should remove the property that has the name of the string parameter
 *  from the object and return it.
 */

function objectRemoveProperty(object, propertyToRemove) {
  if (Object.keys(object) == "" || Array.isArray(object)) {
    console.log("Estás pasando un elemento inválido");
    return null;
  } 
  delete object[propertyToRemove] // No se puede retornar directamente lol
  return object
}

let user = {
  name: "John",
  age: 30,
  isMarried: false,
};

let user2 = {}

let user3 = {
  age: 30,
  name: "El Pepe"
}

let user4 = {
  " ": "prueba",
  name: "Laura"
}

let user5 = ["name", "namo"] 

console.log(objectRemoveProperty(user, "name"))

console.log(objectRemoveProperty(user2, "name"));

console.log(objectRemoveProperty(user3, "name"));

console.log(objectRemoveProperty(user4, "name"));

console.log(objectRemoveProperty(user5, "name"));