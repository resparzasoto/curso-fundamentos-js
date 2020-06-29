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

function onSuccess(person) {
    console.log(`El personaje con la url ${person.url} es ${person.name}`);
}

function onError(id) {
    console.log(`Sucedió un error al obtener el personaje ${id}`);
}

getPerson(1)
    .then(onSuccess)
    .catch(onError);