//import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import './index.css'

const Table = () => {
    //const [showTable, setShowTable] = useState(false);
    const data = [
        { id: 1, name: 'John', age: 30 },
        { id: 2, name: 'Jane', age: 25 },
        { id: 3, name: 'Bob', age: 40 },
    ];

    return (
        <div className='table-conatainer'>
            <Popup
                modal
                trigger={
                    <button type="button" className="trigger-button">
                        Show Table
                    </button>
                }
                position="top-left"
            >
                {close => (
                    <>
                        <div>
                            <table>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Age</th>
                                </tr>
                                {data.map((row) => (
                                    <tr key={row.id}>
                                        <td>{row.id}</td>
                                        <td>{row.name}</td>
                                        <td>{row.age}</td>
                                    </tr>
                                ))}
                            </table>
                        </div>
                        <button
                            type="button"
                            className="trigger-button"
                            onClick={() => close()}
                        >
                            Close
                        </button>
                    </>
                )}
            </Popup>
        </div>
    );
}

export default Table