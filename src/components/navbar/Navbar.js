
import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa'; 
import { FaArrowRight } from 'react-icons/fa';

import './navbar.css';


function Navbar() {
  const [showSearch, setShowSearch] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);



  const handleSearchClick = () => {
    setShowSearch(!showSearch);
  };

  const handleGetStartedClick = () => {
  };

  const handleNavLinkClick = () => {
    setShowDropdown(true);
  };

  const handleLearnMoreClick = () => {
  };


  return (
    <nav className="navbar">
    <div className='nav-border'></div>
      <div className="navbar-left">
        <img src="https://tanla.azureedge.net/assets/icons/tanlaLogo.png" alt="Tanla Logo" className="logo" />
      </div>
      <div className="nav-links">
          <p onClick={handleNavLinkClick}>Platform</p>
          <p onClick={handleNavLinkClick}>Products</p>
          <p onClick={handleNavLinkClick}>Solutions</p>
          <p onClick={handleNavLinkClick}>Resources</p>
          <p onClick={handleNavLinkClick}>Company</p>
        </div>

        {showDropdown && (
          <div className="dropdown">
            <div className="dropdown-left">
            </div>
            <div className="dropdown-right">
              <img src="/path/to/image.png" alt="Dropdown Image" />
            </div>
            <button className="learn-more-button" onClick={handleLearnMoreClick}>
              Learn More <FaArrowRight className="arrow-icon" />
            </button>
          </div>
        )}


      <div className='search-container'>
      <div className="navbar-right">
      <div className="search-icon" onClick={handleSearchClick}>
        <FaSearch />
        {showSearch && <input type="text" placeholder="Search..." />}
      </div>
      <button onClick={handleGetStartedClick} className='get-btn'>Get Started</button>
    </div>
      </div>
    </nav>
  );
}

export default Navbar;









