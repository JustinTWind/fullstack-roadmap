function whoIsServing(player1, player2, player1Score, player2Score) {
  if (player1Score >= 11 || player2Score >= 11)
    return "One Player has already won";

  if (typeof player1Score !== "number" || typeof player2Score !== "number")
    return "Invalid scores";
  
  if (typeof player1 !== "string" || typeof player2 !== "string")
    return "Invalid players names";

  const totalPoints = player1Score + player2Score;
  const currentInterval = Math.floor(totalPoints / 2);
  const isPlayer1Serving = currentInterval % 2 === 0;
  return isPlayer1Serving ? player1 : player2;
}

console.log(whoIsServing("Andrea", "Mateo", 4, 3));
console.log(whoIsServing("Sebastian", "Jose", 7, 2))
console.log(whoIsServing("Sebastian", "Jose", 7, 7))
console.log(whoIsServing("Sebastian", "Jose", 0, 0));
console.log(whoIsServing("Sebastian", "Jose", 1, 0));
console.log(whoIsServing("Sebastian", "Jose", 1, 1));
console.log(whoIsServing("Sebastian", "Jose", 2, 1));
console.log(whoIsServing("Sebastian", "Jose", 3, 1));
console.log(whoIsServing("Sebastian", "Jose", 4, 1));
console.log(whoIsServing("Sebastian", "Jose", 4, 2));
console.log(whoIsServing("Sebastian", "Jose", 4, 3));
console.log(whoIsServing("Sebastian", "Jose", 4, 4));
console.log(whoIsServing("Sebastian", "Jose", 10, 9));
console.log(whoIsServing("Sebastian", "Jose", 5, 2));
console.log(whoIsServing("Sebastian", "Jose", 7, 7));
console.log(whoIsServing("Sebastian", "Jose", 7, 7));
console.log(whoIsServing("Sebastian", "Jose", 7, 7));
console.log(whoIsServing("Sebastian", "Jose", 7, 7));

