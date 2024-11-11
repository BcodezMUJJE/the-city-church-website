import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../Assets/blackLogo.png';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);
  

  window.addEventListener('resize', showButton);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          <img src={logo} alt="The City Church Logo" className="navbar-logo-img" />
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/news-&-events" className="nav-links" onClick={closeMobileMenu}>
              News & Events
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contact-us" className="nav-links" onClick={closeMobileMenu}>
              Contact Us
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/give" className="nav-links" onClick={closeMobileMenu}>
              Give
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about-us" className="nav-links" onClick={closeMobileMenu}>
              AboutUs
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/join-mc" className="nav-links-mobile" onClick={closeMobileMenu}>
              Join MC
            </Link>
          </li>
        </ul>
        {button && <button buttonStyle="btn--outline">JOIN MC</button>}
      </div>
    </nav>
  );
}
export default Navbar;