import React from 'react';
import {
  NavLink,
  useHistory
} from 'react-router-dom';
import './nav-bar.css';

const NavBar = () => {
  const history = useHistory();
  return (
    <div className="nav-bar">
      <div className="logo-bar">
        <img className="gs-logo" src="logo_transparent.png" alt="Galaxy Sounds Logo" onClick={() => history.push("/")}></img>
      </div>
      <div className="menu-bar">
        <ul>
          <li><NavLink activeClassName="active-class" exact to="/">Home</NavLink></li>
          <li><NavLink activeClassName="active-class" exact to="/who-we-are">Who We Are</NavLink></li>
          <li><NavLink activeClassName="active-class" exact to="/survey">Survey</NavLink></li>
          <li><NavLink activeClassName="active-class" exact to="/gallery">Gallery</NavLink></li>
        </ul>
      </div>
      
    </div>
  )
};

export default NavBar;