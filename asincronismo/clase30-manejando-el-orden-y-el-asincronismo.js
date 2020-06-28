const API_URL = 'https://swapi.dev/api/';
const PEOPLE_URL = 'people/:id';
const options = { crossDomain: true };

function getPerson(id, callback) {
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`;

    $.get(url, options, function (person) {
        console.log(`Hola yo soy, ${person.name}`)
    });

    if (callback) {
        callback();
    }
}

// Si hacemos esto, mandaremos llamar primero la function y no sera un callback
// Debe de ser la declaracion o la referencia de una function
// getPerson(1, getPerson(2));

getPerson(1, function () {
    getPerson(2, function () {
        getPerson(3, function () {
            getPerson(4, function () {
                getPerson(5, function () {
                    getPerson(6, function () {
                        getPerson(7);
                    });
                });
            });
        });
    });
});