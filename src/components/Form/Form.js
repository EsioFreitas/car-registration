import React from 'react';

import Input from '../UI/Input/Input';

import './Form.scss';

const form = props => (
    <form className='form'>
        {
            Object.keys(props.inputs).map(input => (
                <Input key={input}
                    elementConfig={props.inputs[input].config}
                    value={props.inputs[input].value}
                    changed={(event) => props.changed(event, input)}
                    elementType={props.inputs[input].type}
                    label={props.inputs[input].label} />
            ))
        }
        <div onClick={(e) => props.submit(e)}
            className='btn'>
            Cadastrar Veículo
        </div>
    </form>
);

export default form;