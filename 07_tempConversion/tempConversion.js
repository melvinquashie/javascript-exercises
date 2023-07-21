const convertToCelsius = function(temp) 
{
  let cel = (temp - 32) * (5/9);
  let output = Math.round(cel*10)/10;
  return output;
};

const convertToFahrenheit = function(temp) 
{
  let fah = ((temp*9)/5) + 32;
  let output = Math.round(fah*10)/10;
  return output;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
