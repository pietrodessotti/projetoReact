import React from 'react';
import './Menu';
import '../../../style/main.css'

const Menu = ({ contentMenu }) => (
    <div className="menu">
        <div className="contentMenu">
            <div className="user">
                <span>A</span>
                    <img src={contentMenu.logo} alt={contentMenu.logoAlt} />
            </div>
            <div className="search">
                <div className="searchInput">
                    <i className="material-icons">search</i>
                    <input type="text" placeholder="Buscar" />
                </div>
                <button className="newJourney" onClick="addJourney"><img src={contentMenu.mais}
                    alt={contentMenu.maisAlt} /> Nova Jornada</button>
            </div>
        </div>
    </div>

);

export default Menu;