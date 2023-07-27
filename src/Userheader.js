import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar style={{display: 'flex', justifyContent: 'center', gap: '16px', backgroundColor: 'rgb(85 67 66)'}}>
        
        <Button component={Link} to="/usermovie" color="inherit">
          Movies
        </Button>
        <Button component={Link} to="/home" color="inherit">
          Login
        </Button>
        <Button component={Link} to="/form" color="inherit">
          SignIn
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
