import React from 'react';

import logo from './images/logo.png';

export const TodoTitle = () => {
    return (
        <>
            <div className='text-end'>
                <img src={logo} alt='logo' width='40px'></img>
            </div>
            <div>
                <h2 className='fs-1 fst-italic text-warning'>To-Do-Reactjs</h2>
            </div>
        </>
    );
};
