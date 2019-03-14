import React, {Component} from 'react';

import Form from '../components/Form/Form';
import InputsHelper from '../helpers/inputs';
import DBHelper from '../helpers/DB';
import Table from '../components/Table/Table';

import './homePage.scss';


class HomePage extends Component{
    state = {
        inputsContent: InputsHelper,
        dbState: DBHelper
    }

    render(){
        return(
            <div>
                <Form inputs={this.state.inputsContent} changed={this.changed}/>
                <Table db={this.state.dbState}/>
            </div>
        )
    }

    changed = (event, idx) => {
        console.log(idx)
        const inputsChange = {...this.state.inputsContent};
        const inputChange = {...inputsChange[idx]}
        inputChange.value = event.target.value;
        inputsChange[idx] = inputChange;

        this.setState({inputsContent: inputsChange})
    }
}

export default HomePage;