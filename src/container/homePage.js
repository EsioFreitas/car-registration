import React, { Component } from 'react';


import Form from '../components/Form/Form';
import InputsHelper from '../helpers/inputs';
import DBHelper from '../helpers/DB';
import Table from '../components/Table/Table';

import './homePage.scss';

class HomePage extends Component {
    state = {
        inputsContent: InputsHelper,
        dbState: DBHelper,
        dataDownload: []
    }

    render() {
        return (
            <main>
                <h1>Cadastre seu veículo</h1>
               
                        {/* <Form inputs={this.state.inputsContent}
                            changed={this.changed}
                            submit={this.submit} /> */}
                    
                    
                        <Table db={this.state.dbState}
                            downloadData={this.downloadData}
                            dataDownload={this.state.dataDownload} 
                            tableClasses='t'/>
                   
               
            </main>
        )
    }

    downloadData = () => {
        let data = [];
        this.state.dbState.forEach(element => {
            let dataEl = {
                id: element.id,
                marca: element.car['marca'],
                modelo: element.car['modelo'],
                ano: element.car['ano'],
                renavam: element.car['renavam'],
                placa: element.car['placa'],
                cor: element.car['cor'],
                obs: element.car['obs'],
            };

            data.push(dataEl);
        });

        this.setState({ dataDownload: data });
    }

    changed = (event, idx) => {
        const inputsChange = { ...this.state.inputsContent };
        const inputChange = { ...inputsChange[idx] }
        inputChange.value = event.target.value;
        inputsChange[idx] = inputChange;

        this.setState({ inputsContent: inputsChange })
    }

    submit = (e) => {
        e.preventDefault();
        const dataCar = this.state.inputsContent;
        if (dataCar['marca'].value === '' ||
            dataCar['renavam'].value === '' ||
            dataCar['placa'].value === '') {
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

        for (let data in dataCar) {
            dataCar[data].value = ''
        }

        const tableCar = [...this.state.dbState];
        tableCar.push(data);

        this.setState({ dbState: tableCar, inputChange: dataCar });
    }
}

export default HomePage;