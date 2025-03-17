function findAge(obj) {
    return (obj.yearOfDeath || new Date().getFullYear()) - obj.yearOfBirth;
}

const findTheOldest = function (people) {
    return people.reduce((oldest, curr) => {
        return findAge(oldest) < findAge(curr) ? curr : oldest;
    });
};

// Do not edit below this line
module.exports = findTheOldest;
