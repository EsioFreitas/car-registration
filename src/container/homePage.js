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
                <Form inputs={this.state.inputsContent}/>
                <Table db={this.state.dbState}/>
            </div>
        )
    }
}

export default HomePage;