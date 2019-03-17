import React from 'react';
import { CSVLink } from "react-csv";

import './Table.scss';

const table = props => {
    let dataTable = []
    props.db.forEach(element => {
        console.log(element.car['marca'])
        let dataEl = {
            dono: element.car['dono'].nome,
            cpf: element.car['dono'].cpf,
            marca: element.car['marca'],
            modelo: element.car['modelo'],
            ano: element.car['ano'],
            renavam: element.car['renavam'],
            placa: element.car['placa'],
            cor: element.car['cor'],
        };

        dataTable.push(dataEl);
    });

    return (
        <div className='table-section'>
            <div className='btn' 
                 onClick={props.cadastrar}>
                Cadastrar veículo
            </div>
            <div className='table-section__table'>

                <table >
                    <caption>Carros cadastrados</caption>

                    <thead className='table-section__thead'>
                        <tr>
                            <td>Proprietário</td>
                            <td>CPF</td>
                            <td>Marca</td>
                            <td>Modelo</td>
                            <td>Ano</td>
                            <td>Renavam</td>
                            <td>Placa</td>
                            <td>Cor</td>
                        </tr>
                    </thead>
                    <tbody className='table-section__tbody'>
                        {
                            dataTable.sort( (a, b) => {
                                return  a.dono < b.dono ? -1 : a.dono > b.dono ? 1 : 0
                            }).map((db, idx )=> (
                            <tr  key={idx}>
                                {Object.keys(db).map( el => (
                                    <td key={el}> 
                                        {db[el]}
                                    </td>
                                ))}
                            </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
            <CSVLink data={props.dataDownload}
                onClick={() => props.downloadData()}
                filename={"car-registration.csv"}
                className="btn btn-primary">
                Download
            </CSVLink>
        </div>
    );
}

//{props.db[idxC].car[carTd]}
export default table;