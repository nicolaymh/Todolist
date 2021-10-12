import React from 'react';

export const OptionColor = ({ index, color, handleChangeFocus }) => {
    const { background, design, colorSelected, focusState } = color;

    return (
        <div
            className={`${design} ${
                focusState && colorSelected
            } col-2 my-3 mx-1 my-sm-2`}
            onClick={() => handleChangeFocus(background)}
        >
            {index + 1}
        </div>
    );
};
