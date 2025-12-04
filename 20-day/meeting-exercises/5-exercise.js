function checkAmountOlder(givenArray) {
  const olderPeople = givenArray.filter((value) => value >= 18);
  const total = olderPeople.reduce((total, value) => {
    return total + value
  })
  return Math.floor(total / olderPeople.length)
}

console.log(checkAmountOlder([5, 30, 45]));
console.log(checkAmountOlder([20, 30, 45]));
