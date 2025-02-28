import React from 'react';
import './header.css';
import petcoLogo from '../images/petco.jpeg';
import { Home, LineWeight } from '@mui/icons-material';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { IconButton } from '@mui/material'; 
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import FormControl from '@mui/material/FormControl';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useNavigate } from 'react-router-dom';

function Header() {

const navigate = useNavigate();

const handleNavigate = (path) => {
  navigate(path);
};

const BarStyling = {width:"20rem",background:"#F2F1F9", border:"none", padding:"0.5rem"};
  return (
    <header>
        <div className='header-container'>
            <div className='logo-container'>
                <img style={{maxWidth:90, maxHeight: 90}} src={petcoLogo}></img>
            </div>
            <div className='search-container'>
            <FormControl style={{color: "success"}} fullWidth sx={{ m: 1 }}>
              
              <OutlinedInput
                id="outlined-adornment-amount"
                style={{backgroundColor: "#C3C3C3"}}
                startAdornment={<InputAdornment position="Search"><SearchIcon style={{color: 'white'}}/></InputAdornment>}
                label="Search"
              />
              <InputLabel style={{color: 'white'}} htmlFor="outlined-adornment-amount">Search</InputLabel>
            </FormControl>              
            </div>
            <div className='icon-container'>
              <div className='icon-button settings'>
                <IconButton onClick={() => handleNavigate('/Settings')} style={{color: 'whitesmoke'}}>
                  <SettingsIcon style={{fontSize: 40}}/>
                </IconButton>
              </div>

              <div className='icon-button settings'>
                <IconButton className='icon-button' style={{color: 'whitesmoke'}}>
                  <AccountCircleIcon style={{fontSize: 40}}/>
                </IconButton>
              </div>

              <IconButton className='icon-button' style={{color: 'whitesmoke'}}>
                <ShoppingCartIcon style={{fontSize: 40}}/>
              </IconButton>
            </div>
        </div>
    </header>
  );
}

export default Header;
