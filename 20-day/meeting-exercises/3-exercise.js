/*

  Escribir funcion que recibe un array

*/

function  checkIfMinor(givenArray) {
  return (givenArray.find((value) => value < 18 ) < 18)
}

console.log(checkIfMinor([5,30,45]))
console.log(checkIfMinor([19,30,45]))
console.log(checkIfMinor([20, 30, 45]))

function checkIfMinorRemaster(givenArray) {
  return Math.min.apply(null, givenArray) < 18 ;
}

console.log(checkIfMinorRemaster([5, 30, 45]));
console.log(checkIfMinorRemaster([19, 30, 45]));

function checkIfMinorSome(givenArray) {
  return givenArray.some(element => element < 18)
}

console.log(checkIfMinorSome([5, 30, 45]));
console.log(checkIfMinorSome([19, 30, 45]));