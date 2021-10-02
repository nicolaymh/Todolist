import React from 'react';
import { getDateFull } from '../helpers/getDateFull';

export const TodoList = ({ eleToDo, index }) => {
    const { todo, dateTime, description } = eleToDo;

    const { month, day, year, dayMonth, hour, minutes } = getDateFull(dateTime);

    return (
        <div className='col-9 card border-success mb-3 w'>
            <div className='col card-header bg-transparent border-success'>
                Todo # {index + 1}
            </div>
            <div className='card-body text-success'>
                <h5 className='card-title'>{todo}</h5>
                <p className='card-text'>
                    DateTime:
                    {`${day}, ${month} ${dayMonth}, ${year} at ${hour}:${minutes}`}
                </p>

                <p className='card-text'>Description: {description}</p>
            </div>
            <div className='card-footer bg-transparent border-success d-grid'>
                <button className='btn btn-danger'>Delete</button>
            </div>
        </div>
    );
};
