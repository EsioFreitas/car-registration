import React from 'react';

import './Form.scss';

const form = props => (
    <form>
        {
            Object.keys(props.inputs).map(input => (
                <div>
                    
                </div>
            ))
        }
    </form>
);

export default form;