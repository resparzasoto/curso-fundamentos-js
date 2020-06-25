var ruben = {
    name: 'Rubén',
    lastName: 'Esparza',
    height: 1.72,
    books: 21
};

var alberto = {
    name: 'Alberto',
    lastName: 'Higuera',
    height: 1.83,
    books: 48
};

var jorge = {
    name: 'Jorge',
    lastName: 'Cruz',
    height: 1.65,
    books: 12
};

var dagoberto = {
    name: 'Dagoberto',
    lastName: 'Luque',
    books: 31
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

// var count = 0;

// for(var i = 0; i < people.length; i++) {
//     count += people[i].books;
// }

const reducer = (count, {books} ) => count + books;

var sumOfBooks = people.reduce(reducer, 0);

console.log(`El total de todos los libros es ${sumOfBooks}`);