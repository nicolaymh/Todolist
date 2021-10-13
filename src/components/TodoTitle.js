import React from 'react';

import logo from './images/logo.png';

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
