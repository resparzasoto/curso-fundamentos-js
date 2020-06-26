const API_URL = 'https://swapi.dev/api/';
const PEOPLE_URL = 'people/:id';
const options = { crossDomain: true };

const onPeopleResponse = function (person) {
    // Nos devuelve todos los argumentos de la funcion
    // console.log(arguments);

    console.log(`Hola yo soy, ${person.name}`);
}

function getPerson(id) {
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`;
    $.get(url, options, onPeopleResponse);
    console.log('Yo no voy a esperar la respuesta!');
}

for (let i = 1; i <= 100; i++) {
    getPerson(i);
}