const DAYS_OF_YEAR = 365;
const INCREMENT_WEIGHT = .200;

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

console.log(`Al inicio del año ${ruben.name} pesa ${ruben.weight}kg`);

for (var i = 1; i <= DAYS_OF_YEAR; i++) {
    var random = Math.random();

    if (random <= .25)
    {
        ruben.weight = gainWeight(ruben);
    }
    else if (random <= 50) {
        ruben.weight = lossWeight(ruben);
    }
}

console.log(`Al final del año ${ruben.name} pesa ${ruben.weight.toFixed(1)}kg`);