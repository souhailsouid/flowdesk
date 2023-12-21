import { useQuery } from '@tanstack/react-query';
import { getCurrencyPair } from '../services/api/binance';

export const useFetchCurrencyPair = () => {
    const query = useQuery({
        queryFn: () => getCurrencyPair(),
        queryKey: ['currencyPairData'],
    });
    
    return query
    
}