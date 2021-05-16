import React from 'react';
import './Content'

const SidebarMenu = ({ sidebar }) => (
    <div className="sidebar">
        <div className="sidebar-menu">
            <div className="logo">
                <li><img src={sidebar.logotipo} alt={sidebar.logotipoAlt} /></li>
            </div>

            <li><img src={sidebar.graficoPizza} alt={sidebar.graficoPizzaAlt} /></li>
            <li><img src={sidebar.foguete} alt={sidebar.fogueteAlt} /></li>
            <li><img src={sidebar.amigos} alt={sidebar.amigosAlt} /></li>
            <div class="separator">
                <li><img src={sidebar.nuvem} alt={sidebar.nuvemAlt} /></li>
            </div>
            <li><img src={sidebar.linkExterno} alt={sidebar.linkExternoAlt} /></li>
            <div className="footer-menu">
                <li><img src={sidebar.diamante} alt={sidebar.diamanteAlt} /></li>
                <li><img src={sidebar.configuracoes} alt={sidebar.configuracoesAlt} /></li>
                <li><img src={sidebar.transacao} alt={sidebar.transacaoAlt} /></li>
                <li><img src={sidebar.sair} alt={sidebar.sairAlt} /></li>
            </div>
        </div>
    </div>


);

export default SidebarMenu;