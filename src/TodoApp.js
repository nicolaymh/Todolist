import React, { useEffect } from 'react';
import { CustomForm } from './components/CustomForm';
import { TodoList } from './components/TodoList';
import { initialStateForm } from './helpers/initialStateForm';
import { useForm } from './hooks/useForm';
import { useSubmit } from './hooks/useSubmit';
import { useCardOptionsColor } from './hooks/useCardOptionsColor';
import { cardOptionsColor } from './helpers/cardOptionsColor';
import { colortitleButton } from './helpers/colortitleButton';
import { Footer } from './components/Footer';
import { TodoListTitle } from './components/TodoListTitle';

import './components/styles/styles.css';

export const TodoApp = () => {
    //! Custom Hook: to control form data.
    const { values, setValues, handleInputChange } = useForm(initialStateForm);

    //! Custom hook: to send the new todo and verify it.
    const { todos, setTodos, handleSubmit, formError } = useSubmit(
        values,
        setValues,
        initialStateForm,
    );

    //! Custom hook: to control the chosen color.
    const { colors, setColors, handleChangeFocus } =
        useCardOptionsColor(setValues);

    //? colortitleButton is a function that returns an object with the name of the class that will take the general title and the Add button. This every time a color is selected.
    const colorTitleAndButtonAdd = colortitleButton(values);

    //* It runs every time the useState is changed to handle to-do of the Custom Hook useForm. Basically this return me all to its initial state
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

                <TodoListTitle todos={todos} />

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
