import { useState } from 'react';

export const useSubmit = (values) => {
    const [todos, setTodos] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setTodos([...todos, values]);
    };

    return { todos, setTodos, handleSubmit };
};
