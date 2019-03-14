import React from 'react';

import Input from '../UI/Input/Input';

import './Form.scss';

const form = props => (
    <div>
        {
            Object.keys(props.inputs).map(input => (
                <Input  key={input} 
                        elementConfig={props.inputs[input].config} 
                        value={props.inputs[input].value} 
                        changed={(event)=>props.changed(event, input)}
                        elementType={props.inputs[input].type}
                        label={props.inputs[input].label}/>
            ))
        }
        <button onClick={props.submit}>
            Cadastrar Veículo
        </button>
    </div>
);

export default form;