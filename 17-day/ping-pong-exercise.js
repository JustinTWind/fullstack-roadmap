function whoIsServing(player1, player2, player1Score, player2Score) {
  const totalPoints = player1Score + player2Score;
  const currentInterval = totalPoints / 2;
  const isPlayer1Serving = currentInterval % 2 === 0;
  return isPlayer1Serving ? player1 : player2;
}

console.log(whoIsServing("Andrea", "Mateo", 4, 3));
