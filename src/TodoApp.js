import React from 'react';
import { CustomForm } from './components/CustomForm';
import { TodoList } from './components/TodoList';

export const TodoApp = () => {
    return (
        <div className='container text-center border border-primary'>
            <h2>TodoList Reactjs</h2>
            <div className='row'>
                <CustomForm />
                <TodoList />
            </div>
        </div>
    );
};
