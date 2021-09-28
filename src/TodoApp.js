import React from 'react';
import { CustomForm } from './components/CustomForm';
import { TodoList } from './components/TodoList';
import { useForm } from './hooks/useForm';
import { useSubmit } from './hooks/useSubmit';

export const TodoApp = () => {
    const { values, handleInputChange } = useForm({
        todo: '',
        date: '',
        time: '',
        description: '',
    });

    const { todos, handleSubmit } = useSubmit(values);
    return (
        <div className='container text-center border border-primary'>
            <h2>TodoList Reactjs</h2>
            <div className='row'>
                <CustomForm
                    values={values}
                    handleInputChange={handleInputChange}
                    handleSubmit={handleSubmit}
                />

                <div className='col'>
                    <div className='row justify-content-center'>
                        {todos.map((eleToDo) => (
                            <TodoList eleToDo={eleToDo} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
