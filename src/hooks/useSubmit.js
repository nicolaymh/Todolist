import { useState } from 'react';

export const useSubmit = (values) => {
    const [todos, setTodos] = useState([]);
    const [formError, setFormError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        const { id, todo, date, time, description } = values;

        if (
            id.toString().trim() === '' ||
            todo.trim() === '' ||
            date.trim() === '' ||
            time.trim() === '' ||
            description.trim() === ''
        ) {
            setTodos([...todos]);
            setFormError(true);
        } else {
            setTodos([...todos, values]);
            setFormError(false);
        }
    };

    return { todos, setTodos, handleSubmit, formError };
};
