const HEIGHT_IS_TALL = 1.80;

class Person {
    constructor(name, lastName, height) {
        this.name = name;
        this.lastName = lastName;
        this.height = height;
    }

    hello(fn) {
        // var { name, lastName } = this;
        // console.log(`Hola, me llamo ${name} ${lastName}`);

        console.log(`Hola, me llamo ${this.name} ${this.lastName}`);

        if (fn) {
            fn(this.name, this.lastName);
        }
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

    hello(fn) {
        console.log(`Hi world! My name is ${this.name} ${this.lastName}`);

        if (fn) {
            fn(this.name, this.lastName, true);
        }
    }
}

function responseHello(name, lastName, isDeveloper) {
    console.log(`Buen día ${name} ${lastName}`);

    if (isDeveloper) {
        console.log(`Ah mirá, no sabía que eras developer!`);
    }
}

var alberto = new Person('Alberto', 'Higuera', 1.83);
var ruben = new Developer('Rubén', 'Esparza', 1.72, ['csharp', 'cplusplus']);

console.log(alberto);
console.log(ruben);

alberto.hello(responseHello);
ruben.hello(responseHello);