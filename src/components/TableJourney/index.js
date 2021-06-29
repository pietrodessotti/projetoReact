import React from 'react';
import './index.css';

const TableJourney = ({ journeys }) => (
    <div className='container'>
        <section id='journey'>
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
                    {journeys && journeys.journeysTable && journeys.journeysTable.length > 0 ? journeys.journeysTable.map((journey, index) => {
                        return (
                            (journeys.journeysApplied[journey.status] || journeys.journeysApplied[0]) && (
                                <tr>
                                    <td>{journey.name}</td>
                                    <td>{journey.recipients}</td>
                                    <td>{journey.success}</td>
                                    <td>{journey.status}</td>
                                </tr>
                            )
                        );
                    })
                        : null}
                </tbody>
            </table>
        </section>
    </div>
);

export default TableJourney;