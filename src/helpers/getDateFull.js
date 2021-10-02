export const getDateFull = (dateTime) => {
    const days = [
        `Sunday`,
        `Monday`,
        `Tuesday`,
        `Wednesday`,
        `Thursday`,
        `Friday`,
        `Saturday`,
    ];

    const months = [
        `January`,
        `February`,
        `March`,
        `April`,
        `May`,
        `June`,
        `July`,
        `August`,
        `September`,
        `October`,
        `November`,
        `December`,
    ];

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
