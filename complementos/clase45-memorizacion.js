/**
 * !6 = 6 * 5 * 4 * 3 * 2 * 1 = 720
 * !8 = 8 * 7 * 6 * 5 * 4 * 3 * 2 * 1 = 40320
 * !8 = 8 * 7 * !6 = 40320
 */

function factorial(n) {
    if (!this.cache) {
        this.cache = {};
    }

    if (this.cache[n]) {
        console.log(`Factorial de ${n} estaba cacheado: ${this.cache[n]}`);
        return this.cache[n];
    }

    if (n === 1) {
        return 1;
    }

    this.cache[n] = n * factorial(n - 1);
    console.log(`Factorial de ${n} no estaba cacheado: ${this.cache[n]}`);
    return this.cache[n];
}

console.log(`Resultado de factorial de 6: ${factorial(6)}`);
console.log();
console.log(`Resultado de factorial de 8: ${factorial(8)}`);