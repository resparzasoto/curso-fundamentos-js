const DAYS_OF_YEAR = 365;
const INCREMENT_WEIGHT = 0.3;
const LOSS_WEIGHT_GOAL = 3;

var ruben = {
    name: 'Rubén',
    lastName: 'Esparza',
    weight: 68
};

// function gainWeight({ weight }) {
//     return weight += INCREMENT_WEIGHT;
// }

const gainWeight = ({ weight }) => weight += INCREMENT_WEIGHT;
const lossWeight = ({ weight }) => weight -= INCREMENT_WEIGHT;
const eat = () => Math.random() < 0.3;
const excercise = () => Math.random() < 0.4;

console.log(`Al inicio del año ${ruben.name} pesa ${ruben.weight.toFixed(1)}kg`);

const GOAL = ruben.weight - LOSS_WEIGHT_GOAL;
var days = 0;

while (ruben.weight > GOAL) {
    if (eat()) {
        ruben.weight = gainWeight(ruben);
    }

    if (excercise()) {
        ruben.weight = lossWeight(ruben);
    }

    days++;
}

console.log(`Pasarón ${days} días hasta que ${ruben.name} adelgazó ${LOSS_WEIGHT_GOAL}kg`);

console.log(`Al final del año ${ruben.name} pesa ${ruben.weight.toFixed(1)}kg`);