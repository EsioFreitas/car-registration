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
                <Form inputs={this.state.inputsContent}
                      changed={this.changed} 
                      submit={this.submit}/>
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

    submit = () => {
        const dataCar = this.state.inputsContent;
        if(dataCar['marca'].value === '' ||
           dataCar['renavam'].value === '' ||
           dataCar['placa'].value === ''){
            return;
        }
        const data = {
            id: this.state.dbState.length + 1,
            car: {
                marca: dataCar['marca'].value,
                modelo: dataCar['modelo'].value,
                ano: dataCar['ano'].value,
                renavam: dataCar['renavam'].value,
                placa: dataCar['placa'].value,
                cor: dataCar['cor'].value,
                obs: dataCar['obs'].value,
            }
        }

        for(let data in dataCar){
            dataCar[data].value = ''
        }

        const tableCar = [...this.state.dbState];
        tableCar.push(data);

        this.setState({dbState: tableCar, inputChange: dataCar});

        console.log(data)
    }
}

export default HomePage;