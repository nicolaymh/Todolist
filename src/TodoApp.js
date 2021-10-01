import React, { useEffect } from 'react';
import { CustomForm } from './components/CustomForm';
import { TodoList } from './components/TodoList';
import { TodoListTitle } from './components/TodoListTitle';
import { initialStateForm } from './helpers/initialStateForm';
import { useForm } from './hooks/useForm';
import { useSubmit } from './hooks/useSubmit';

export const TodoApp = () => {
    const { values, setValues, handleInputChange } = useForm(initialStateForm);

    const { todos, handleSubmit, formError } = useSubmit(values);

    useEffect(() => {
        setValues(initialStateForm);
    }, [todos, setValues]);

 

    return (
        <div className='container text-center border border-primary'>
            <h2>TodoList Reactjs</h2>
            <div className='row'>
                <CustomForm
                    values={values}
                    handleInputChange={handleInputChange}
                    handleSubmit={handleSubmit}
                    formError={formError}
                />

                <div className='col'>
                    <TodoListTitle todos={todos} />

                    <div className='row justify-content-center'>
                        {todos.map((eleToDo) => (
                            <TodoList key={eleToDo.id} eleToDo={eleToDo} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
