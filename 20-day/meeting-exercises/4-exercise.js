function checkAmountOlder(givenArray) {
  return givenArray.filter(value => value >= 18).length
}

console.log(checkAmountOlder([5, 30, 45]));
console.log(checkAmountOlder([20, 30, 45]));