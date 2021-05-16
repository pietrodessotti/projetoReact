import React from 'react';
import TableJourney from 'components/Table/Journey/Journey';
import SidebarMenu from 'components/Table/Journey/Content';
import Menu from 'components/Table/Journey/Menu';
import FilterMenu from 'components/Table/Journey/Filter';


const journey = {
    "name": "Cobrança",
    "status": 1,
    "recipients": "20.210.000",
    "success": "30%",
    "id": "5f32ab1bbf56d11b4853a92c",
};

const sidebar = {
    "logotipo": "../components/Table/Journey/assets/images/logotipo.png",
    "logotipoAlt": "Logotipo",
    "graficoPizza": "./assets-new/assets/icons/chart-pie.svg",
    "graficoPizzaAlt": "Gráfico de Pizza",
    "foguete": "./assets-new/assets/icons/rocket.svg",
    "fogueteAlt": "Foguete",
    "amigos": "./assets-new/assets/icons/user-friends.svg",
    "amigosAlt": "Amigos",
    "nuvem": "./assets-new/assets/icons/ccm-cloud.svg",
    "nuvemAlt": "Nuvem",
    "linkExterno": "./assets-new/assets/icons/external-link-square-alt.svg",
    "linkExternoAlt": "Link Externo",
    "diamante": "./assets-new/assets/icons/gem-solid.svg",
    "diamanteAlt": "Diamante",
    "configuracoes": "./assets-new/assets/icons/tools.svg",
    "configuracoesAlt": "Configurações",
    "transacao": "./assets-new/assets/icons/exchange-alt.svg",
    "transacaoAlt": "Transação",
    "sair": "./assets-new/assets/icons/sign-out-alt.svg",
    "sairAlt": "Sair",
};

const contentMenu = {
    "logo": "assets-new/assets/images/acme-logo.png",
    "logoAlt": "Logo",
    "mais": "./assets-new/assets/icons/plus.svg",
    "maisAlt": "Nova Jornada",
};

const filter = {
    "todas": "./assets-new/assets/icons/table.svg",
    "todasAlt": "Todas",
    "enviando": "./assets-new/assets/icons/paper-plane.svg",
    "enviandoAlt": "Enviando",
    "ativadas": "./assets-new/assets/icons/play-circle.svg",
    "ativadasAlt": "Ativadas",
    "configurando": "./assets-new/assets/icons/pen.svg",
    "configurandoAlt": "Configurando",
    "ociosa": "./assets-new/assets/icons/bed.svg",
    "ociosaAlt": "Ociosa",
    "concluida": "./assets-new/assets/icons/check.svg",
    "concluidaAlt": "Concluída",
};

const PagesIndexSearch = () => {

    return (
        <div className="Search">
            <SidebarMenu sidebar={sidebar} />
            <Menu contentMenu={contentMenu} />
            <FilterMenu filter={filter} />
            <TableJourney journey={journey} />
        </div>
    )

}

export default PagesIndexSearch;