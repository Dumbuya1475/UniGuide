// import React from "react";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaBook,
  FaBriefcase,
  FaToolbox,
  FaLayerGroup,
} from "react-icons/fa"; // Example Icons
import UG_logo from "../assets/logos/UG_logo.jpg";
import "./Sidebar.css"; // Assuming you want separate styles

function Sidebar() {
  return (
    <div className="sidebar">
      <header className="sidebar-header">
        <img src={UG_logo} alt="" />
        <h2>UniGuide</h2>
      </header>
      <ul className="sidebar-lists">
        <li>
          <Link to="/">
            <FaHome /> Home
          </Link>
        </li>
        <li>
          <Link to="/courses">
            <FaBook /> Learn About Courses
          </Link>
        </li>
        <li>
          <Link to="/jobs">
            <FaBriefcase /> Job Opportunities
          </Link>
        </li>
        <li>
          <Link to="/skills">
            <FaToolbox /> Skills
          </Link>
        </li>
      </ul>
      <ul className="sidebar-lists">
        <li>
          <Link to="/about">
            <FaLayerGroup /> About Us
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
