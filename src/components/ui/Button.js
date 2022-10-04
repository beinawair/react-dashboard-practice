import React from 'react';

export const ButtonPrimary = (props) => (
    <button className="mt-4 bg-orange-400 hover:bg-orange-500 text-white font-normal py-2 px-12 rounded-lg"
        type={props.type}
    >
        {props.name}
    </button>
);