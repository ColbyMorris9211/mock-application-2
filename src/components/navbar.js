import React from 'react';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import { useNavigate } from 'react-router-dom';
import './navbar.css';

function BasicExample() {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <div className='nav-bar'>
      <Toolbar className='tool-bar' />
      <Divider />
      <List className='list-items'>
        <ListItem>
          <ListItemButton onClick={() => handleNavigate('/home')}>
            <ListItemText primary='Home' />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton onClick={() => handleNavigate('/Services')}>
            <ListItemText primary='Products' />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton onClick={() => handleNavigate('/about')}>
            <ListItemText primary='About Us' />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton onClick={() => handleNavigate('/contact')}>
            <ListItemText primary='Contact Us' />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton onClick={() => handleNavigate('/adoptions')}>
            <ListItemText primary='Adoptions' />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton onClick={() => handleNavigate('/faqs')}>
            <ListItemText primary='Resources/FAQs' />
          </ListItemButton>
        </ListItem>
      </List>
    </div>
  );
}

export default BasicExample;
