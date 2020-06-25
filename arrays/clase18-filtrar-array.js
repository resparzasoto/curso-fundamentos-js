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

var people = [ruben, alberto, jorge, dagoberto];

// With anonymous function
// var heighestPeople = people.filter(function ({ height }) {
//     return height > 1.80;
// });

var heighestPeople = people.filter(isTall);

console.log(heighestPeople);