const MAJOR_OF_AGE = 18;

var sacha = {
    name: 'Sacha',
    lastName: 'Lifszyc',
    age: 28
};

var juan = {
    name: 'Juan',
    lastName: 'Gomez',
    age: 15
};

// Anonymous function
// const isMajorOfAge = function (person) {
//     return person.age >= MAJOR_OF_AGE;
// }

// Arrow function
// const isMajorOfAge = (person) => {
//     return person.age >= MAJOR_OF_AGE;
// }

// Arrow function in line
// const isMajorOfAge = person => person.age >= MAJOR_OF_AGE;

// Arrow function in line with destructured object
const isMajorOfAge = ({ age }) => age >= MAJOR_OF_AGE;

const isMinorOfAge = ({ age }) => age < MAJOR_OF_AGE;

function printIfPersonIsMajorOfAge(person) {
    if (isMajorOfAge(person)) {
        console.log(`${person.name} is major of age!`);
    }
    else if (isMinorOfAge(person))
    {
        console.log(`${person.name} is minor of age!`);
    }
}

function allowAccess(person) {
    if (isMajorOfAge(person)) {
        console.log('Allow access');
    }
    else if (isMinorOfAge(person)) {
        console.log('Access denied');
    }
}

printIfPersonIsMajorOfAge(sacha);
allowAccess(sacha);

printIfPersonIsMajorOfAge(juan);
allowAccess(juan);