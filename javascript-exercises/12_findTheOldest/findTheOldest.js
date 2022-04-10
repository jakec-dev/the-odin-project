const findTheOldest = function(people) {
    let oldest = "";
    let maxAge = 0;
    people.forEach(person => {
        console.log("maxAge: ", maxAge);
        console.log("person: ", person);
        const yearOfDeath = person.yearOfDeath || new Date().getFullYear();
        let age = yearOfDeath - person.yearOfBirth;
        console.log("age: ", age);
        if (age > maxAge) {
            maxAge = age;
            oldest = person;
        }
        console.log("***")
    });
    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
