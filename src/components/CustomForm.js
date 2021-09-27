import React from 'react';
import { useForm } from '../helpers/useForm';
import { useSubmit } from '../helpers/useSubmit';

export const CustomForm = () => {
    const { values, handleInputChange } = useForm({
        todo: '',
        date: '',
        time: '',
        description: '',
    });

    const { todo, date, time, description } = values;

    const { handleSubmit } = useSubmit(values);

    return (
        <>
            <div className='col'>
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
                            type='date'
                            name='date'
                            onChange={handleInputChange}
                            value={date}
                        />
                        <input
                            className='form-control mb-2'
                            type='time'
                            name='time'
                            onChange={handleInputChange}
                            value={time}
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
            </div>
        </>
    );
};
