var ruben = {
    name: 'Rubén',
    lastName: 'Esparza',
    height: 1.72
};

var alberto = {
    name: 'Alberto',
    lastName: 'Higuera',
    height: 1.83
};

var jorge = {
    name: 'Jorge',
    lastName: 'Cruz',
    height: 1.65
};

var dagoberto = {
    name: 'Dagoberto',
    lastName: 'Luque',
    height: 1.79
};

var people = [ruben, alberto, jorge, dagoberto];

for (var i = 0; i < people.length; i++) {
    console.log(`La altura de ${people[i].name} es ${people[i].height}mts`);
}