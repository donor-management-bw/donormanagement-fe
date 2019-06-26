import React from 'react';
import { NavLink } from 'react-router-dom';

import './Login.css';

const linkStyles = {
  padding: "0 2rem",
  textDecoration: "none",
  color: '#3FB6E9'
};

const Navigation = () => {
  return (
    <div>
      <div className="nav-bar">        
        <div className='link-div'>
          <NavLink style={linkStyles} to="/">
            Home
          </NavLink>
        </div>
        <div className='link-div'>
          <NavLink style={linkStyles} to="/login">
            Login
          </NavLink>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default Navigation;
