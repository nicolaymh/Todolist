import React from 'react';
import { CustomForm } from './components/CustomForm';
import { TodoList } from './components/TodoList';
import { initialStateForm } from './helpers/initialStateForm';
import { useForm } from './hooks/useForm';
import { useSubmit } from './hooks/useSubmit';

import './components/styles/styles.css';

export const TodoApp = () => {
    const { values, setValues, handleInputChange } = useForm(initialStateForm);

    const { todos, setTodos, handleSubmit, formError } = useSubmit(
        values,
        setValues,
        initialStateForm,
    );

    return (
        <div className='generalContainer container text-center'>
            <div className='row row-cols-1 justify-content-center mt-2'>
                <CustomForm
                    values={values}
                    handleInputChange={handleInputChange}
                    handleSubmit={handleSubmit}
                    formError={formError}
                    todos={todos}
                />

                <div className='row justify-content-center mb-4'>
                    {todos.map((eleToDo, index) => (
                        <TodoList
                            key={eleToDo.id}
                            index={index}
                            eleToDo={eleToDo}
                            todos={todos}
                            setTodos={setTodos}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};
