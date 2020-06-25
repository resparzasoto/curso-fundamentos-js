var ruben = {
    name: 'Rubén',
    lastName: 'Esparza',
    height: 1.72
};

var alberto = {
    name: 'Alberto',
    lastName: 'Higuera',
    height: 1.83
};

var jorge = {
    name: 'Jorge',
    lastName: 'Cruz',
    height: 1.65
};

var dagoberto = {
    name: 'Dagoberto',
    lastName: 'Luque',
    height: 1.81
};

const isTall = ({ height }) => height >= 1.80;

// const convertHeightToCms = person => {
//     return {
//         ...person,
//         height: person.height * 100
//     };
// };
const convertHeightToCms = person => ({
    ...person,
    height: person.height * 100
});

var people = [ruben, alberto, jorge, dagoberto];

var heighestPeople = people.filter(isTall);

var cmsPeople = people.map(convertHeightToCms);

console.log('people');
console.log(people);
console.log('cmsPeople');
console.log(cmsPeople);