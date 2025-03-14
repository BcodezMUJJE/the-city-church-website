import React, { useState } from 'react';
import './Give.css'; // Import the CSS file
import airtelImage from '../../Assets/airtel.jpeg'; // Import Airtel image
import mtnImage from '../../Assets/dfcu.jpeg'; // Import MTN image
import dfcuImage from '../../Assets/mtn.jpeg'; // Import Bank Transfer image
import Footer from '../Footer'; // Import the Footer component

function Give() {
  const [activeBox, setActiveBox] = useState(1); // State to track the active payment method

  const handleBoxClick = (index) => {
    setActiveBox(index);
  };

  const handleContinue = () => {
    alert(`Thank you for choosing to give via ${activeBox === 1 ? 'MTN Mobile Money' : activeBox === 2 ? 'Airtel Money' : 'Bank Transfer'}`);
  };

  return (
    <>
      <div className="give-container">
        <div className="boxs">
          {/* MTN Mobile Money */}
          <div
            className={`box ${activeBox === 1 ? 'active' : ''}`}
            onClick={() => handleBoxClick(1)}
          >
            <img src={mtnImage} alt="MTN Mobile Money" className="payment-image" />
            <h3>BANK TRANSFER</h3>
          </div>

          {/* Airtel Money */}
          <div
            className={`box ${activeBox === 2 ? 'active' : ''}`}
            onClick={() => handleBoxClick(2)}
          >
            <img src={airtelImage} alt="Airtel Money" className="payment-image" />
            <h3>AIRTEL MONEY</h3>
          </div>

          {/* Bank Transfer */}
          <div
            className={`box ${activeBox === 3 ? 'active' : ''}`}
            onClick={() => handleBoxClick(3)}
          >
            <img src={dfcuImage} alt="Bank Transfer" className="payment-image" />
            <h3>MTN MOBILE MONEY</h3>
          </div>
        </div>

        {/* Description */}
        <div className="text">
          <p>
            Your generosity helps us continue our mission and serve the community. Thank you for your support!
            <a href="/">Learn more about giving</a>
          </p>
        </div>

        {/* Buttons */}
        <div className="buttons">
          <button className="btn continue" onClick={handleContinue}>
            Continue
          </button>
          <button className="btn cancel" onClick={() => alert('Donation canceled.')}>
            Cancel
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Give;