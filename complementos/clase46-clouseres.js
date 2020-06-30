function createGreetings(endOfPrashe) {
    return function (name) {
        console.log(`Hola ${name} ${endOfPrashe}`);
    };
}

const greetingMexicano = createGreetings('wey');
const greetingArgentino = createGreetings('che');
const greetingColombiano = createGreetings('parce');

greetingMexicano('Rubén');
greetingArgentino('Rubén');
greetingColombiano('Rubén');