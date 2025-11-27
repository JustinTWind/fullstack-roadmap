/*

  10. Multiplication and Division (User Input)

    Write a JavaScript program to calculate multiplication and division of two numbers (input from the user).  

*/

const inputFirstNumberElement = document.querySelector("#first-number")
const inputSecondNumberElement = document.querySelector("#second-number");
const resultElement = document.querySelector("#result")

function multiplyBy() {
  let result = inputSecondNumberElement.value * inputFirstNumberElement.value;
  resultElement.innerText = result
};

function divideBy() {
  let result = inputSecondNumberElement.value / inputFirstNumberElement.value
  resultElement.innerText = result;
}