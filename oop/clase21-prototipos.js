// Este function es visto como el constructor, es necesario utilizar el this
// para referirnos a sus atributos
function Person(name, lastName) {
    this.name = name;
    this.lastName = lastName;
}

// De esta manera se agrega un method
Person.prototype.hello = function () {
    console.log(`Hola, me llamo ${this.name} ${this.lastName}`);
}

var ruben = new Person('Rubén', 'Esparza');
var alberto = new Person('Alberto', 'Higuera');

ruben.hello();
alberto.hello();