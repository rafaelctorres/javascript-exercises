const convertToCelsius = function(farenheitTemperature) {
  let convertedToCelsius = (farenheitTemperature - 32) * 5/9;
  let roundedValue = Math.ceil(convertedToCelsius*10)/10
  return roundedValue;
};

const convertToFahrenheit = function(celsiusTemperature) {
  let convertedToFahrenheit = (celsiusTemperature * 9/5) + 32 ;
  let roundedFahrenheitResult = Math.ceil(convertedToFahrenheit*10)/10
  return roundedFahrenheitResult;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
