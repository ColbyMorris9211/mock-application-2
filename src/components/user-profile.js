import React from 'react';
import './user-profile.css';
import productImage from "../images/purina.jpeg";

import { useNavigate } from "react-router-dom";
const productList = ["Product 1", "Product 2", "Product 3"];

function UserProfile() {
  const navigate = useNavigate();
  const handleNavigate = (path) => {
    navigate(path);
  };
  return (
    <section id="about" className="main-content">
      <div className="profileInformation">
        <div className="my-account">
          <h1>My Account</h1>
        </div>
        <div className="title">
          <h3>Profile Information</h3>
          <h4>Edit</h4>
        </div>

        <div>
          <div class="infromation">
            <span>
              Name: <span className="answer">John Box</span>
            </span>
            <span>
              Member Number:<span className="answer">678964537</span>
            </span>
            <span>
              Email:<span className="answer">john.box@wsu.edu</span>
            </span>
            <span>
              Phone Number:<span className="answer">556-768-9876</span>
            </span>
            <span>
              Address:
              <span className="answer">5678 Denver Dr. Richland, WA 99345</span>
            </span>
          </div>
        </div>

        <div className="title">
          <h3>Account Information</h3>
          <h4>Edit</h4>
        </div>

        <div>
          <div class="infromation">
            <span>
              Email:<span className="answer">john.box@wsu.edu</span>
            </span>
            <span>
              Password:<span className="answer">*****</span>
            </span>
          </div>
        </div>
        <div className="title">
          <h3>Credit Card and Reward Points</h3>
          <h4>Edit</h4>
        </div>

        <div>
          <div class="infromation">
            <span>
              Card:<span className="answer">****4567</span>
            </span>
            <span>
              Reward Points:<span className="answer">105</span>
            </span>
          </div>
        </div>
      </div>
      <div class="infromation">
        <div className="title">
          <h3>Recent Orders</h3>
        </div>
        <div className="productContainer">
          {productList.map((element) => {
            return (
              <div className="box">
                <div className="content">
                  <div className="img-box">
                    <img
                      style={{ maxWidth: 90, maxHeight: 90 }}
                      className=""
                      src={productImage}
                    ></img>
                  </div>
                  <div className="details">
                    <div className="info">
                      <h3>Blue Buffalo Chow</h3>
                      <p>price: $50.99</p>
                    </div>
                    <button
                      onClick={() => handleNavigate("/ProductDetails")}
                      className="details-button"
                    >
                      More Details
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default UserProfile;
