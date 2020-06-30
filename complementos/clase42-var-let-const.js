var ruben = {
    name: 'Rubén',
    lastName: 'Esparza',
    age: 25
};

const MAJOR_OF_AGE = 18;

function isMajorOfAge(person) {
    if (person.edad >= MAJOR_OF_AGE) {
        var message = 'Es mayor de edad';
    } else {
        var message = 'Es menor de edad';
    }
    console.log(message);
}

function isMajorOfAge(person) {
    let message;

    if (person.edad >= MAJOR_OF_AGE) {
        message = 'Es mayor de edad';
    } else {
        message = 'Es menor de edad';
    }

    console.log(message);
}

isMajorOfAge(ruben);