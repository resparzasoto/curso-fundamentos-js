const HEIGHT_IS_TALL = 1.80;

class Person {
    constructor(name, lastName, height) {
        this.name = name;
        this.lastName = lastName;
        this.height = height;
    }

    hello() {
        console.log(`Hola, me llamo ${this.name} ${this.lastName}`);
    }

    isTall() {
        return this.height >= HEIGHT_IS_TALL;
    }
}

class Developer extends Person {
    constructor(name, lastName, height, languages) {
        super(name, lastName, height);

        this.languages = languages;
    }

    hello() {
        console.log(`Hi world! My name is ${this.name} ${this.lastName}`);
    }
}

var alberto = new Person('Alberto', 'Higuera', 1.83);
var ruben = new Developer('Rubén', 'Esparza', 1.72, ['csharp', 'cplusplus']);

console.log(alberto);
console.log(ruben);

alberto.hello();
alberto.isTall();

ruben.hello();
ruben.isTall();