import React from 'react';
import retreiverImage from '../images/goldern-retreiver.jpeg';
import dachshundImage from '../images/dachshund.jpg';
import './about.css';


function About() {
  return (
    <section id="about" className='main-content'>
      <div className='about-us'>
        <div className='about-info'>
          <span className='about-text'>About us</span>
          <p className='about-catch'>
            Being the Best for the Best
          </p>
          <p>
            At Pet Pals we look to offer a service like no other to you and your pets. We know
            What it takes to raise a pet like family. This is why we only offer products our pets
            would reccomend to you! We have been in business for over 40 years and our loyal customers
            are a testimate to our word. We look forward to meeting and having personal interactions
            will pets of all kinds. Come give us a visit and see the difference in service!
          </p>
        </div>
        <div className='about-image'>
          <div className='round-image-container'>
            <img  className='round-image' src={retreiverImage}></img>
          </div>
        </div>
      </div>
      <div className='commitment-container'>
      <div className='commitment-image'>
          <div className='round-image-container'>
            <img  className='round-image' src={dachshundImage}></img>
          </div>
        </div>
        <div className='about-info'>
          <span className='about-text'>Our Commitment</span>
          <p className='about-catch'>
            Giving your pet a warm feeling every trip!
          </p>
          <p>
            If there is one thing we can promise, your pet will love every trip to pet pals.
            This is why we offter the best reward to our customers. Bring your pet with you to 
            receive additional benefit! Take a picture and post about us. Here we welcome all pets
            as family. If you are looking for the best prices and friendliest staff you wont have
            to look any further. Shop online for convenience, we promise to make your experience
            memorable.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
