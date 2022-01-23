import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header">
      <Link to="/"> 
        <img className="header__logo" 
          src="https://www.pngegg.com/en/png-woybf" 
          alt="amazon-logo"
        />
      </Link>

      <div className="header__search">
        <h1>What's wrong?</h1>
      </div>
      
    </div>
  )
}

export default Header
