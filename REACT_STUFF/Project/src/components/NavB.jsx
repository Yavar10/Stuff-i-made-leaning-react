import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavB.css';

const NavB = () => {
  return (
    <div className="navbar-container">
      <div className="nav-link">
        <a href="/">
          <h1>Home</h1>
        </a>
      </div>
      <div className="nav-link">
        <NavLink to="/PSlice">
          <h1>Paste</h1>
        </NavLink>
      </div>
      {/* <div className="nav-link">
        <NavLink to="/PSlice/:id">View Paste</NavLink>
      </div> */}
    </div>
  );
};

export default NavB;
