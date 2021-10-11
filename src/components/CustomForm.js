import React from 'react';
import { ErrorFormFields } from './ErrorFormFields';
import { OptionColor } from './OptionColor';
import { TodoTitle } from './TodoTitle';

export const CustomForm = ({
    values,
    handleInputChange,
    handleSubmit,
    formError,
    optionColor,
}) => {
    const { todo, dateTime } = values;

    return (
        <>
            <div className='mt-2 col pb-3'>
                <TodoTitle />

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

                    <div>
                        <input
                            className='form-control mb-2 rounded-pill'
                            type='datetime-local'
                            name='dateTime'
                            onChange={handleInputChange}
                            value={dateTime}
                        />
                    </div>

                    <div className='row text-center mt-4 d-flex justify-content-center'>
                        {optionColor.map((color, index) => (
                            <OptionColor
                                key={index + new Date().getTime()}
                                color={color}
                            />
                        ))}
                    </div>
                </form>

                <div className='d-flex justify-content-center'>
                    {formError && <ErrorFormFields />}
                </div>
            </div>
        </>
    );
};
