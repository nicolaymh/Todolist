import React from 'react';

export const ErrorFormFields = ({ alertMessage, alertColor }) => {
    return (
        <div
            className={`col-12 overflow-hidden alert ${alertColor} p-1 py-2 mx-2 mb-3 border border-danger rounded-pill shadow-lg`}
        >
            <h6 className='fst-italic fs my-auto'>{alertMessage}</h6>
        </div>
    );
};
