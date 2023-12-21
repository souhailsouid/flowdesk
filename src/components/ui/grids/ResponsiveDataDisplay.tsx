import { Divider, Grid } from '@mui/material';
import React from 'react';
import { parseAndFormatNumber } from '../../../utils/Helpers';
import { MarketDataDisplay } from './MarketDataDisplay';


interface MarketData {
    lastQty: string;
    bidQty: string;
    askQty: string;
    openPrice: string;
    weightedAvgPrice: string;
    prevClosePrice: string;
}

const marketDataItems = [
    { title: 'Last Quantity', key: 'lastQty' },
    { title: 'Bid Quantity', key: 'bidQty' },
    { title: 'Ask Quantity', key: 'askQty' },
    { title: 'Open Price', key: 'openPrice', isPrice: true },
    { title: 'Weighted Avg Price', key: 'weightedAvgPrice', isPrice: true },
    { title: 'Previous Close Price', key: 'prevClosePrice', isPrice: true },
];
interface MarketDataDisplaysGridProps {
    data: MarketData;
}
const MarketDataDisplaysGrid: React.FC<MarketDataDisplaysGridProps> = ({ data }) => {
    return (
        <Grid container spacing={2} alignItems="center" justifyContent="space-between" sx={{ margin: 2 }}>
            {marketDataItems.map((item, index) => (
                <React.Fragment key={item.key}>
                    {index > 0 && <Divider orientation="vertical" flexItem />}
                    <Grid item>
                        <MarketDataDisplay
                            title={item.title}
                            value={item.isPrice ? `$${parseAndFormatNumber(data[item.key as keyof MarketData])}` : data[item.key as keyof MarketData]}
                        />
                    </Grid>
                </React.Fragment>
            ))}
        </Grid>
    );
};

export default MarketDataDisplaysGrid;
