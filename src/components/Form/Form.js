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

        <div className='form__btns'>

            <div className='btn btn--cancel'
                 onClick={props.cancelSubmit}>
                Cancelar
            </div>
            <div onClick={(e) => props.submit(e)}
                className='btn btn-cadastro'>
                Cadastrar
            </div>
        </div>
    </form>
);

export default form;