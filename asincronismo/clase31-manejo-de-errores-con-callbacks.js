const API_URL = 'https://swapi.dev/api/';
const PEOPLE_URL = 'people/:id';
const options = {
    crossDomain: true
};

function getPerson(id, callback) {
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`;

    $.get(url, options, callback).fail(function () {
        console.log(`Sucedió un error, no se pudo obtener el personaje ${id}`);
    });
}

getPerson(1, function (person) {
    console.log(`Hola yo soy, ${person.name}`);

    getPerson(2, function (person) {
        console.log(`Hola yo soy, ${person.name}`);

        getPerson(3, function (person) {
            console.log(`Hola yo soy, ${person.name}`);

            getPerson(4, function (person) {
                console.log(`Hola yo soy, ${person.name}`);

                getPerson(5, function (person) {
                    console.log(`Hola yo soy, ${person.name}`);

                    getPerson(6, function (person) {
                        console.log(`Hola yo soy, ${person.name}`);

                        getPerson(7, function (person) {
                            console.log(`Hola yo soy, ${person.name}`);
                        });
                    });
                });
            });
        });
    });
});