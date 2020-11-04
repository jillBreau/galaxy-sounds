import React from 'react';
import propTypes from 'prop-types';
import {
  NavLink,
  useHistory
} from 'react-router-dom';
import { FiMenu } from "react-icons/fi";
import './nav-bar.css';

const NavBar = ({toggleSidebar, sidebarIsOpen}) => {
  const history = useHistory();
  return (
    <div className="nav-bar">
      <div className="logo-bar">
        <img className="gs-logo" src="logo_transparent.png" alt="Galaxy Sounds Logo" onClick={() => history.push("/")}></img>
      </div>
      <div className="menu-bar">
        {
          !sidebarIsOpen 
          && <ul>
            <li><NavLink activeClassName="active-class" exact to="/">Home</NavLink></li>
            <li><NavLink activeClassName="active-class" exact to="/who-we-are">Who We Are</NavLink></li>
            <li><NavLink activeClassName="active-class" exact to="/survey">Survey</NavLink></li>
            <li><NavLink activeClassName="active-class" exact to="/gallery">Gallery</NavLink></li>
          </ul>
        }
        <p className="menu-icon" onClick={() => toggleSidebar(!sidebarIsOpen)}><FiMenu size="25"/></p>
      </div>
      
    </div>
  )
};

NavBar.propTypes = {
  toggleSidebar: propTypes.func.isRequired,
  sidebarIsOpen: propTypes.bool.isRequired,
};

export default NavBar;