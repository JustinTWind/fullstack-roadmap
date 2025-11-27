/*

  7. Find Years When Jan 1 is Sunday (2014?2050)

    Write a JavaScript program to find out if 1st January will be a Sunday between 2014 and 2050.  

*/

const dateToCheckSunday = new Date()

dateToCheckSunday.setMonth(0)
dateToCheckSunday.setDate(1)

for (let year = 2014; year <= 2050 ; year++) {
  dateToCheckSunday.setFullYear(year)
  if (dateToCheckSunday.getDay() === 0) console.log(year)
}

