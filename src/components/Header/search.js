import React, { useState } from 'react';


const name = [
    "Cobrança",
    "Promoção",
    "Divulgação novos serviços",
    "Envio de fatura",
    "Atualização de Cadastro",
    "Negociação de dívida",
    "Recuperação",
    "Crédito pré-aprovado"
];

const Search = () => {
    const [busca, setBusca] = useState('');

    const filterName = name.filter((name) => name.toLowerCase().includes(busca));

    return (
        <div className="Search">
            <input type="text" placeholder="Busca" value={busca} onChange={(ev) => setBusca(ev.target.value)} />
            {filterName.map((name) => (
                <td key={name}>{name}</td>
            ))}
        </div>
    )
}

export default Search;