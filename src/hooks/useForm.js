import { useState } from 'react';

export const useForm = (initialState = {}) => {
    const [values, setValues] = useState(initialState);

    const handleInputChange = ({ target }) => {
        setValues({
            ...values,
            id: new Date().getTime(),
            [target.name]: target.value,
        });
    };

    return { values, setValues, handleInputChange };
};
