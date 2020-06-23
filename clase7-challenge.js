var ruben = {
    name: 'Rubén',
    lastName: 'Esparza',
    age: 25
};

var dario = {
    name: 'Darío',
    lastName: 'Susnisky',
    age: 27
};

function printNameInUpperCase({ name, age }) {
    console.log(`Hola, me llamo ${name} y tengo ${age} años`);
}

printNameInUpperCase(ruben);
printNameInUpperCase(dario);