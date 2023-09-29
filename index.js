// Code your solution here
function findMatching(drivers, name) {
  return drivers.filter(
    (driver) => driver.toLowerCase() === name.toLowerCase()
  );
}

function fuzzyMatch(drivers, letters) {
    return drivers.filter(driver => driver.startsWith(letters));
}

function  matchName(drivers,name){
    const People = drivers.filter(person => person.name === name);
    return People
}