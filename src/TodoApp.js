import React, { useEffect } from 'react';
import { CustomForm } from './components/CustomForm';
import { TodoList } from './components/TodoList';
import { initialStateForm } from './helpers/initialStateForm';
import { useForm } from './hooks/useForm';
import { useSubmit } from './hooks/useSubmit';
import { useCardOptionsColor } from './hooks/useCardOptionsColor';
import { cardOptionsColor } from './helpers/cardOptionsColor';
import { colortitleButton } from './helpers/colortitleButton';

import './components/styles/styles.css';
import { Footer } from './components/Footer';

export const TodoApp = () => {
    const { values, setValues, handleInputChange } = useForm(initialStateForm);

    let storage = localStorage.getItem('todos')
        ? JSON.parse(localStorage.getItem('todos'))
        : [];

    const { todos, setTodos, handleSubmit, formError } = useSubmit(
        values,
        setValues,
        initialStateForm,
        storage,
    );

    const { colors, setColors, handleChangeFocus } =
        useCardOptionsColor(setValues);

    const colorTitleAndButtonAdd = colortitleButton(values);

    useEffect(() => {
        const resetCardOptionsColor = () => {
            setColors([...cardOptionsColor]);
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
                    {...formError}
                    todos={todos}
                    colors={colors}
                    setColors={setColors}
                    handleChangeFocus={handleChangeFocus}
                    {...colorTitleAndButtonAdd}
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

                <Footer />
            </div>
        </div>
    );
};
