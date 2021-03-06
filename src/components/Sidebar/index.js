import React from 'react';
import './index.css';

import logotipo from '../../assets/images/logotipo.png';
import chartPie from '../../assets/icons/chart-pie.svg';
import rocket from '../../assets/icons/rocket.svg';
import userFriends from '../../assets/icons/user-friends.svg';
import ccmCloud from '../../assets/icons/ccm-cloud.svg';
import linkExterno from '../../assets/icons/external-link-square-alt.svg';
import gemSolid from '../../assets/icons/gem-solid.svg';
import tools from '../../assets/icons/tools.svg';
import exchange from '../../assets/icons/exchange-alt.svg';
import signOut from '../../assets/icons/sign-out-alt.svg';
import { Tooltip } from '@material-ui/core';


const SidebarMenu = () => (

    <section>
        <nav id="sidebar">
            <div id="sidebar-menu">
                <div className="logo">
                    <li><img src={logotipo} alt='Logo da empresa Projeto D1' /></li>
                </div>

                <li>
                    <Tooltip title='Análises' placement="right" arrow>
                        <img src={chartPie} alt='Icone Gráfico de Pizza do Projeto D1' />
                    </Tooltip>
                </li>

                <li>
                    <Tooltip title='Jornadas' placement="right" arrow>
                        <img src={rocket} alt='Icone Foguete do Projeto D1' />
                    </Tooltip>
                </li>
                <li>
                    <Tooltip title='Clientes' placement="right" arrow>
                        <img src={userFriends} alt='Icone Amigos do Projeto D1' />
                    </Tooltip>
                </li>
                <div class="separator">
                    <li>
                        <Tooltip title='CCM Cloud' placement="right" arrow>
                            <img src={ccmCloud} alt='Icone Nuvem do Projeto D1' />
                        </Tooltip>
                    </li>
                </div>
                <li>
                    <Tooltip title='Versão 01' placement="right" arrow>
                        <img src={linkExterno} alt='Icone Link Externo do Projeto D1' />
                    </Tooltip>
                </li>
                <div className="footer-menu">
                    <li>
                        <Tooltip title='Administração' placement="right" arrow>
                            <img src={gemSolid} alt='Icone Diamante do Projeto D1' />
                        </Tooltip>
                    </li>
                    <li>
                        <Tooltip title='Help Desk' placement="right" arrow>
                            <img src={tools} alt='Icone Configurações do Projeto D1' />
                        </Tooltip>
                    </li>
                    <li>
                        <Tooltip title='Trocar Conta' placement="right" arrow>
                            <img src={exchange} alt='Icone de Transações do Projeto D1' />
                        </Tooltip>
                    </li>
                    <li>
                        <Tooltip title='Sair' placement="right" arrow>
                            <img src={signOut} alt='Icone de sair do Projeto D1' />
                        </Tooltip>
                    </li>
                </div>
            </div>
        </nav>
    </section >

);

export default SidebarMenu;