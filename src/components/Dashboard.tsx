import Box from '@mui/material/Box';
import { useData } from '../hooks/contexts/useData';
import { FlexChartContainer } from '../styles/StyledChart';
import TradesData from './TradesData';
import CandlestickChart from './ui/chart/CandlestickChart';
import VolumeAnalysisChart from './ui/chart/VolumeAnalysisChart';
import MarketDataDisplaysGrid from './ui/grids/ResponsiveDataDisplay';
import MarketInfo from './ui/headers/MarketInfo';

const Dashboard = () => {
    const { ticker24hData, kLinesData } = useData();
 
    if (!ticker24hData  || !kLinesData) {
        return null
    }

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
             <MarketInfo data={ticker24hData} currencyPair={ticker24hData.symbol} price={''} />
            <FlexChartContainer>
                <VolumeAnalysisChart klinesData={Array.isArray(kLinesData) ? kLinesData: []} />
                <CandlestickChart data={Array.isArray(kLinesData) ? kLinesData: []} />
            </FlexChartContainer>
            <MarketDataDisplaysGrid data={ticker24hData} />
            <TradesData />
        </Box>
    );
}
export default Dashboard;
