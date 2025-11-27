/*

  11. Convert Temperatures Between Celsius and Fahrenheit

    Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.  
    [ Formula : c/5 = (f-32)/9 [ where c = temperature in Celsius and f = temperature in Fahrenheit ]
    Expected Output :
    60°C is 140 °F
    45°F is 7.222222222222222°C

*/

function turnCelsiusToFahrenheit(userTemperature) {
  const celsiusToFahrenheit = (9 * userTemperature + (32 * 5)) / 5;
  console.log(`${userTemperature}°C is ${celsiusToFahrenheit}°F`);
};

function turnFahrenheitToCelsius(userTemperature) {
  const FahrenheitToCelsius = (5 * (userTemperature - 32)) / 9;
  console.log(`${userTemperature}°F is ${FahrenheitToCelsius}°C`);
};

turnCelsiusToFahrenheit(60)
turnFahrenheitToCelsius(45)