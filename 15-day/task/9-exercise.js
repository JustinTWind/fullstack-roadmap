/*

  9. Days Left Before Christmas

    Write a JavaScript program to calculate the days left before Christmas.  

*/

const currentDay = new Date()
const christmas = new Date()

christmas.setDate(25);
christmas.setMonth(11);

const christmasMiliseconds = christmas.getTime()
const currentDayMiliseconds = currentDay.getTime()

if (currentDay.getMonth() === 11 && currentDay.getDate() > 25) {
  christmas.setFullYear(christmas.getFullYear() + 1);
}  

let daysLeft = Math.round((christmasMiliseconds - currentDayMiliseconds) * 1.1574074074e-8);

console.log(daysLeft + " Days before Chrismas")