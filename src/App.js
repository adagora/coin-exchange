import React from 'react';
import CoinList from './components/CoinList/CoinList';
import Header from './components/Header/Header';
import AccountBalance from './components/AccountBalance/AccountBalance.jsx';
import styled from 'styled-components';

const Div = styled.div`
      text-align: center;
      background-color: rgb(48, 48, 92);
      color: #cccccc;

`; 

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      balance: 10000,
      coinData: [
        {
          name: 'Bitcoin',
          ticker: 'BTC',
          price: 9999.99
        },
        {
          name: 'Ethereum',
          ticker: 'ETH',
          price: 300
        },
        {
          name: 'Tether',
          ticker: 'USDT',
          price: 1.0
        },
        {
          name: 'Cardano',
          ticker: 'ADA',
          price: 0.14
        },
      ]
    }
  }

  render() {
    return (
      <Div className="App">
        <Header />
        <AccountBalance amount={this.state.balance} />
        <CoinList coinData={this.state.coinData} />
        
      </Div>
    );
  }

}

export default App;
