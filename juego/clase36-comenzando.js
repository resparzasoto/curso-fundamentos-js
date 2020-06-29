const topLeft = document.getElementById('topLeft');
const topRight = document.getElementById('topRight');
const bottomRight = document.getElementById('bottomRight');
const bottomLeft = document.getElementById('bottomLeft');
const btnStart = document.getElementById('btnStart');

class Game {
    constructor() {
        this.initialize();
    }

    initialize() {
        btnStart.classList.add('hide');
    }
}

function startGame() {
    var game = new Game();
}