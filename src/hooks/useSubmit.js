import { useState } from 'react';

export const useSubmit = (values, setValues, initialState) => {
    const [todos, setTodos] = useState([]);
    const [formError, setFormError] = useState({
        alertMessage: '',
        alertState: false,
        alertColor: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        const { id, todo, dateTime, color } = values;

        const checkEqualDates =
            todos.filter((todo) => {
                return todo.dateTime === dateTime;
            }).length > 0
                ? true
                : false;

        if (
            id.toString().trim() === '' ||
            todo.trim() === '' ||
            dateTime.trim() === '' ||
            color.trim() === ''
        ) {
            setFormError({
                alertMessage: 'Fill in fields and choose a color',
                alertState: true,
                alertColor: 'alert-danger',
            });
        } else if (checkEqualDates) {
            setFormError({
                alertMessage: 'There is a to-do with the same date',
                alertState: true,
                alertColor: 'alert-warning',
            });
        } else {
            let organizeDateTime = [...todos, values];

            organizeDateTime
                .sort((a, b) => new Date(b.dateTime) - new Date(a.dateTime))
                .reverse();

            setTodos([...organizeDateTime]);
            setFormError(false);

            setValues(initialState);
        }
    };

    return { todos, setTodos, handleSubmit, formError };
};
