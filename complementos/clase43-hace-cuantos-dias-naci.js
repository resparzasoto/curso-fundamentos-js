function daysBetweenDates(dateStart, dateEnd) {
    const oneDay = 1000 * 60 * 60 * 24;
    const difference = Math.abs(dateStart - dateEnd);

    return Math.floor(difference / oneDay);
}

const now = new Date();
// Para JS los meses comienzan en 0, e.g Enero 0, Febrero 1, Marzo 2, Abril 3...
const birthDate = new Date(1995, 8, 12);

console.log(daysBetweenDates(now, birthDate));