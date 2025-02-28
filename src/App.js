import React from 'react';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import Header from './components/header.js';
import Home from './components/home';
import About from './components/about';
import Services from './components/services';
import Contact from './components/contact';
import './App.css';
import BasicExample from './components/navbar.js';
import Settings from './components/settings.js';
import ProductDetails from './components/product-details.js';
import UserProfile from './components/user-profile.js';
import CartComponent from './components/cart.js';
import AdoptionsComponent from './components/adoptions.js';
import FAQsComponent from './components/faqs.js';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="App">
      <BasicExample></BasicExample>
        <Routes >
          <Route path="/" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="Settings" element={<Settings />} />
          <Route path="ProductDetails" element={<ProductDetails />} />
          <Route path="user-profile" element={<UserProfile />} />
          <Route path="cart" element={<CartComponent />} />
          <Route path="contact" element={<Contact />} />
          <Route path="adoptions" element={<AdoptionsComponent />} />
          <Route path="faqs" element={<FAQsComponent />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
