/*

un ratón se reproduce una vez al mes
Cada vez que se reproduce, produce 12
Un ratón solo se puede reproducir cada 2 meses
En Una tienda se compró un ratón recién nacido

En 10 meses cuantos ratones hay

*/

function calculateMouses(mounths, initialMouses) {
  if (mounths <= 0 || initialMouses <= 0) {
    return "Dafaq is wrong with you";
  }

  let totalMouses = initialMouses;
  const totalMousesArray = [];
  let totalMousesIndex = 0;

  for (let index = 2; index <= mounths; index++) {
    if (index === 2 || index === 3) {
      totalMouses += initialMouses * 12;
      totalMousesArray.push(totalMouses);
      continue;
    }

    totalMouses += totalMousesArray[totalMousesIndex] * 12;

    if (totalMousesIndex < mounths - 3) {
      totalMousesArray.push(totalMouses);
    }

    totalMousesIndex++;
  }

  return totalMouses;
}

console.log(calculateMouses(10, 2));
