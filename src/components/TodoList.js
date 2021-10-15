import React from 'react';
import { cardClass } from '../helpers/cardClass';
import { getDateFull } from '../helpers/getDateFull';

import './styles/styles.css';

//* This component show me all to-do. Every time that it add a to-do, back to iterar

export const TodoList = ({ eleToDo, index, todos, setTodos }) => {
    const { id, todo, dateTime, color, state } = eleToDo;

    const { month, day, year, dayMonth, hour, minutes } = getDateFull(dateTime);

    const deleteTodo = (id) => {
        const deleteTodo = todos.filter((todo) => todo.id !== id);
        setTodos([...deleteTodo]);
    };

    const handleStateTodo = (id) => {
        const newStateTodo = todos.map((todo) =>
            todo.id === id ? { ...todo, state: !todo.state } : todo,
        );

        setTodos([...newStateTodo]);
    };

    const { selected, unselected } = cardClass(color);

    return (
        <div
            className={`${
                state ? unselected : selected
            } overflow-hidden col-10 col-sm-5 col-md-4 col-lg-3 text-white m-2 pb-2 animate__animated animate__backInDown`}
        >
            <div
                className='card-header fw-bold'
                onClick={() => handleStateTodo(id)}
            >
                To-Do-#{index + 1}
            </div>
            <div
                className='card-body p-1 mb-4'
                onClick={() => handleStateTodo(id)}
            >
                <h5 className='card-title'>{todo}</h5>
                <p className='fs-6'>
                    {`${day}, ${month} ${dayMonth}, ${year} at ${hour}:${minutes}`}
                </p>
            </div>
            <div className='fixed-bottom pb-2'>
                <button
                    className={`rounded-pill pb-2 ${
                        color === 'bg-danger'
                            ? 'btn btn-outline-light'
                            : 'btn btn-danger'
                    }`}
                    onClick={() => deleteTodo(id)}
                >
                    Delete
                </button>
            </div>
        </div>
    );
};
