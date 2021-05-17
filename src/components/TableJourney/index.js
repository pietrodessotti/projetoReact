import React from 'react';
import './index.css';


const TableJourney = ({ journey }) => (
    <div className="container">
        <section id="journey">
            <table id="data-table">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Destinatários</th>
                        <th>Sucesso</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody id="tableJourney">
                    <tr><td>{journey.name}</td>
                        <td>{journey.recipients}</td>
                        <td>{journey.success}</td>
                        <td>{journey.status}</td>
                    </tr>
                </tbody>
            </table>
        </section>
    </div>
)

export default TableJourney;