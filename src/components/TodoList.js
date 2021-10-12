import React from 'react';
import { cardClass } from '../helpers/cardClass';
import { getDateFull } from '../helpers/getDateFull';

import './styles/styles.css';

export const TodoList = ({ eleToDo, index, todos, setTodos }) => {
    const { id, todo, dateTime, color } = eleToDo;

    const { month, day, year, dayMonth, hour, minutes } = getDateFull(dateTime);

    const deleteTodo = (id) => {
        const deleteTodo = todos.filter((todo) => todo.id !== id);
        setTodos([...deleteTodo]);
    };

    const addClass = cardClass(color);

    return (
        <div
            className={`${addClass} overflow-hidden col-10 col-sm-8 col-lg-3 text-white m-2`}
        >
            <div className='card-header'>To-Do-#{index + 1}</div>
            <div className='card-body m-auto'>
                <h5 className='card-title'>{todo}</h5>
                <p className='fs-6'>
                    {`${day}, ${month} ${dayMonth}, ${year} at ${hour}:${minutes}`}
                </p>
                <button
                    onClick={() => deleteTodo(id)}
                    className={`rounded-pill m-auto ${
                        color === 'bg-danger'
                            ? 'btn btn-outline-light'
                            : 'btn btn-danger'
                    }`}
                >
                    Delete
                </button>
            </div>
        </div>
    );
};
