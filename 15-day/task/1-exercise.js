/*

  1. Display Current Day and Time

    Write a JavaScript program to display the current day and time in the following format.  
    Sample Output : Today is : Tuesday.
    Current time is : 10 PM : 30 : 38

*/

const today = new Date();

const todayHour = today.getHours();

const todayMinute = today.getMinutes();

const todaySecond = today.getSeconds();

const meridiem = todayHour > 12 ? "PM" : "AM";

const daysOfTheWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

const currentDate = daysOfTheWeek[today.getDay()];

console.log(`Today is : ${currentDate}.`);
console.log(
  `Current time is : ${todayHour} ${meridiem} : ${todayMinute} : ${todaySecond}`
);
