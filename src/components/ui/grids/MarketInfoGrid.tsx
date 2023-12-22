import { Grid } from '@mui/material';
import React from 'react';
import MarketDataDisplay from './MarketDataDisplay';

interface MarketDataCardsInfo {
    title: string;
    value: string;
}

interface MarketInfoGridPropsProps {
    data: MarketDataCardsInfo[];
}

const MarketInfoGrid: React.FC<MarketInfoGridPropsProps> = ({ data }) => {

    return (
        <Grid item xs={12} sm={8} container spacing={2} sx={{ flexWrap: 'wrap' }}>
            {data.map((item, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                    <MarketDataDisplay title={item.title} value={item.value} />
                </Grid>
            ))}
        </Grid>
    );
};

export default MarketInfoGrid;
