import React from 'react';

export const OptionColor = ({ color }) => {
    const { background, design } = color;

    console.log(color);

    return <div className={`${design} col-2 my-3 mx-1 my-sm-2`}>1</div>;
};
