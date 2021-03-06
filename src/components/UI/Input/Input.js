import React from 'react';

import './Input.scss';

const input = props => {
    let inputElement = null;

    switch (props.elementType) {
        case ('input'):
            inputElement = <input {...props.elementConfig} value={props.value} onChange={props.changed} />;
            break;
        case ('textarea'):
            inputElement = <textarea {...props.elementConfig} value={props.value} onChange={props.changed} rows='4'/>;
            break;
        default:
            break;
    }
    return (
        <label className='form__label'>{props.label}:
            {inputElement}
        </label>
    )
}

export default input;