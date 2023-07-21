const removeFromArray = function(array, ...elementsToRemove) 
{
  /*let index = array.indexOf(element);
  if (index !== -1)
  {
    array.splice(index, 1);
  }
  return array;*/

  const filteredArray = array.filter(item => !elementsToRemove.includes(item));

  return filteredArray;

};

// Do not edit below this line
module.exports = removeFromArray;
