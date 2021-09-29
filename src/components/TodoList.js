import React from 'react';

export const TodoList = ({ eleToDo }) => {
    const { todo, date, time, description } = eleToDo;

    return (
        <div className='col-9 card border-success mb-3 w'>
            <div className='col card-header bg-transparent border-success'>
                Todo #1
            </div>
            <div className='card-body text-success'>
                <h5 className='card-title'>{todo}</h5>
                <p className='card-text'>Date: {date}</p>
                <p className='card-text'>Time: {time}</p>
                <p className='card-text'>Description: {description}</p>
            </div>
            <div className='card-footer bg-transparent border-success d-grid'>
                <button className='btn btn-danger'>Delete</button>
            </div>
        </div>
    );
};
