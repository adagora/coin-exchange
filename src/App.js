import React from 'react';
import CoinList from './components/CoinList/CoinList';
import ExchangeHeader from './components/ExchangeHeader/ExchangeHeader';
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
      showBalance: true,
      coinData: [
        {
          name: 'Bitcoin',
          ticker: 'BTC',
          price: 9999.99,
          balance: 1
        },
        {
          name: 'Ethereum',
          ticker: 'ETH',
          price: 300,
          balance: 3
        },
        {
          name: 'Tether',
          ticker: 'USDT',
          price: 1.0,
          balance: 0.5
        },
        {
          name: 'Cardano',
          ticker: 'ADA',
          price: 0.14,
          balance: 10000
        },
      ]
    }
    this.handleRefresh = this.handleRefresh.bind(this);
    this.handleBalanceVisibilityChange = this.handleBalanceVisibilityChange.bind(this);
  }
  
  handleBalanceVisibilityChange(){
    this.setState( function(oldState) {
      return {
        ...oldState,
        showBalance: !oldState.showBalance
      }
    });

  }
  // passing down this event Handler as props and calling event Handler in child component and passing information back to the parent
  handleRefresh(valueChangeTicker) {
    const newCoinData = this.state.coinData.map(function( {ticker, name, price, balance} ) {
      let newPrice = price;
      if ( valueChangeTicker === ticker ) {
        const randomPercentage = 0.995 + Math.random() * 0.01;
        newPrice= newPrice * randomPercentage;
        }
        return {
          ticker,
          name,
          price: newPrice,
          balance
  
        }
    });

      this.setState({ coinData: newCoinData });
  }

  render() {
    return (
      <Div className="App">
        <ExchangeHeader />
        <AccountBalance 
          amount={this.state.balance} 
          showBalance={this.state.showBalance} 
          handleBalanceVisibilityChange={this.handleBalanceVisibilityChange} />
        <CoinList 
          coinData={this.state.coinData}
          showBalance={this.state.showBalance} 
          handleRefresh={this.handleRefresh} />
      </Div>
    );
  }

}

export default App;
