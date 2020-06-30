/**
 * 13 | 4
 * 13 - 4 = 9   -> Caso Recursivo
 * 9 - 4 = 5    -> Caso Recursivo
 * 5 - 4 = 1    -> Caso Recursivo
 * 1 - 4 = -3   -> Caso Base
 */

function integerDivision(dividiendo, divisor) {
    if (dividiendo < divisor) {
        return 0;
    }

    return 1 + integerDivision(dividiendo - divisor, divisor);
}

console.log(integerDivision(13, 4));
console.log(integerDivision(30, 3));