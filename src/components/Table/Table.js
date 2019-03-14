import React, {Fragment} from 'react';
import { CSVLink } from "react-csv";

import './Table.scss';

const table = props => {

    return(
        <Fragment>
            <table>
                <caption>Carros cadastrados</caption>
                <thead>
                    <tr>
                        <td>Marca</td>
                        <td>Modelo</td>
                        <td>Ano</td>
                        <td>Renavam</td>
                        <td>Placa</td>
                        <td>Cor</td>
                        <td>Observações</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.db.map((db, idxC) => (
                            <tr key={db.id}>
                                {Object.keys(db.car).map((carTd, idx)=>(
                                    <td key={idx}>{props.db[idxC].car[carTd]}</td>
                                ))}
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <CSVLink data={props.dataDownload} 
                         onClick={()=>props.downloadData()}
                         filename={"car-registration.csv"}
                         className="btn btn-primary">
                Download me
            </CSVLink>;
        </Fragment>
    );
}

export default table;