import { useState } from 'react';

export const useSubmit = (values, setValues, initialState) => {
    const [todos, setTodos] = useState([]);
    const [formError, setFormError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        const { id, todo, dateTime } = values;

        if (
            id.toString().trim() === '' ||
            todo.trim() === '' ||
            dateTime.trim() === ''
        ) {
            setFormError(true);
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
