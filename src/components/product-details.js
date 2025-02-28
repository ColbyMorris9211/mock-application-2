import React from 'react';
import './product-details.css';
import productImage from '../images/purina.jpeg';
import StarIcon from '@mui/icons-material/Star';
import StarOutlineIcon from '@mui/icons-material/StarOutline';

function ProductDetails() {
  return (
    <section id="product-details" className='main-content'>
        <div className='product-details-container'>
            <div className='product-image-container'>
                <img className='product-image' src= {productImage}></img>
            </div>
            <div className='product-info-container'>
                <div className='product-info-label'>
                    Blue Buffalo Dog Chow
                </div>
                <div className='product-brand'>
                    <div className='product-brand-small'>
                        Blue Buffalo
                    </div>
                    <div className='product-number'>
                        Product Number: 357554355
                    </div>
                </div>
                <div className='space-between'>
                        ""
                </div>
                <div className='star-container'>
                    <StarIcon className='star' style={{fontSize: 20}}/>
                    <StarIcon className='star' style={{fontSize: 20}}/>
                    <StarIcon className='star' style={{fontSize: 20}}/>
                    <StarIcon className='star' style={{fontSize: 20}}/>
                    <StarOutlineIcon className='star' style={{fontSize: 20}}/>
                    <span className='product-review'>Great Product!</span>
                </div>
                <div className='space-between-large'>
                        ""
                </div>
                <div className='pricing-container'>
                    <span className='sale-pricing'>$50.99</span><span className="original-pricing">$62.99</span>
                </div>
                <div className='space-between-large'>
                        ""
                </div>
                <div className='pricing-container'>
                   <div>Size: 10.3 Lb</div>
                   <div>Pet Type: Dog</div>
                   <div>Available: Yes</div>
                </div>
                <div className='space-between-large'>
                        ""
                </div>
                <div className='product-description'>
                    Blue Buffalo Dog food is one of the highest quality dog foods we offer, made with real ingredients
                    your dog will love every time. We offer great pricing on this great option for your pet.
                </div>
                <div className='space-between-large'>
                        ""
                </div>
                <button className='cart-button'>
                    Add To Cart
                </button>
            </div>
            <div className='purchase-now-container'>
                <div>
                    More Product Details Here
                </div>
            </div>
        </div>

    </section>
  );
}

export default ProductDetails;
