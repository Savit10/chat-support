import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from 'next/link';
import TemporaryDrawer from './TemporaryDrawer';
import { useAuth } from '../context/authContext';
import AccountMenu from './AccountMenu';

function Navbar(props) {

  const { userLoggedIn } = useAuth();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <TemporaryDrawer />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {props.page}
          </Typography>
          <Button sx={{color: 'white'}}>{userLoggedIn? <AccountMenu/>: <Link href="/auth/login"><p style={{color:"white"}}>Login</p></Link>}</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
