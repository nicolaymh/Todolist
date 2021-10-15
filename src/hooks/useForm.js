import { useState } from 'react';

//* This Custom hook handle me all change that I do in the form, through of the useState hook and the function handleInputChange.

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
