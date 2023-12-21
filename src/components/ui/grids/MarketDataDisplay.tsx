import { CardContent, Grid, Typography, styled, useMediaQuery, useTheme } from '@mui/material';

const StyledCardContent = styled(CardContent)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '16px',
    '&:last-child': {
        paddingBottom: '16px',
    },
    [theme.breakpoints.down('sm')]: {
        padding: '8px',
        '&:last-child': {
            paddingBottom: '8px',
        },
    },
}));

export const MarketDataDisplay = ({ title, value, color }: { title: string, value: string, color?: string }) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    return (
        <Grid item xs={12} sm={12}>
            <StyledCardContent>
                <Typography color="textSecondary" gutterBottom={isMobile} fontSize="18px">
                    {title}
                </Typography>
                <Typography color={color || "textPrimary"}>
                    {value}
                </Typography>
            </StyledCardContent>
        </Grid>
    )
}



