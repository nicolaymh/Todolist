import React, { useEffect } from 'react';
import { CustomForm } from './components/CustomForm';
import { TodoList } from './components/TodoList';
import { initialStateForm } from './helpers/initialStateForm';
import { useForm } from './hooks/useForm';
import { useSubmit } from './hooks/useSubmit';
import { useCardOptionsColor } from './hooks/useCardOptionsColor';
import { cardOptionsColor } from './helpers/cardOptionsColor';
import { resetOptionsColor } from './helpers/resetOptionsColor';

import './components/styles/styles.css';

export const TodoApp = () => {
    const { values, setValues, handleInputChange } = useForm(initialStateForm);

    const { todos, setTodos, handleSubmit, formError } = useSubmit(
        values,
        setValues,
        initialStateForm,
    );

    const { colors, setColors, handleChangeFocus } =
        useCardOptionsColor(setValues);

    useEffect(() => {
        const resetCardOptionsColor = () => {
            setColors([...cardOptionsColor]);
            console.log(resetOptionsColor);
        };

        resetCardOptionsColor();
    }, [todos, setColors]);

    return (
        <div className='generalContainer container text-center'>
            <div className='row row-cols-1 justify-content-center mt-2'>
                <CustomForm
                    values={values}
                    setValues={setValues}
                    handleInputChange={handleInputChange}
                    handleSubmit={handleSubmit}
                    formError={formError}
                    todos={todos}
                    colors={colors}
                    setColors={setColors}
                    handleChangeFocus={handleChangeFocus}
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
