import React, { Fragment } from 'react';
import { CSVLink } from "react-csv";

import './Table.scss';

const table = props => {

    return (
        <div className='table-section'>

            <div className='table-section__table'>
                <table >
                    <caption>Carros cadastrados</caption>
                    <thead className='table-section__thead'>
                        <tr>
                            <td id='marca'>Marca</td>
                            <td id='modelo'>Modelo</td>
                            <td id='ano'>Ano</td>
                            <td id='renavam'>Renavam</td>
                            <td id='placa'>Placa</td>
                            <td id='cor'>Cor</td>
                            <td id='obs'>Observações</td>
                        </tr>
                    </thead>
                    <tbody className='table-section__tbody'>
                        {
                            props.db.map((db, idxC) => (
                                <tr key={db.id}>
                                    {Object.keys(db.car).map((carTd, idx) => (
                                        <td key={idx}>{props.db[idxC].car[carTd]}</td>
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

export default table;