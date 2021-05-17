import React from 'react';
import './index.css';

import all from '../../assets/icons/table.svg';
import paperPlane from '../../assets/icons/paper-plane.svg';
import playCircle from '../../assets/icons/play-circle.svg';
import pen from '../../assets/icons/pen.svg';
import bed from '../../assets/icons/bed.svg';
import check from '../../assets/icons/check.svg';


const Filter = ({ journeys, handleClickJourney }) => {
    const icons = [all, paperPlane, playCircle, pen, bed, check];

    return (
        <div id="filter">
            <h1>Jornadas</h1>
            {journeys && journeys.journeysInfo && journeys.journeysInfo.length > 0 ? journeys.journeysInfo.map((journey, i) => (
                <div className={`options ${journeys.journeysApplied[i] ? 'active' : 'disabled'}`}
                    key={journey.id}
                    onClick={() => handleClickJourney(i)}>
                    <img src={icons[i]} alt='' />
                    <p>{journey.name}</p>
                    <span>{journey.quantity}</span>
                </div>
            ))
            : null}
        </div>
    );
};

export default Filter;