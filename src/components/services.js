import React from 'react';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import './services.css';
import productImage from '../images/purina.jpeg';
import { useNavigate } from 'react-router-dom';
const productList = ['Product 1', 'Product 2', 'Product 3', 'Product 4', ' Product 5', 'Product 6','Product 7','Product 8'];

const currencies = ["$0 < $10", "$11 < $50", "$51 < $100"]
const Brands = ["Purina", "Blue Buffalo", "Iams", "Hill's"]
const PetType = ["Dog", "Cat", "Hamster", "Gerbil"]



function Services() {

  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <section id="services" className='main-content'>
      <div>
        <h1>All Products</h1>
      </div>
      <div className='filter-container'>
        <h1 className='filter-header'>Filter Options:</h1>
        <div className='filter'>
          <TextField
              id="filter-by-price"
              select
              label="Price"
              helperText="Filter by Price Range"
              variant="filled"
            >
              {currencies.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
        </div>

        <div className='filter'>
          <TextField
            id="filter-by-brand"
            select
            label="Brands"
            helperText="Filter by Brand"
            variant="filled"
          >
            {Brands.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
        </div>

        <div>
          <TextField
            id="filter-by-pet-type"
            select
            label="Pet Type"
            helperText="Filter by Pet Type"
            variant="filled"
          >
            {PetType.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
        </div>

      </div>
      <div className='productContainer'>
        {
          productList.map((element) =>{
            return(
              <div className='box'>
              <div className='content'>
                <div className='img-box'>
                  <img style={{maxWidth:90, maxHeight: 90}} className='' src={productImage}></img>
                </div>
                <div className='details'>
                  <div className='info'>
                    <h3>Blue Buffalo Chow</h3>
                    <p>price: $50.99</p>
                  </div>
                  <button onClick={() => handleNavigate('/ProductDetails')} className="details-button">More Details</button>
                </div>
              </div>
            </div>
            )
          })
        }
      </div>
    </section>
  );
}

export default Services;
