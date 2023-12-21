import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import React from 'react';

export default function Header() {
  return (

    <AppBar position="static" sx={{ backgroundColor: '#000' }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ color: '#fff' }}>
          Market Data App
        </Typography>
      </Toolbar>
    </AppBar>

  );
}