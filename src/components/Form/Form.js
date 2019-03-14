import React from 'react';

import Input from '../UI/Input/Input';

import './Form.scss';

const form = props => (
    <form>
        {console.log(props.inputs['ano'].config)}
        {
            Object.keys(props.inputs).map(input => (
                <Input  key={input} 
                        elementConfig={props.inputs[input].config} 
                        value={props.value} 
                        onChange={props.onChange}
                        elementType={props.inputs[input].type}
                        label={props.inputs[input].label}/>
            ))
        }
    </form>
);

export default form;