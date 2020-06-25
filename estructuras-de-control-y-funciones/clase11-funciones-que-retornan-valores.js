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

function isMajorOfAge(person) {
    return person.age >= MAJOR_OF_AGE;
}

function printIfPersonIsMajorOfAge(person) {
    if (isMajorOfAge(person)) {
        console.log(`${person.name} is major of age!`);
    }
    else {
        console.log(`${person.name} is minor of age!`);
    }
}

printIfPersonIsMajorOfAge(sacha);
printIfPersonIsMajorOfAge(juan);