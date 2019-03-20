import React, { Component } from 'react';


import Form from '../components/Form/Form';
import InputsHelper from '../helpers/inputs';
import DBHelper from '../helpers/DB';
import Table from '../components/Table/Table';
import Modal from '../components/UI/Modal/Modal';

import './homePage.scss';

class HomePage extends Component {
    state = {
        inputsContent: InputsHelper,
        dbState: DBHelper,
        dataDownload: [],
        showModal: false,
        error: false
    }

    render() {
        return (
            <main>
                <h1 style={{ textTransform: 'uppercase', fontWeight: 'bold' }}>Car registration</h1>

                <Modal show={this.state.showModal} cancelSubmit={this.cancelSubmit}>
                    <h2 style={this.state.error ? { color: '#F2234C' } : null}>
                        {this.state.error ? 'Carro já cadastrado' : 'cadastro'}
                    </h2>
                    <Form inputs={this.state.inputsContent}
                        changed={this.changed}
                        submit={this.submit}
                        cancelSubmit={this.cancelSubmit}
                        disable={this.state.error} />
                </Modal>

                <Table db={this.state.dbState}
                    downloadData={this.downloadData}
                    dataDownload={this.state.dataDownload}
                    cadastrar={this.showModal} />
            </main>
        )
    }

    downloadData = () => {
        let data = [];
        this.state.dbState.forEach(element => {
            let dataEl = {
                id: element.id,
                proprietario: element.car.dono['nome'],
                cpf: element.car.dono['cpf'],
                marca: element.car['marca'],
                modelo: element.car['modelo'],
                ano: element.car['ano'],
                renavam: element.car['renavam'],
                placa: element.car['placa'],
                cor: element.car['cor']
            };

            data.push(dataEl);
        });

        data.sort( (a, b) => {
            return  a.proprietario.toUpperCase() < b.proprietario.toUpperCase() ? -1 : a.dono.toUpperCase() > b.dono.toUpperCase()   ? 1 : 0
        })

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
                dono: {
                    nome: dataCar['dono'].value,
                    cpf: dataCar['cpf'].value,
                },
                marca: dataCar['marca'].value,
                modelo: dataCar['modelo'].value,
                ano: dataCar['ano'].value,
                renavam: dataCar['renavam'].value,
                placa: dataCar['placa'].value,
                cor: dataCar['cor'].value,
            }
        }

        for (let data in dataCar) {
            dataCar[data].value = ''
        }

        const tableCar = [...this.state.dbState];
        tableCar.push(data);

        this.setState({ dbState: tableCar, inputChange: dataCar });

        this.cancelSubmit();
    }

    showModal = () => {
        this.setState({ showModal: true });
    }

    cancelSubmit = () => {
        this.setState({ showModal: false });
        const dataCar = this.state.inputsContent;
        for (let data in dataCar) {
            dataCar[data].value = ''
        }
        this.setState({ inputChange: dataCar });
    }
}

export default HomePage;