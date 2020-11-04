import React from 'react';
import propTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import {
  AiOutlineClose,
  AiOutlineHome,
  AiOutlineTeam,
  AiOutlinePieChart,
  AiOutlinePicture,
} from "react-icons/ai";
import './sidebar.css';

const Sidebar = ({toggleSidebar, isOpen}) => {
  return (
    <div className="sidebar" style={isOpen ? { display: 'flex' } : {display: 'none'}}>
      <div className="backdrop" onClick={() => toggleSidebar(!isOpen)} />
      <div className="sidebar-content">
        <div className="links">
            <p className="exit-sidebar" onClick={() => toggleSidebar(!isOpen)}>
              <AiOutlineClose/>
            </p>
            <NavLink activeClassName="active-class" exact to="/" onClick={() => toggleSidebar(!isOpen)}>
              <AiOutlineHome className="icon" size="20px"/>Home
            </NavLink>
            <NavLink activeClassName="active-class" exact to="/who-we-are" onClick={() => toggleSidebar(!isOpen)}>
              <AiOutlineTeam className="icon" size="20px"/>Who We Are
            </NavLink>
            <NavLink activeClassName="active-class" exact to="/survey" onClick={() => toggleSidebar(!isOpen)}>
              <AiOutlinePieChart className="icon" size="20px"/>Survey
            </NavLink>
            <NavLink activeClassName="active-class" exact to="/gallery" onClick={() => toggleSidebar(!isOpen)}>
              <AiOutlinePicture className="icon" size="20px"/>Gallery
            </NavLink>
        </div>
      </div>
    </div>
  );
};

Sidebar.propTypes = {
  isOpen: propTypes.bool.isRequired,
  toggleSidebar: propTypes.func.isRequired,
};

export default Sidebar;