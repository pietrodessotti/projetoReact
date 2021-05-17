import React from 'react';
import './index.css';

import all from '../../assets/icons/table.svg';
import paperPlane from '../../assets/icons/paper-plane.svg';
import playCircle from '../../assets/icons/play-circle.svg';
import pen from '../../assets/icons/pen.svg';
import bed from '../../assets/icons/bed.svg';
import check from '../../assets/icons/check.svg';

const icons = [all, paperPlane, playCircle, pen, bed, check];



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