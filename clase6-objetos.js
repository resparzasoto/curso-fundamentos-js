var ruben = {
    name: 'Rubén',
    lastName: 'Esparza',
    age: 25
};

var dario = {
    name: 'Darío',
    last: 'Susnisky',
    age: 27
};

function printNameInUpperCase(person) {
    console.log(person.name.toUpperCase());
}

// Unicamente se toma en cuenta la propiedad que nos interesa
// function printNameInUpperCase({ name }) {
//     console.log(name.toUpperCase());
// }

printNameInUpperCase(ruben);
printNameInUpperCase(dario);
printNameInUpperCase({ name: 'Pepito' });
printNameInUpperCase({ lastName: 'Gomez' });
printNameInUpperCase();