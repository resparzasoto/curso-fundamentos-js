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

function printNameInUpperCase(person) {
    var { name } = person;
    console.log(name.toUpperCase());
}

printNameInUpperCase(ruben);
printNameInUpperCase(dario);

// function birthDay(person) {
//     person.age += 1;
//     console.log(person.age);
// }

function birthDay(person) {
    return {
        ...person,
        age: person.age + 1
    };
}

var rubenWithAgeMoreOne = birthDay(ruben);

console.log('ruben');
console.log(ruben);
console.log('rubenWithAgeMoreOne');
console.log(rubenWithAgeMoreOne);