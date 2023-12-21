import { useState } from 'react';
import { fetchCryptoData } from '../services/api/binance';
import { useData } from './contexts/useData';

export const useSubmitForm = (selectedSymbol: string) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<unknown>(null);
    const { setTickerData, setTicker24hData, setTradesData, setKLinesData } = useData()

    const submitForm = async () => {
            try {
                setLoading(true);
                setError(null);
                const { tickerData, ticker24hData, tradesData, kLinesData } = await fetchCryptoData(selectedSymbol)
                setTickerData(tickerData);
                setTicker24hData(ticker24hData);
                setTradesData(tradesData);
                setKLinesData(kLinesData)
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
    }

    return { loading, error, submitForm };
};
