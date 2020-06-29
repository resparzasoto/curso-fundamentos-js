const API_URL = 'https://swapi.dev/api/';
const PEOPLE_URL = 'people/:id';
const options = {
    crossDomain: true
};

function getPerson(id) {
    return new Promise((resolve, reject) => {
        const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`;

        $.get(url, options, (person) => {
                resolve(person);
            })
            .fail(() => {
                reject(id);
            });
    });
}

function onError(id) {
    console.log(`Sucedió un error al obtener el personaje ${id}`);
}

getPerson(1)
    .then(person => {
        console.log(`El personaje con la url ${person.url} es ${person.name}`);
        return getPerson(2);
    })
    .then(person => {
        console.log(`El personaje con la url ${person.url} es ${person.name}`);
        return getPerson(3);
    })
    .then(person => {
        console.log(`El personaje con la url ${person.url} es ${person.name}`);
        return getPerson(4);
    })
    .then(person => {
        console.log(`El personaje con la url ${person.url} es ${person.name}`);
        return getPerson(5);
    })
    .then(person => {
        console.log(`El personaje con la url ${person.url} es ${person.name}`);
        return getPerson(6);
    })
    .then(person => {
        console.log(`El personaje con la url ${person.url} es ${person.name}`);
        return getPerson(7);
    })
    .then(person => {
        console.log(`El personaje con la url ${person.url} es ${person.name}`);
    })
    .catch(onError);