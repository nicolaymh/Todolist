import React, { useEffect, useRef } from 'react';
import { useState } from 'react';
import { todoListTitleChangeColor } from '../helpers/todoListTitleChangeColor';

//* This component controls the constant change of the color of the task title through a useState hook, making a count that is executed infinitely through the useeffect.

export const TodoListTitle = ({ todos }) => {
    const [count, setCount] = useState(0);

    const refTitle = useRef();
    const title = refTitle.current;

    const todosAmount = todos.length;

    //* This useEffect allows me to mount and override the setInterval so there are no output lag issues.
    useEffect(() => {
        const interval = setInterval(() => {
            setCount(count + 1);

            todoListTitleChangeColor(title);
        }, 1000);
        return () => {
            clearInterval(interval);
        };
    }, [count, title]);

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
