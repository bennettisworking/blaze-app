import React from 'react';
import logo from './blazelogo-blue.png';
import Customers from './components/Customers';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <img className="app__logo" src={logo}></img>
      <Customers/>
    </div>
  );
}

export default App;