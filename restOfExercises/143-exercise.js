/*

  143. Sort Strings by Increasing Length

    Write a JavaScript program to sort the strings of a given array of strings in order of increasing length.  
    Note: Do not change the order if the lengths of two string are same. (Estoy cansado jefe, cansado de tanto pelear...)

*/

function sortByLength(givenArray) {
  const arrayByLength = givenArray.map((element, index) => {
    return [element.length, index]
  }).sort();

  const organizedArray = []

  for (let index = 0; index < givenArray.length; index++) {
    organizedArray.push(
      givenArray[arrayByLength[index][1]]
    )
  }

  return organizedArray
}

console.log(sortByLength(["xyz", "acd", "aa", "bb", "zzz", "", "a", "b"]));