import React from 'react';
import { ErrorFormFields } from './ErrorFormFields';

export const CustomForm = ({
    values,
    handleInputChange,
    handleSubmit,
    formError,
}) => {
    const { todo, dateTime, description } = values;

    return (
        <>
            <div className='col mt-5'>
                <form onSubmit={handleSubmit}>
                    <div className='d-flex'>
                        <input
                            className='form-control mb-2 me-3'
                            type='text'
                            name='todo'
                            placeholder='To Do...'
                            autoComplete='off'
                            onChange={handleInputChange}
                            value={todo}
                        />
                        <button className='btn btn-success mb-2' type='submit'>
                            Add
                        </button>
                    </div>

                    <div className='d-flex'>
                        <input
                            className='form-control mb-2'
                            type='datetime-local'
                            name='dateTime'
                            onChange={handleInputChange}
                            value={dateTime}
                        />
                    </div>

                    <textarea
                        className='form-control mb-2'
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
