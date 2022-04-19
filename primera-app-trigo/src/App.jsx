import './App.css';

import NavBar from './components/NavBar/NavBar';
import UserGreeting from './components/ItemListContainer/ItemListContainer';
import React from 'react';




//USAR SIEMPRE HANDLE PARA LOS EVENTOS
function App() {
  return (
    <div className="App">
      <NavBar /> 
      <UserGreeting greeting="Welcome to my E-Commerce"/>
    </div>
  );
} 


export default App;
