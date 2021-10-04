import React from 'react';
import { ErrorFormFields } from './ErrorFormFields';

import './styles/form.css';

export const CustomForm = ({
    values,
    handleInputChange,
    handleSubmit,
    formError,
}) => {
    const { todo, dateTime, description } = values;

    return (
        <>
            <div className='col mt-2 shadow-lg'>
                <h2 className='fs-1 fst-italic text-warning'>To-Do-Reactjs</h2>

                <form className='mx-3 my-3' onSubmit={handleSubmit}>
                    <div className='d-flex'>
                        <input
                            className='form-control mb-2 me-3 rounded-pill shadow-lg'
                            type='text'
                            name='todo'
                            placeholder='To Do...'
                            autoComplete='off'
                            onChange={handleInputChange}
                            value={todo}
                        />
                        <button
                            className='btn btn-warning mb-2 rounded-pill border-4'
                            type='submit'
                        >
                            Add
                        </button>
                    </div>

                    <div className='d-flex'>
                        <input
                            className='form-control mb-2 rounded-pill'
                            type='datetime-local'
                            name='dateTime'
                            onChange={handleInputChange}
                            value={dateTime}
                        />
                    </div>

                    <textarea
                        className='bginputs form-control rounded-pill'
                        name='description'
                        placeholder='Write a short description'
                        onChange={handleInputChange}
                        value={description}
                    ></textarea>
                </form>
                {formError && <ErrorFormFields />}
            </div>
        </>
    );
};
