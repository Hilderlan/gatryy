import React from 'react';
import Routes from './Routes';
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <div className="App" style={{maxWidth: 800, margin: '30px auto'}}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;
