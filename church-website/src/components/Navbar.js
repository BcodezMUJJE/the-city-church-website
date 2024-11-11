import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../Assets/blackLogo.png';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img src={logo} alt="The City Church Logo" className="navbar-logo-img" />
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
      </div>
    </nav>
  );
}
export default Navbar;