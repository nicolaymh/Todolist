import React from 'react';
import { CustomForm } from './components/CustomForm';
import { TodoList } from './components/TodoList';
import { TodoListTitle } from './components/TodoListTitle';
import { initialStateForm } from './helpers/initialStateForm';
import { useForm } from './hooks/useForm';
import { useSubmit } from './hooks/useSubmit';

export const TodoApp = () => {
    const { values, setValues, handleInputChange } = useForm(initialStateForm);

    const { todos, setTodos, handleSubmit, formError } = useSubmit(
        values,
        setValues,
        initialStateForm,
    );

    return (
        <div className='container text-center'>
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
        </div>
    );
};
