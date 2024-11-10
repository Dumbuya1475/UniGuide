// src/components/Sidebar.jsx
import { NavLink } from "react-router-dom";
import { FaRegWindowClose } from "react-icons/fa";
import PropTypes from "prop-types";
import "./Sidebar.css";

function Sidebar({ isOpen, toggleSidebar }) {
  return (
    <aside className={`sidebar ${isOpen ? "open" : "closed"}`}>
      <div className="navbar-logo">
        <NavLink to="/" activeClassName="active">
          <span>Uni</span>Guide
        </NavLink>
        <FaRegWindowClose onClick={toggleSidebar} className="close-icon" />
      </div>
      <nav>{/* Your nav items go here */}</nav>
    </aside>
  );
}

Sidebar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggleSidebar: PropTypes.func.isRequired,
};

export default Sidebar;
