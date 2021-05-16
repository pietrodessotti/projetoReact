import React from 'react';
import './Filter';

const FilterMenu = ({ filter }) => (
    <div id="filter">
        <h1>Jornadas</h1>

        <div class="options">
            <img src={filter.todas} alt={filter.todasAlt} />
            <p>Todas</p>
            <span>12</span>
        </div>
        <div class="options">
            <img src={filter.enviando} alt={filter.enviandoAlt} />
            <p>Enviando</p>
            <span>12</span>
        </div>
        <div class="options">
            <img src={filter.ativadas} alt={filter.ativadasAlt} />
            <p>Ativadas</p>
            <span>12</span>
        </div>
        <div class="options">
            <img src={filter.configurando} alt={filter.configurandoAlt} />
            <p>Configurando</p>
            <span>12</span>
        </div>
        <div class="options">
            <img src={filter.ociosa} alt={filter.ociosaAlt} />
            <p>Ociosa</p>
            <span>12</span>
        </div>
        <div class="options">
            <img src={filter.concluida} alt={filter.concluidaAlt} />
            <p>Concluída</p>
            <span>12</span>
        </div>
    </div>
);

export default FilterMenu;