var ruben = {
    name: 'Rubén',
    lastName: 'Esparza',
    age: 25
};

var dario = {
    name: 'Darío',
    lastName: 'Susnisky',
    edad: 27
};

function printNameInUpperCase(person) {
    // var name = person.name;
    var { name } = person;
    console.log(name.toUpperCase());
}

printNameInUpperCase(ruben);
printNameInUpperCase(dario);