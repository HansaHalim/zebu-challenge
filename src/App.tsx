import React from 'react';
import MasterForm from "./components/MasterForm";
import logo from './img/pizza.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <p style={{fontFamily:'Impact'}}>
          Welcome to Zebu's Pizzeria!
        </p>
      </header>
      <div className="body-form">
        <MasterForm/>
      </div>
    </div>
  );
}

export default App;
