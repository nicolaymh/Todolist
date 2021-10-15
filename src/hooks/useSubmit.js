import { useEffect, useState } from 'react';

//* This custom hook handle me all the tasks that I add. First verify the localstorage and this is the initial state that it add to hook.

export const useSubmit = (values, setValues, initialState) => {
    let storage = localStorage.getItem('todos')
        ? JSON.parse(localStorage.getItem('todos'))
        : [];

    //! Hook:
    const [todos, setTodos] = useState(storage);

    //! Hook that controls the alerts that are sent when the form data is not correct.
    const [formError, setFormError] = useState({
        alertMessage: '',
        alertState: false,
        alertColor: '',
    });

    //* Every time that there is a change in the todos hook it send the data to localstorage.
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    //? Function that checks the data in the form and organizes it. The tasks are organizing by date. If exists some task with the same date, it will send the alert thought the formError useState.
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
