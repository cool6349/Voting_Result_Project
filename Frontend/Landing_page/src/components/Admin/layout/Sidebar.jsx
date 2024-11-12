import React from 'react';
import { Link } from 'react-router-dom';
import { List, ListItem, ListItemText, Divider } from '@mui/material';
import { Dashboard, Person, Settings } from '@mui/icons-material';

const Sidebar = () => {
  return (
    <div style={{ width: 250, height: '100vh', background: '#333', color: '#fff' }}>
      <List>
        <ListItem button>
          <Dashboard />
          <ListItemText primary="Dashboard" />
        </ListItem>
        <Divider />
        <ListItem button>
          <Person />
          <ListItemText primary="Users" />
        </ListItem>
        <ListItem button>
          <Settings />
          <ListItemText primary="Settings" />
        </ListItem>
      </List>
    </div>
  );
};

export default Sidebar;
