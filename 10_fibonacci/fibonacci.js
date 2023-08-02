const fibonacci = function(member) 
{
  if (member<0) return 'OOPS';
  
  let prev = 1;
  let prevprev = 0;

  for (let i = 2; i <= member; i++)
  {
    let current = prev + prevprev;
    prevprev = prev;
    prev = current;
  }
  return prev;
};

// Do not edit below this line
module.exports = fibonacci;
