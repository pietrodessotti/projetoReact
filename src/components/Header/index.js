import React from 'react';
import './index.css';
import SearchIcon from '@material-ui/icons/Search';

import logo from '../../assets/images/acme-logo.png';
import plus from '../../assets/icons/plus.svg'

const Header = () => (
    <section>
        <div className="menu">
            <div className="contentMenu">
                <div className="user">
                    <span>A</span>
                    <img src={logo} alt='Logo Acme do Projeto D1' />
                </div>
                <div className="search">
                    <div className="searchInput">
                        <SearchIcon className="searchIcon" />
                        <input type="text" placeholder="Buscar" />
                    </div>
                    <button className="newJourney" onClick="addJourney"><img src={plus}
                        alt='Botão nova jornada do Projeto D1' /> Nova Jornada</button>
                </div>
            </div>
        </div>
    </section>
);

export default Header;