import React, { memo } from 'react';

//* Component that just shows me the footer of the app. React memo is not necessary because it does not have a high load but it is done in an educational way.

export const Footer = memo(() => {
    return (
        <div className='row m-4'>
            <div className='col-12'>
                <hr className='text-light' />
            </div>
            <div className='col-12'>
                <footer className='fw-light text-muted '>
                    This Website is Developed by Nicolay Moreno, 2021
                </footer>
            </div>
        </div>
    );
});

