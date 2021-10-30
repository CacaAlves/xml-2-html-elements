import React, { useState } from 'react';
import './App.css';
import Nav from './components/Nav'
import LicenseForm from './components/LicenseForm'
import DataVisualization from './components/DataVisualization'

function App() {
  const [renderedComponent, setRenderedComponent] = useState('License Form');
  const [xmlData, setXmlData] = useState('');

  return (
    <div className="App">
      <Nav setRenderedComponent={setRenderedComponent}/>

      {renderedComponent === 'License Form' ? 
      <LicenseForm xmlData={xmlData} setXmlData={setXmlData} 
      setRenderedComponent={setRenderedComponent} /> 
      : 
      <DataVisualization xmlData={xmlData} setRenderedComponent={setRenderedComponent}/>}

    </div>
  );
}

export default App;
