import React from 'react';
import Calendar from './Calendar';
import SnowEffect from './components/SnowEffect';

import './styles/App.css';

function App() {
  return (
    <div className="App">
      <SnowEffect />
      <h1>Calendario de Adviento</h1>
      <Calendar />
    </div>
  );
}

export default App;
