import React, {Component} from 'react';

import Form from '../components/Form/Form';
import InputsHelper from '../helpers/inputs';

import './homePage.scss';


class HomePage extends Component{
    state = {
        inputsContent: InputsHelper,
    }
    render(){
        return(
            <div>
                <Form inputs={this.state.inputsContent}/>
            </div>
        )
    }
}

export default HomePage;