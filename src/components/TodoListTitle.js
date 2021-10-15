import React, { useRef } from 'react';
import { todoListTitleChangeColor } from '../helpers/todoListTitleChangeColor';

export const TodoListTitle = () => {
    const refTitle = useRef();

    const title = refTitle.current;

    todoListTitleChangeColor(title);

    return (
        <div className='row justify-content-center bg'>
            <div className='col-10'>
                <h2
                    ref={refTitle}
                    className='text-primary fst-italic shadow-lg'
                >
                    Add Your To-Do
                </h2>
            </div>
        </div>
    );
};
