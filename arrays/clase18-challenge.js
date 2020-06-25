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

var pepito = {
    name: 'Pepito',
    lastName: 'López',
    height: 1.58
};

const isTall = ({ height }) => height >= 1.80;
const isShort = ({ height }) => height <= 1.60;

var people = [ruben, alberto, jorge, dagoberto, pepito];

var heighestPeople = people.filter(isTall);
var shortestPeople = people.filter(isShort);

console.log('Personas altas');
console.log(heighestPeople);

console.log('Personas bajas');
console.log(shortestPeople);