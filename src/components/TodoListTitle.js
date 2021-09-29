import React from 'react';

export const TodoListTitle = ({ todos }) => {
    return (
        <div>
            {todos.length === 0 ? (
                <h1>Add Todos</h1>
            ) : (
                <h2>TodoList Reactjs</h2>
            )}
        </div>
    );
};
