import React from 'react';

import './Table.scss';

const table = props => {

    return(
        <table>
            <thead>
                <tr>
                    <td>Placa</td>
                    <td>Modelo</td>
                    <td>Cor</td>
                    <td>Ano</td>
                    <td>Chassi</td>
                    <td>Revisão</td>
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
    );
}

export default table;