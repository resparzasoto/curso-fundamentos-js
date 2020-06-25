var sign = prompt('¿Cuál estructura de control utilizas más?');

switch (sign) {
    case 'for':
        console.log('El for es muy practico si quieres manejar un contador!');
        break;
    case 'while':
        console.log('El while es muy practico si vas a manejar un condicional!');
        break;
    case 'switch':
        console.log('Lo estás usando ahorita!');
    default:
        console.log('No encontré ninguna estructura de control con ese nombre');
        break;
}