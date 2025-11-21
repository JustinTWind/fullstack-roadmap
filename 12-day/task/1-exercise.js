// write a js function that returns all the properties names of an Object

function returnObjectKeys(object) {
  if (Object.keys(object) == "" || Array.isArray(object)) {
    // utilizo el Loose equality porque si no lo uso con el string vacío, y el usuario pasa un objeto que la primera propiedad tiene un
    // nombre con un """ , el resto de propiedades no se mostrarían
    console.log("Estás pasando un elemento inválido")
    return null;
  } 
  return Object.keys(object);
}

let user = {
  name: "John",
  age: 30,
  isMarried: false
};

let user2 = {
  "": "prueba",
  a: 10,
  b: 20
}

let user3 = {}

let user4 = []

let user5 = [1,2,3]

console.log(returnObjectKeys(user));

console.log(returnObjectKeys(user2))

console.log(returnObjectKeys(user3))

console.log(returnObjectKeys(user4))

console.log(returnObjectKeys(user5));