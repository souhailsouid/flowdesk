// src/api/binance.ts
import axios from 'axios';

const binanceApi = axios.create({
  baseURL: 'https://api.binance.com/api/v3',
});

export const getCurrencyPair = () => {
  return binanceApi.get(`/ticker/price`);
};
export const getTicker = (symbol: string) => {
    return binanceApi.get(`/ticker/price?symbol=${symbol}`);
  };

export const get24hTicker = (symbol: string) => {
  return binanceApi.get(`/ticker/24hr?symbol=${symbol}`);
};

export const getTrades = (symbol: string) => {
  return binanceApi.get(`/trades?symbol=${symbol}`);
};
export const getKLines = (symbol: string) => {
  return binanceApi.get(`/klines?symbol=${symbol}&interval=1m&limit=1000`);
}


export const fetchCryptoData = async (selectedSymbol: string) => {
  try {
    const [tickerResponse, ticker24hResponse, tradesResponse, kLinesResponse] = await Promise.all([
      getTicker(selectedSymbol),
      get24hTicker(selectedSymbol),
      getTrades(selectedSymbol),
      getKLines(selectedSymbol)
    ]);

    return {
      tickerData: tickerResponse.data,
      ticker24hData: ticker24hResponse.data,
      tradesData: tradesResponse.data,
      kLinesData: kLinesResponse.data
    };
  } catch (error) {
    console.error(error);
    throw error;
  }
};
