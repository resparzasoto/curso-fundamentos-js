const ruben = {
    name: 'Rubén',
    lastName: 'Esparza',
    age: 25
};

const birthDay = person => person.age++;

const immutableBirthDay = person => {
    return {
        ...person,
        edad: person.age + 1
    };
}

const immutableBirthDay = person => ({
    ...person,
    edad: person.age + 1
});

console.log('---Birthday call---');
birthDay(ruben);
console.log(ruben);

console.log('---Birthday call---');
birthDay(ruben);
console.log(ruben);

console.log('---Birthday call---');
birthDay(ruben);
console.log(ruben);

console.log('---Immutable call---');
immutableBirthDay(ruben);
console.log(ruben);

console.log('---Immutable call---');
immutableBirthDay(ruben);
console.log(ruben);

console.log('---Immutable call---');
immutableBirthDay(ruben);
console.log(ruben);