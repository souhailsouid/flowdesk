import React, { useMemo } from 'react';
import { Chart } from 'react-charts';
import { StyledChartContainer } from '../../../styles/StyledChart';
import { TradeDataType } from '../../../types';
const TradePriceChart = ({ tradesData }: { tradesData: TradeDataType[] }) => {

    const formattedData = [
        {
            label: 'Trade Prices',
            data: tradesData.map(trade => ({
                primary: new Date(trade.time), // Convert timestamp to Date
                price: parseFloat(trade.price) // Convert string price to number
            }))
        }
    ];

    // Configure primary axis for time
    const primaryAxis = useMemo(
        () => ({
            getValue: (datum: { primary: Date; }) => datum.primary,
            scaleType: 'time' as const 
        }),
        []
    );

    const secondaryAxes = useMemo(
        () => [
            {
                getValue: (datum: { price: number }) => datum.price,
                elementType: 'line' as const // Update the elementType to 'line'
            }
        ],
        []
    );

    return (
        <StyledChartContainer height='450px' width="600px" margin="auto" boxShadow='none' >
            <Chart
                options={{
                    data: formattedData,
                    primaryAxis,
                    secondaryAxes,
                }}
            />

        </StyledChartContainer>
    );
};

export default TradePriceChart;
