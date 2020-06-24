var sacha = {
    name: 'Sacha',
    lastName: 'Lifszyc',
    age: 28
};

function printIfIsMajorOfAge(person) {
    if (person.age >= 18) {
        console.log(`${person.name} is major of age!`);
    }
}

printIfIsMajorOfAge(sacha);