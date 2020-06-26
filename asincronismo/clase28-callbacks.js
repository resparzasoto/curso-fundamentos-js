const API_URL = 'https://swapi.dev/api/';
const PEOPLE_URL = 'people/:id';

const lukeUrl = `${API_URL}${PEOPLE_URL.replace(':id', 1)}`;

const onPeopleResponse = function (person) {
    // Nos devuelve todos los argumentos de la funcion
    // console.log(arguments);

    console.log(`Hola yo soy, ${person.name}`);
}

$.get(lukeUrl, { crossDomain: true }, onPeopleResponse);