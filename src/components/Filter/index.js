import React from 'react';
import 'index.css';

import all from '../../assets/icons/table.svg';
import paperPlane from '../../assets/icons/paper-plane.svg';
import playCircle from '../../assets/icons/play-circle.svg';
import pen from '../../assets/icons/pen.svg';
import bed from '../../assets/icons/bed.svg';
import check from '../../assets/icons/check.svg';



const Filter = () => (
    <div id="filter">
        <h1>Jornadas</h1>

        <div className="options">
            <img src={all} alt='Icone Todos os filtros do Projeto D1' />
            <p>Todas</p>
            <span>12</span>
        </div>
        <div className="options">
            <img src={paperPlane} alt='Icone Enviar do Projeto D1' />
            <p>Enviando</p>
            <span>12</span>
        </div>
        <div className="options">
            <img src={playCircle} alt='Icone Ativadas do Projeto D1' />
            <p>Ativadas</p>
            <span>12</span>
        </div>
        <div className="options">
            <img src={pen} alt='Icone Configurando do Projeto D1' />
            <p>Configurando</p>
            <span>12</span>
        </div>
        <div className="options">
            <img src={bed} alt='Icone Ociosa do Projeto D1' />
            <p>Ociosa</p>
            <span>12</span>
        </div>
        <div className="options">
            <img src={check} alt='Icone Concluída do Projeto D1' />
            <p>Concluída</p>
            <span>12</span>
        </div>
    </div>
);

export default Filter;