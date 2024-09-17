import React, { useState } from 'react';
import './Navbar.css'; // Import the CSS for styling
import { FaBars, FaTimes } from 'react-icons/fa'; // For the menu icons

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar container">
      <div className="logo">
        <h1>Logo</h1>
      </div>
      <ul className={`nav-links ${isMobileMenuOpen ? 'open' : ''}`}>
        <li><a href="#process">Process</a></li>
        <li><a href="#benefits">Benefits</a></li>
        <li><a href="#service">Service</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
      </ul>
      <button className="nav-button">Get Started</button>
      <div className="menu-icon" onClick={toggleMenu}>
        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
};

export default Navbar;
