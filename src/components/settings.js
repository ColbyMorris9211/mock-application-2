import React from 'react';
import './settings.css';
import './services.css';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import PeopleIcon from '@mui/icons-material/People';
import productImage from '../images/purina.jpeg';
import { useNavigate } from 'react-router-dom';
const productList = ['Product 1', 'Product 2', 'Product 3', 'Product 4', ' Product 5', 'Product 6','Product 7','Product 8'];

function Settings() {

    const navigate = useNavigate();
  
    const handleNavigate = (path) => {
      navigate(path);
    };

  return (
    <section id="settings" className='main-content'>
      <div className='admin-option-container'>
        <div className='admin-option products'>
            <PhotoCameraIcon className='admin-icon'/>
            <div>
              <div className='admin-option-text'>
                Products
              </div>
              <div className='admin-option-text-secondary' >
                +85
              </div>
            </div>
        </div>
        <div className='admin-option products'>
            <PeopleIcon className='admin-icon'/>
            <div>
              <div className='admin-option-text'>
                NewUsers
              </div>
              <div className='admin-option-text-secondary' >
                +65
              </div>
            </div>
        </div>
        <div className='admin-option products'>
            <PhotoCameraIcon className='admin-icon'/>
            <div>
              <div className='admin-option-text'>
                Product Stock
              </div>
              <div className='admin-option-text-secondary' >
                +204
              </div>
            </div>
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
                  <button onClick={() => handleNavigate('/ProductDetails')} className="details-button">Edit Product</button>
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

export default Settings;
