const HEIGHT_IS_TALL = 1.80;

function inheritOf(prototypeSon, prototypeFather) {
    var fn = function () {};
    fn.prototype = prototypeFather.prototype;

    prototypeSon.prototype = new fn;
    prototypeSon.prototype.constructor = prototypeSon;
}

function Person(name, lastName, height) {
    this.name = name;
    this.lastName = lastName;
    this.height = height;
}

Person.prototype.hello = function () {
    console.log(`Hola, me llamo ${this.name} ${this.lastName}`);
}

Person.prototype.isTall = function () {
    return this.height >= HEIGHT_IS_TALL;
}

function Developer(name, lastName, languages) {
    this.name = name;
    this.lastName = lastName;
    this.language = languages;
}

inheritOf(Developer, Person);

Developer.prototype.hello = function () {
    console.log(`Hi world! My name is ${this.name} ${this.lastName}`);
}

var alberto = new Person('Alberto', 'Higuera', 1.83);
var ruben = new Developer('Rubén', 'Esparza', ['csharp', 'cplusplus']);

console.log(alberto);
console.log(ruben);

alberto.hello();
ruben.hello();