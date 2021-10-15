import React from 'react';

import logo from './images/logo.png';

//* Component that allows me to change the color of the title every time I choose a color option.
export const TodoTitle = ({ colorTitle }) => {
    return (
        <>
            <div className='d-flex align justify-content-evenly m-3'>
                <h2
                    className={`m-auto fs-1 fst-italic ${colorTitle} shadow-sm`}
                >
                    To-Do-Reactjs
                </h2>
                <img src={logo} alt='logo' width='80px'></img>
            </div>
        </>
    );
};
