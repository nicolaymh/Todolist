import React, { useRef } from 'react';
import { todoListTitleChangeColor } from '../helpers/todoListTitleChangeColor';

export const TodoListTitle = ({ todos }) => {
    const refTitle = useRef();

    const todosAmount = todos.length;

    const title = refTitle.current;

    todoListTitleChangeColor(title);

    return (
        <div className='row justify-content-center bg'>
            <div className='col-10'>
                <h2
                    ref={refTitle}
                    className='text-primary fst-italic shadow-lg'
                >
                    {todosAmount === 0
                        ? 'Add Your To-Do'
                        : `To-Do-Amount (${todosAmount})`}
                </h2>
            </div>
        </div>
    );
};
