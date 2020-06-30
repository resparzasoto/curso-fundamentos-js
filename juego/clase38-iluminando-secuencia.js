const celeste = document.getElementById('celeste');
const violeta = document.getElementById('violeta');
const naranja = document.getElementById('naranja');
const verde = document.getElementById('verde');
const btnStart = document.getElementById('btnStart');

class Game {
    constructor() {
        this.initialize();
        this.generateSecuence();
        this.levelUp();
    }

    initialize() {
        btnStart.classList.add('hide');
        this.level = 1;
        this.colors = {
            celeste,
            violeta,
            naranja,
            verde
        };
    }

    generateSecuence() {
        this.secuence = new Array(10).fill(0).map(n => Math.floor(Math.random() * 4));
    }

    levelUp() {
        this.iluminateSecuence();
    }

    transformNumberToColor(number) {
        switch (number) {
            case 0:
                return 'celeste';
            case 1:
                return 'violeta';
            case 2:
                return 'naranja';
            case 3:
                return 'verde';
        }
    }

    blink(color) {
        this.colors[color].classList.add('light');
        setTimeout(() => this.colors[color].classList.remove('light'), 350);
    }

    iluminateSecuence() {
        for (let i = 0; i < this.level; i++) {
            const color = this.transformNumberToColor(this.secuence[i]);
            setTimeout(() => this.blink(color), 1000 * i);
        }
    }
}

function startGame() {
    window.game = new Game();
}