export const cardClass = (color) => {
    switch (color) {
        case 'bg-primary':
            return 'addTodoPrimary';

        case 'bg-warning':
            return 'addTodoWarning';

        case 'bg-info':
            return 'addTodoInfo';

        case 'bg-success':
            return 'addTodoSuccess';

        case 'bg-danger':
            return 'addTodoDanger';

        default:
            return 'addTodoInfo';
    }
};
