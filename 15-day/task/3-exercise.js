/*

  3. Get Current Date in Various Formats

    Write a JavaScript program to get the current date.  
    Expected Output :
    mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy

*/

const today = new Date();

const currentDay = today.getDate() < 10 ? "0" + today.getDate() : today.getDate() ;

const currentMonth = today.getMonth() < 10 ? "0" + today.getMonth() + 1 : today.getMonth() + 1;

const currentYear = today.getFullYear();

console.log(currentMonth + "-" + currentDay + "-" + currentYear); // mm-dd-yyyy
console.log(currentDay + "/" + currentMonth +"/" + currentYear); //dd/mm/yyyy