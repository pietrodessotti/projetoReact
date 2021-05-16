import React from 'react';
import 'index.css';

import logo from '../../assets/images/acme-logo.png';
import plus from '../../assets/icons/plus.svg'

const Header = () => (
    <div className="menu">
        <div className="contentMenu">
            <div className="user">
                <span>A</span>
                    <img src={logo} alt='Logo Acme do Projeto D1' />
            </div>
            <div className="search">
                <div className="searchInput">
                    <i className="material-icons">search</i>
                    <input type="text" placeholder="Buscar" />
                </div>
                <button className="newJourney" onClick="addJourney"><img src={plus}
                    alt='Botão nova jornada do Projeto D1' /> Nova Jornada</button>
            </div>
        </div>
    </div>

);

export default Header;