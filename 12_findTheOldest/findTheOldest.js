const findTheOldest = function(people) {
  
    let oldest = people.reduce(function (sum,current){
      let ageCurrent;
      let ageOldest;
      
      ageCurrent = "yearOfDeath" in current ? current.yearOfDeath - current.yearOfBirth : 2024 - current.yearOfBirth;
      ageOldest = "yearOfDeath" in sum ? sum.yearOfDeath - sum.yearOfBirth : 2024 - sum.yearOfBirth;
      
      if (ageCurrent>ageOldest){
        return current;
      } else { 
        return sum;
      }
    }, {yearOfBirth: 0, yearOfDeath: 0})
    return oldest;
    };
    
    
    const peopleTest = [
          {
            name: "Carly",
            yearOfBirth: 1942,
            yearOfDeath: 1970,
          },
          {
            name: "Ray",
            yearOfBirth: 1962,
            yearOfDeath: 2011,
          },
          {
            name: "Jane",
            yearOfBirth: 1912,
            yearOfDeath: 1941,
          },
        ]
    
    console.log(findTheOldest(peopleTest));
    
    // Do not edit below this line
    module.exports = findTheOldest;