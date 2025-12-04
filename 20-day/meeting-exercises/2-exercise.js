/*

  Función que recibe número del 1 al 10

  Array con la cantidad de items según el número que nos pasaron
  Con valores del 0 al 100 de manera aleatoria

*/

function ArrayGeneratedRandom(givenNumber) {
  if (givenNumber < 1 || givenNumber > 10) return "The number must be between 1 and 10"

  const randomNumbersArray = []

  for (let index = 0; index < givenNumber; index++) {
    randomNumbersArray.push(Math.floor(Math.random() * 101));
  }
  
  return randomNumbersArray
}

console.log(ArrayGeneratedRandom(4))

