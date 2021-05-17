import React, { useState } from 'react';
import './index.css';
import SearchIcon from '@material-ui/icons/Search';

import logo from '../../assets/images/acme-logo.png';
import plus from '../../assets/icons/plus.svg';
import NewJourneyModal from 'components/NewJourneyModal';
import { Tooltip } from '@material-ui/core';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    return (
        <section>
            <div className='menu'>
                <div className='contentMenu'>
                    <div className='user'>
                        <Tooltip title='Antônio da Silva' placement="right" arrow>
                            <span>
                                A
                            </span>
                        </Tooltip>

                        <img src={logo} alt='Logo Acme do Projeto D1' />
                    </div>
                    <div className='search'>
                        <div className="searchInput">
                            <SearchIcon className="searchIcon" />
                            <input type="text" placeholder="Buscar" />
                        </div>
                        <button className="newJourney" onClick={openModal}><img src={plus}
                            alt='Botão nova jornada do Projeto D1' /> Nova Jornada</button>
                    </div>
                </div>
            </div>
            <NewJourneyModal isOpen={isOpen} closeModal={closeModal} />
        </section>
    );
};

export default Header;