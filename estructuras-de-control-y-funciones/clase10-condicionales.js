var sacha = {
    name: 'Sacha',
    lastName: 'Lifszyc',
    age: 28,
    engineer: false,
    chef: false,
    singer: false,
    dj: false,
    guitarist: false,
    droneFlyer: true
};

function printProfessions(person) {
    console.log(`${person.name} es:`);

    if (person.engineer) {
        console.log('Is Engineer');
    }
    else {
        console.log('Not is Engineer');
    }

    if (person.chef) {
        console.log('Is Chef');
    }

    if (person.singer) {
        console.log('Is Singer');
    }

    if (person.dj) {
        console.log('Is Dj');
    }

    if (person.guitarist) {
        console.log('Is Guitarist');
    }

    if (person.droneFlyer) {
        console.log('Is Droneflyer');
    }
}

printProfessions(sacha);