const celeste = document.getElementById('celeste');
const violeta = document.getElementById('violeta');
const naranja = document.getElementById('naranja');
const verde = document.getElementById('verde');
const btnStart = document.getElementById('btnStart');
const LAST_LEVEL = 10;

class Game {
    constructor() {
        this.initialize = this.initialize.bind(this);
        this.initialize();
        this.generateSecuence();

        setTimeout(this.levelUp, 500);
    }

    initialize() {
        // Resuelve la perdida de contexto en el setTimeOut debido a que this
        // pertenece a window
        this.levelUp = this.levelUp.bind(this);
        // Resuelve la perdida de contexto al agregar eventos a un elemento html
        this.chooseColor = this.chooseColor.bind(this);
        this.toggleBtnStart();
        this.level = 1;
        this.colors = {
            celeste,
            violeta,
            naranja,
            verde
        };
    }

    toggleBtnStart() {
        if (btnStart.classList.contains('hide')) {
            btnStart.classList.remove('hide');
        }
        else {
            btnStart.classList.add('hide');
        }
    }

    generateSecuence() {
        this.secuence = new Array(LAST_LEVEL).fill(0).map(n => Math.floor(Math.random() * 4));
    }

    levelUp() {
        this.subLevel = 0;
        this.iluminateSecuence();
        this.addEventsClick();
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

    transformColorToNumber(color) {
        switch (color) {
            case 'celeste':
                return 0;
            case 'violeta':
                return 1;
            case 'naranja':
                return 2;
            case 'verde':
                return 3;
        }
    }

    iluminateSecuence() {
        for (let i = 0; i < this.level; i++) {
            const color = this.transformNumberToColor(this.secuence[i]);
            setTimeout(() => this.blink(color), 1000 * i);
        }
    }

    blink(color) {
        this.colors[color].classList.add('light');
        setTimeout(() => this.colors[color].classList.remove('light'), 350);
    }

    addEventsClick() {
        this.colors.celeste.addEventListener('click', this.chooseColor);
        this.colors.violeta.addEventListener('click', this.chooseColor);
        this.colors.naranja.addEventListener('click', this.chooseColor);
        this.colors.verde.addEventListener('click', this.chooseColor);
    }

    removeEventsClick() {
        this.colors.celeste.removeEventListener('click', this.chooseColor)
        this.colors.violeta.removeEventListener('click', this.chooseColor)
        this.colors.naranja.removeEventListener('click', this.chooseColor)
        this.colors.verde.removeEventListener('click', this.chooseColor)
    }

    chooseColor(ev) {
        const nameColor = ev.target.dataset.color;
        const numberColor = this.transformColorToNumber(nameColor);
        this.blink(nameColor);

        if (numberColor === this.secuence[this.subLevel]) {
            this.subLevel++;

            if (this.level === this.subLevel) {
                this.level++;
                this.removeEventsClick();

                if (this.level === (LAST_LEVEL + 1)) {
                    this.win();
                } else {
                    setTimeout(this.levelUp, 1500);
                }
            }
        } else {
            this.lost();
        }
    }

    win() {
        swal('SimonSay', 'Felicitaciones, ganaste! 😄', 'success')
            .then(this.initialize);
    }

    lost() {
        swal('SimonSay', 'Lo siento, perdiste! 😥', 'error')
            .then(() => {
                this.removeEventsClick();
                this.initialize();
            });
    }
}

function startGame() {
    window.game = new Game();
}