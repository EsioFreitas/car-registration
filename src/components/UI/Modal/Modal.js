import React, {Fragment} from 'react';

import Backdrop from '../Backdrop/Backdrop';

import './Modal.scss'

const modal = props => (
    <Fragment>
        <Backdrop show={props.show} clicked={props.cancelSubmit}/>
        <div className='modal'
             style={{
                transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: props.show ? '1' : '0'
             }}>
            {props.children}
        </div>
    </Fragment>
);

export default modal;