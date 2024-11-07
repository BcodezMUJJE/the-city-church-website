import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import logo from Images/logo1.png

function Navbar() {
  return (
    <>
        <nav className="navbar">
            <div className="navbar-container">
                <Link className="navbar-container">
                    <img src={logo} alt="Logo" className="navbar-logo-image" />
                </Link>
            </div>
        </nav>
    </>
  )
}

export default Navbar
