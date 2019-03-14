import React from 'react';

import './Table.scss';

const table = props => {

    return(
        <table>
            {
                props.db.map(db => (
                    <div>
                        oi
                    </div>
                ))
            }
        </table>
    );
}

export default table;