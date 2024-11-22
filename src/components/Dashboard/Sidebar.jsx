import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import {
  FaBookOpen,
  FaRoute,
  FaCog,
  FaMailBulk,
  FaSignOutAlt,
  FaHome,
  FaBook,
  FaUniversity,
  FaToolbox,
  FaLayerGroup,
  FaBars,
  FaRegWindowClose,
} from "react-icons/fa";
import "./Sidebar.css";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(window.innerWidth > 768);

  const openSidebar = () => setIsOpen(true);
  const closeSidebar = () => setIsOpen(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="dashboard-sidebar">
      {!isOpen ? (
        <button className="open-button" onClick={openSidebar}>
          <FaBars />
        </button>
      ) : (
        <button className="close-button" onClick={closeSidebar}>
          <FaRegWindowClose />
        </button>
      )}

      <aside className={`sidebar ${isOpen ? "open" : "closed"}`}>
        <div className="navbar-logo">
          <NavLink to="/" className="logo-link">
            <span>Uni</span>Guide
          </NavLink>
        </div>
        <nav>
          <ul className="sidebar-lists">
            <li>
              <NavLink to="/dashboard/home" activeClassName="active">
                <FaHome /> Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/overview" activeClassName="active">
                <FaBookOpen /> Overview
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/insight" activeClassName="active">
                <FaBookOpen /> Insights
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/courses" activeClassName="active">
                <FaBook /> Learn About Courses
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard/explore-universities"
                activeClassName="active"
              >
                <FaUniversity /> Explore Universities
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/careers" activeClassName="active">
                <FaRoute /> Career Paths
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/skills" activeClassName="active">
                <FaToolbox /> UG PathFinder
              </NavLink>
            </li>
          </ul>

          <ul className="sidebar-lists">
            <li>
              <NavLink to="/#about" activeClassName="active">
                <FaLayerGroup /> About Us
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/settings" activeClassName="active">
                <FaCog /> Settings
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/feedback" activeClassName="active">
                <FaMailBulk /> Feedback
              </NavLink>
            </li>
            <li>
              <NavLink to="/logout" activeClassName="active">
                <FaSignOutAlt /> Logout
              </NavLink>
            </li>
          </ul>
        </nav>
      </aside>
    </div>
  );
}

export default Sidebar;
