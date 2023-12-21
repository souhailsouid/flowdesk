import { CardContent, Grid, Typography } from '@mui/material';
import React from 'react';

interface GridItemProps {
    text: string;
    xsSize: number | "auto";
    smSize: number| "auto";
    variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "subtitle1" | "subtitle2" | "body1" | "body2";
}


const ResponsiveGridItem: React.FC<GridItemProps> = ({ text, xsSize, smSize, variant = "h6" }) => {

    return (
        <Grid item xs={xsSize} sm={smSize} sx={{ textAlign:  "center" }}>
            <CardContent>
                <Typography variant={variant}>{text}</Typography>
            </CardContent>
        </Grid>
    );
};

export default ResponsiveGridItem;
