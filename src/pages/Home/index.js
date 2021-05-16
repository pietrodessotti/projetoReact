import React from 'react';
import TableJourney from 'components/TableJourney';
import SidebarMenu from 'components/Sidebar';
import Header from 'components/Header';
import Filter from 'components/Filter';


// const journey = {
//     "name": "Cobrança",
//     "status": 1,
//     "recipients": "20.210.000",
//     "success": "30%",
//     "id": "5f32ab1bbf56d11b4853a92c",
// };

const Home = () => {

    return (
        <div className="search">
            <SidebarMenu />
            <Header />
            <Filter />
            <TableJourney />
        </div>
    )

}

export default Home;