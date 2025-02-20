import React from "react";
import { MdNotificationsNone, MdAdd } from "react-icons/md";
import "../styles/Navbar.css";
import { LuSearch } from "react-icons/lu";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="search-container">
        <LuSearch className="search-icon" />
        <input
          type="text"
          placeholder="Search here..."
          className="search-input"
        />
        <div className="search-shortcuts">
          <span className="shortcut-box">⌘</span>
          <span className="shortcut-box">K</span>
        </div>
      </div>

      <div className="navbar-actions">
        <button className="notification-button">
          <MdNotificationsNone size={24} />
          <span className="notification-badge"></span>
        </button>
        <button className="create-button">
          <MdAdd />
          <span>Create Project</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
