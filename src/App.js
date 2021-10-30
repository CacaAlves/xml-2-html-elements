import { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import Nav from './components/Nav'
import Form from './components/Form'
import DataVisualization from './components/DataVisualization'
import Error from './components/Error'

function App() {
  const [xmlData, setXmlData] = useState({
    cpfUsuario: null,
    dataHoraEnvioFormatada: null,
    idLote: null,
    listaLIVORetorno: [],
  });

  return (
    <div className="App">
     <Router>
       <Nav />
       <Switch>
         <Route exact path='/'>
          <Form setXmlData={setXmlData}/>
         </Route>
         
         <Route path='/data-visualization'>
            <DataVisualization processedData={xmlData} />
         </Route>

         <Route path='*'>
          <Error />
        </Route>
       </Switch>
     </Router>
    </div>
  );
}

export default App;