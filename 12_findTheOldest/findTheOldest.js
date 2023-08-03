const findTheOldest = function() 
{
  function findOldestPerson(people) {
    let oldestPerson = people[0];
    let oldestAge = calculateAge(oldestPerson);
  
    for (let i = 1; i < people.length; i++) {
      const currentPerson = people[i];
      const currentAge = calculateAge(currentPerson);
  
      if (currentAge > oldestAge) {
        oldestPerson = currentPerson;
        oldestAge = currentAge;
      }
    }
  
    return oldestPerson;
  }
  
  function calculateAge(person) {
    const currentYear = new Date().getFullYear();
    return person.yearOfDeath ? person.yearOfDeath - person.yearOfBirth : currentYear - person.yearOfBirth;
  }
};

// Do not edit below this line
module.exports = findTheOldest;
