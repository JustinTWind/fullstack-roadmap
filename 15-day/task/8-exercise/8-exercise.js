/*

  8. Random Integer Guess Game

    Write a JavaScript program where the program takes a random integer between 1 and 10,
    and the user is then prompted to input a guess number. The program displays a message "Good Work"
    if the input matches the guess number otherwise "Not matched".  

*/

function matchRandomNumber() {
  const userNumber = parseInt(prompt("Type a number between 1 and 10"));

  const randomNumber = Math.floor(Math.random() * (10)) + 1;

  alert("Random Number Generated: " + randomNumber);

  userNumber === randomNumber ? alert("Good Work") : alert("Not matched");
}


setInterval(matchRandomNumber, 1000) // callback Cuando un parametro es una función