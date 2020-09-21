import React from 'react';
import './App.css';
import Header from './components/Header';
import Balance from './components/Balance';
import AddTransactions from './components/AddTransactions'

function App() {
  return (
    <div className="container">
      <div className="app-wrapper">
        <Header/>
        <Balance/>
        <AddTransactions/>
      </div>
    </div>
  );
}

export default App;
