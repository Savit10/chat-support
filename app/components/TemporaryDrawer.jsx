import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import Link from 'next/link';
import Divider from '@mui/material/Divider';
import MenuIcon from '@mui/icons-material/Menu';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import Avatar from '@mui/material/Avatar';
import { useAuth } from '../context/authContext';
import LogoutIcon from '@mui/icons-material/Logout';
import ChatIcon from '@mui/icons-material/Chat';
import LoginIcon from '@mui/icons-material/Login';
import RegisterIcon from '@mui/icons-material/AssignmentInd';

export default function TemporaryDrawer() {
  const [open, setOpen] = useState(false);
  const { userLoggedIn } = useAuth();

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };


  const DrawerList = (
    <Box sx={{ width: 200 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        <ListItem key={'Home'} disablePadding>
          <Link href='/'>
          <ListItemButton>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary={'Home'} />
          </ListItemButton>
          </Link>
        </ListItem>
        <ListItem key={'Chat'} disablePadding>
          <Link href='/chat'>
            <ListItemButton>
              <ListItemIcon>
                <ChatIcon/>
              </ListItemIcon>
            <ListItemText primary={'Chat'} />
            </ListItemButton>
          </Link>
        </ListItem>
      </List>
      <Divider />
        {userLoggedIn? 
        <List>
          <ListItem key={'Profile'} disablePadding>
          <Link href='/profile'>
              <ListItemButton>
                <ListItemIcon>
                  <Avatar sx={{ width: 25, height: 25 }}/>
                </ListItemIcon>
                <ListItemText primary={'Profile'} />
              </ListItemButton>
          </Link>
          </ListItem>
          <ListItem key={'Logout'} disablePadding>
          <Link href='/auth/logout'>
              <ListItemButton>
                <ListItemIcon>
                  <LogoutIcon/>
                </ListItemIcon>
                <ListItemText primary={'Logout'} />
              </ListItemButton>
          </Link>
          </ListItem>
        </List>: 
        <List>
        <ListItem key={'Login'} disablePadding>
          <Link href='/auth/login'>
              <ListItemButton>
                <ListItemIcon>
                  <LoginIcon />
                </ListItemIcon>
                <ListItemText primary={'Login'} />
              </ListItemButton>
          </Link>
          </ListItem>
          <ListItem key={'Register'} disablePadding>
            <Link href='/auth/register'>
            <ListItemButton>
              <ListItemIcon>
                <RegisterIcon />
              </ListItemIcon>
            <ListItemText primary={'Register'} />
            </ListItemButton>
            </Link>
          </ListItem>
      </List>}
    </Box>
  );

  return (
    <div>
      <IconButton size="large" edge="start" color="inherit" aria-label="menu"  onClick={toggleDrawer(true)} sx={{
          mr: 2,
          minWidth: 0,
          width: 40, // Set the width to the desired size
          height: 40, // Set the height to the desired size
          borderRadius: '50%', // Makes the button circular
          padding: 0, // Remove extra padding
          backgroundColor: 'transparent', // Optional: Transparent background for a cleaner look
        }}>
            <MenuIcon sx={{ color: 'white' }}/>
      </IconButton>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}