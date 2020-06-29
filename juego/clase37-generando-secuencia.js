const celeste = document.getElementById('celeste');
const violeta = document.getElementById('violeta');
const naranja = document.getElementById('naranja');
const verde = document.getElementById('verde');
const btnStart = document.getElementById('btnStart');

class Game {
    constructor() {
        this.initialize();
        this.generateSecuence();
        this.level = 1;
        // Forma corta de asignar valor y nombre a un atributo con una variable existente
        this.colors = {
            celeste,
            violeta,
            naranja,
            verde
        };
    }

    initialize() {
        btnStart.classList.add('hide');
    }

    generateSecuence() {
        this.secuence = new Array(4).fill(0).map(n => Math.floor(Math.random() * 4));
    }
}

function startGame() {
    window.game = new Game();
}