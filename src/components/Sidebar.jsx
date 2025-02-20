import React from "react";
import {
  MdDashboard,
  MdAssignment,
  MdCalendarToday,
  MdMessage,
  MdInsertChart,
  MdKeyboardArrowRight,
} from "react-icons/md";
import { BsPalette, BsGlobe } from "react-icons/bs";
import { FiSmartphone } from "react-icons/fi";
import "../styles/Sidebar.css";

const menuItems = [
  { text: "Dashboard", icon: <MdDashboard /> },
  { text: "Projects", icon: <MdAssignment /> },
  { text: "My Tasks List", icon: <MdAssignment /> },
  { text: "Calendar", icon: <MdCalendarToday /> },
  { text: "Messages", icon: <MdMessage /> },
  { text: "Analytics", icon: <MdInsertChart /> },
];

const topicItems = [
  { text: "Branding", icon: <BsPalette />, color: "#f76322" },
  { text: "Web Design", icon: <BsGlobe />, color: "#0b7533" },
  { text: "App Design", icon: <FiSmartphone />, color: "#b23510" },
];

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <div className="logo">
          <span className="logo-text">T</span>
        </div>
        <div className="title-container">
          <h1 className="app-title">Tasklab</h1>
          <h3 className="app-subtitle">Task Management</h3>
        </div>
        <div className="dropdown-box">
          <MdKeyboardArrowRight className="dropdown-icon" />
        </div>
      </div>

      <div className="sidebar-divider"></div>
      <div className="sidebar-section">
        <h2 className="section-title">Menu</h2>
        <ul className="menu-list">
          {menuItems.map((item) => (
            <li key={item.text}>
              <a
                href="#"
                className={`menu-item ${
                  item.text === "My Tasks List" ? "active" : ""
                }`}
              >
                <span className="menu-icon">{item.icon}</span>
                <span className="menu-text">{item.text}</span>
                {item.text === "My Tasks List" && (
                  <MdKeyboardArrowRight className="arrow-icon" />
                )}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="sidebar-section">
        <h2 className="section-title">Topics</h2>
        <ul className="menu-list">
          {topicItems.map((item) => (
            <li key={item.text}>
              <a href="#" className="menu-item">
                <span className="menu-icon" style={{ color: item.color }}>
                  {item.icon}
                </span>
                <span className="menu-text">{item.text}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="user-profile">
        <div className="avatar">
          <span>W</span>
        </div>

        <div className="user-info">
          <p className="user-name">William Joseph</p>
          <p className="user-email">william@gmail.com</p>
        </div>
        <div className="user-dropdown-box">
          <MdKeyboardArrowRight className="user-dropdown-icon" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
