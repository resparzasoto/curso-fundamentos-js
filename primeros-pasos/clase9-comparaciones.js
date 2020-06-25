var x = 4;
var y = '4';

var sacha = {
    name: 'Sacha',
};

// Another object
// var anotherPerson = {
//     name: 'Sacha'
// };

// The same object
// var anotherPerson = sacha;

// Another object
var anotherPerson = {
    ...sacha
};