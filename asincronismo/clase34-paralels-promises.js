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

var ids = [1, 2, 3, 4, 5, 6, 7];
var promises = ids.map(id => getPerson(id));

Promise
    .all(promises)
    .then(people => console.table(people))
    .catch(onError);