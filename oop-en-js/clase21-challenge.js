const HEIGHT_IS_TALL = 1.80;

function Person(name, lastName, height) {
    this.name = name;
    this.lastName = lastName;
    this.height = height;
}

Person.prototype.hello = function () {
    console.log(`Hola, me llamo ${this.name} ${this.lastName} y ${this.IsTall() ? 'soy' : 'no soy'} alto!`);
}

Person.prototype.IsTall = function () {
    return this.height >= HEIGHT_IS_TALL;
};

var ruben = new Person('Rubén', 'Esparza', 1.72);
var alberto = new Person('Alberto', 'Higuera', 1.83);

ruben.hello();
alberto.hello();