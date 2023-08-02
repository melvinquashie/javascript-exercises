const palindromes = function (string) 
{
  let str = string.toLowerCase().replace(/[^a-z0-9]/g, "");
  // for the replace method used, the ^ means non. thus non alphanumeric characters
  let reverse = str.split('').reverse().join('');
  if (reverse == str)
  {
    return true;
  }
  else
  return false;
};

// Do not edit below this line
module.exports = palindromes;
