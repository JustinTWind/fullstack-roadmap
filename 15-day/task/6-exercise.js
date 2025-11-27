/*

  6. Check Leap Year (Gregorian Calendar)

    Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar. 

*/

function itIsLeapYear(GivenYear) {
  if (GivenYear % 4 === 0 && GivenYear % 100 !== 0) {
    return true
  } else if (GivenYear % 400 === 0) {
    return true
  } return false
}

// Cual de los códigos es "mejor" o cual prefieres

function itIsLeapYearCondensed(GivenYear) {
  return (GivenYear % 4 === 0 && GivenYear % 100 !== 0) || GivenYear % 400 === 0;
}

/*

Versión otorgada por la página

  return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);

*/

console.log(itIsLeapYear(16))
console.log(itIsLeapYearCondensed(1900));
console.log(itIsLeapYearCondensed(2002));
