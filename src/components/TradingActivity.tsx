import { Grid, Typography, useTheme } from '@mui/material';
import { StyledBox } from '../styles/StyledBox';
import { Ticker24hDataType } from '../types';
import { formatTimestamp } from '../utils/Helpers';

const MarketActivityDetails = ({ data}: { data: Ticker24hDataType }) => {
    const { openTime, closeTime, firstId, lastId, count } = data;
    const theme = useTheme();
    return (
        <Grid container xs={12} sm={6} md={12} spacing={2} justifyContent="space-evenly" alignItems="stretch" margin="0 0 2rem 0">
            {[{ label: 'Open Time', value: openTime },
            { label: 'Close Time', value: closeTime },
            { label: 'First ID', value: firstId },
            { label: 'Last ID', value: lastId },
            { label: 'Trade Count', value: count }].map((item, index) => (
                <Grid item xs={12} sm={6} md={2} key={index}>
                    <StyledBox
                        flexDirection="column"
                        justifyContent="center"
                        alignItems="center"
                        padding="1"
                        gap="8px"
                        theme={theme}>
                        <Typography variant="body2">{item.label}: <br/>{formatTimestamp(item.value)}</Typography>
                    </StyledBox>
                </Grid>
            ))}
        </Grid>
    );
};

export default MarketActivityDetails;


