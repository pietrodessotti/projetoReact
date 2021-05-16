import React from 'react';
import TableJourney from './components/Table/Journey/Journey';
import SidebarMenu from './components/Table/Journey/Content';

const App = () => {
  const journey = {
    "name": "Cobrança",
    "status": 1,
    "recipients": "20.210.000",
    "success": "30%",
    "id": "5f32ab1bbf56d11b4853a92c",
  };
  
 

  const sidebar = {
    "logotipo": "./components/Table/Journey/assets/images/logotipo.png",
  }



  return (
    <div className="App">
      <SidebarMenu sidebar={sidebar} />
      <TableJourney journey={journey} />
    </div>
  )
};

export default App;

