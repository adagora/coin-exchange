import React from 'react';
import CoinList from './components/CoinList/CoinList';
import ExchangeHeader from './components/ExchangeHeader/ExchangeHeader';
import AccountBalance from './components/AccountBalance/AccountBalance.jsx';
import styled from 'styled-components';
import axios from 'axios';

const Div = styled.div`
      text-align: center;
      background-color: rgb(48, 48, 92);
      color: #cccccc;

`; 

const COIN_COUNT = 15;
const formatPrice = price => parseFloat(Number(price).toFixed(3));

class App extends React.Component {
  state = {
      balance: 10000,
      showBalance: true,
      coinData: [
      /*
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
        */
      ]
    }
  
  componentDidMount = async () => {
    const response = await axios.get('https://api.coinpaprika.com/v1/coins');
    const coinIds = response.data.slice(0, COIN_COUNT).map(coin => coin.id);
    const tickerUrl = 'https://api.coinpaprika.com/v1/tickers/';
    const promises = coinIds.map(id => axios.get(tickerUrl + id));
    const coinData = await Promise.all(promises);
    const coinPriceData = coinData.map(function(response) {
      const coin = response.data;
      return {
        key: coin.id,
        name: coin.name,
        ticker: coin.symbol,
        balance: 0,
        price: formatPrice(coin.quotes.USD.price),
      };
    })
    //Retrieve the prices
    this.setState({ coinData: coinPriceData });
  }

  handleBalanceVisibilityChange = () => {
    this.setState( function(oldState) {
      return {
        ...oldState,
        showBalance: !oldState.showBalance
      }
    });

  }
  // passing down this event Handler as props and calling event Handler in child component and passing information back to the parent
  handleRefresh = async (valueChangeId) => {
    const tickerUrl = `https://api.coinpaprika.com/v1/tickers/${valueChangeId}`;
    const response = await axios.get(tickerUrl);
    const newPrice = formatPrice(response.data.quotes.USD.price);
    const newCoinData = this.state.coinData.map(function( {values} ) {
      let newValues = {...values};
      if ( valueChangeId === values.key ) {
        newValues.price *= newPrice;
        }
        return newValues;
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
