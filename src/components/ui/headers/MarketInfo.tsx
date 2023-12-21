import useBinanceWebSocket from '../../../hooks/useBinanceWebSocket';
import { HeaderContainer } from '../../../styles/StyledHeaders';
import { Ticker24hDataType } from '../../../types';

import MarketInfoGrid from '../grids/MarketInfoGrid';
import ResponsiveGridItem from '../grids/ResponsiveGridItem';


type HeaderProps = {
    data: Ticker24hDataType;
    price: string;
    currencyPair: string;
};

const MarketInfo = ({ data, currencyPair }: HeaderProps) => {
    const { currentMessage } = useBinanceWebSocket(data.symbol);
    if (!currentMessage?.data) {
        return <p>Loading...</p>
    }
    return (
        <HeaderContainer container>
            <ResponsiveGridItem text={currencyPair} xsSize={12} smSize={2} />
            <ResponsiveGridItem text={currentMessage.data.a} xsSize={12} smSize={2} />
            <MarketInfoGrid data={
                [
                    { title: "24h Change", value: `${data.priceChange} ${data.priceChangePercent}%` },
                    { title: "24h High", value: data.highPrice },
                    { title: "24h Low", value: data.lowPrice },
                    { title: "24h Volume", value: data.volume }
                ]
            } />
        </HeaderContainer>
    );
};

export default MarketInfo;
