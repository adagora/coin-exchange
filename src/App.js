import React from 'react';
import logo from './logo.svg';
import './App.css';
import Coin from './components/Coin/Coin';




function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="React logo" className="App-logo" />
        <h1 className="App-title">
          Coin Exchange
        </h1>
      </header>
      <table className="coin-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Ticker</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        <Coin name="Bitcoin" ticker="BTC" price={10000} />
        <Coin name="Ethereum" ticker="ETH" price={260} />
        <Coin name="Tether" ticker="USDT" price ={1.0} />
        <Coin name="Cardano" ticker="ADA" price ={0.20} />
      </tbody>
      </table>
    </div>
  );
}

export default App;