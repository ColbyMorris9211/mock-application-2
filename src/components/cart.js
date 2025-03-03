import React from 'react';
import './cart.css';
import productImage from '../images/purina.jpeg';


function CartComponent() {
  return (
    <section id="about" className='main-content'>
        <div className="product-list-view">
          <img className="product-img" src={productImage}></img>
          <div className="product-stuff">
            <div className="product-details">
              <h2>Blue Buffalo Dog Food</h2>
              <p>by Purina</p>
              <p>Price: $50.99</p>
            </div>
            <div className="purchase-details">
              <p>Quantity: 2</p>
              <button>Delete</button>
              <p className="subtotal">Subtotal: $101.98</p>
            </div>
          </div>
        </div>
        <div className="order-details">
          <h2>Total(2 Items): $101.98</h2>
        </div>
    </section>
  );
}

export default CartComponent;
