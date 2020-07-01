const ruben = {
    name: 'Rubén',
    lastName: 'Esparza'
};

const yesika = {
    name: 'Yesika',
    lastName: 'Cortés'
};

function hi(greeting = 'Hola') {
    console.log(`${greeting}, mi nombre es ${this.name}`);
}

hi();

// Enlaza el this de la funcion nueva con el objeto que cae por parametro,
// regresandonos una nueva funcion
const hiSacha = hi.bind(ruben, 'Hola we por bind');
const hiYesika = hi.bind(yesika, 'Hola che por bind');

hiSacha();
hiYesika();

// Podemos pasar la referencia de la funcion a ejecutar
setTimeout(hi.bind(ruben, 'Hola we por setTimeOut'), 1000);

// El primer argumento es el this, los siguientes son los argumentos separados
// por ,
hi.call(ruben, 'Hola we por call');

// El primer argumento es el this, el segundo son los parametros en un array
hi.apply(ruben, ['Hola we por apply']);