import React from 'react';
import './home.css';
import Carousel from 'react-material-ui-carousel';
import { Paper, Box } from '@mui/material';
import productImage from '../images/purina.jpeg';
const images = [
  "https://cdn.pixabay.com/photo/2023/10/02/14/51/flowers-8289321_640.png",
  "https://cdn.pixabay.com/photo/2023/09/10/15/15/flowers-8245210_640.png",
  "https://cdn.pixabay.com/photo/2023/09/04/17/04/saturn-8233220_640.png"
];

const productList = ['Product 1', 'Product 2', 'Product 3', 'Product 4', ' Product 5', 'Product 6','Product 7','Product 8'];

function Home() {
  return (
    <section id="home" className='main-content'>
      <div>
        <h1>
          Welcome To Our Pet Store
        </h1>
      </div>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <Box sx={{ maxWidth: 900, flexGrow: 1, margin: 'auto', mt: 5 }}>
        <Carousel>
          {images.map((image, i) => (
            <Paper key={i} elevation={10}>
              <Box
                component="img"
                sx={{
                  width: '100%',
                  height: '200px',
                  objectFit: 'cover'
                }}
                src={image}
                alt={`Slide ${i}`}
              />
            </Paper>
          ))}
        </Carousel>
      </Box>
    </div>
    <div >
          <h2>
            Reccommended Items
          </h2>
    </div>
    <div className='productContainer'>
      {productList.map(() =>{
        return(
          <div className='box'>
          <div className='content'>
            <div className='img-box'>
              <img style={{maxWidth:90, maxHeight: 90}} className='' src={productImage}></img>
            </div>
            <div className='detail'>
              <div className='info'>
                <h3>Blue Buffalo Dog Food</h3>
                <p>price: $50.99</p>
              </div>
              <button className='details-button'>More Details</button>
            </div>
          </div>
        </div>
        )
      })}

    </div>
    </section>
  );
}

export default Home;
