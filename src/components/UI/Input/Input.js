import React from 'react';

import './Input.scss';

const input = props => {
    let inputElement = null;

    switch (props.elementType) {
        case ('input'):
            inputElement =  <input {...props.elementConfig} value={props.value} onChange={props.changed}/>;
            break;
        case ('textarea'):
            inputElement = <textarea {...props.elementConfig} value={props.value} onChange={props.changed}/>;
            break;
        default:
            break;
    }
    return(
        <div>
            <label>{props.label}:
                {inputElement}
            </label>
        </div>
    )
}

export default input;