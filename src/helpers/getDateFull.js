import { daysMonths } from './daysMonths';

export const getDateFull = (dateTime) => {
    const { days, months } = daysMonths();

    let date = new Date(dateTime);

    const dateFull = {
        month: months[date.getMonth()],
        day: days[date.getDay()],
        year: date.getFullYear(),
        dayMonth: date.getDate(),
        hour: date.getHours(),
        minutes: date.getMinutes(),
    };

    return { ...dateFull };
};
