const add = function(a,b) 
{
  return a + b;
};

const subtract = function(a,b) 
{
  return a - b;
};

const sum = function(array) 
{
  let summation = 0;

  if (array.every(item => typeof item === 'number'))
  {
   for (let i = 0; i < array.length; i++)
    {
      summation = summation + array[i];
    }
  }

  return summation;
};

const multiply = function(...numbers)
{
  return numbers.reduce((acc, curr) => acc * curr, 1);
};

const power = function(a,b) 
{
  return a ** b;
};

const factorial = function(num) 
{
  let factorial = 1;
	for (let i = num; i > 0; i--)
  {
    factorial *= i;
  }
  return factorial;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
