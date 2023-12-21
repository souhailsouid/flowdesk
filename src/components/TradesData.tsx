import { Grid } from '@mui/material';
import { useData } from '../hooks/contexts/useData';
import { StyledChartContainer } from '../styles/StyledChart';
import MarketActivityDetails from './TradingActivity';
import PriceSummaryChart from './ui/chart/PriceSummaryChart';
import ChartComponent from './ui/chart/TradePriceChart';
import EnhancedTable from './ui/table/Table';

const TradesData = () => {
    const { tradesData, ticker24hData } = useData();

    if (!tradesData || !ticker24hData) {
        return null;
    }

    return (
        <Grid container spacing={1}>
            <Grid item xs={12} md={6}>
                <StyledChartContainer  width="650px" margin="0 0 2rem 0">
                    <PriceSummaryChart tickerData={ticker24hData} />
                </StyledChartContainer>
                <StyledChartContainer height='600px' width="650px">
                    <MarketActivityDetails data={ticker24hData} />
                    <ChartComponent tradesData={Array.isArray(tradesData) ? tradesData : []} />
                </StyledChartContainer>
            </Grid>
            <Grid item xs={12} md={6}>
                <EnhancedTable rows={Array.isArray(tradesData) ? tradesData : []} />
            </Grid>
        </Grid>

    );
};

export default TradesData;
