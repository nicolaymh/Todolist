//? This function handles two classes which mark or unmark the cards in the task list.

export const cardClass = (color) => {
    switch (color) {
        case 'bg-primary':
            return {
                selected: 'addTodoPrimary',
                unselected: 'todoPrimarySelected',
            };

        case 'bg-warning':
            return {
                selected: 'addTodoWarning',
                unselected: 'todoWarningSelected',
            };

        case 'bg-info':
            return { selected: 'addTodoInfo', unselected: 'todoInfoSelected' };

        case 'bg-success':
            return {
                selected: 'addTodoSuccess',
                unselected: 'todoSuccessSelected',
            };

        case 'bg-danger':
            return {
                selected: 'addTodoDanger',
                unselected: 'todoDangerSelected',
            };

        default:
            return;
    }
};
