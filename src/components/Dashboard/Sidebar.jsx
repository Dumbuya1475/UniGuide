import { NavLink } from "react-router-dom";
import {
  FaBookOpen,
  FaRoute,
  FaRegWindowClose,
  FaCog,
  FaMailBulk,
  FaSignOutAlt,
  FaHome,
  FaBook,
  FaUniversity,
  FaToolbox,
  FaLayerGroup,
} from "react-icons/fa";
import "./Sidebar.css";

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="navbar-logo">
        <NavLink to="/" activeClassName="active">
          <span>Uni</span>Guide
        </NavLink>
        <FaRegWindowClose />
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
              <FaToolbox /> Skills Development
            </NavLink>
          </li>
          {/* <li>
            <NavLink to="/dashboard/overview" activeClassName="active">
              <FaRoute /> Skills Assessment:
            </NavLink>
          </li> */}
          {/* <li>
            <NavLink to="/dashboard/overview" activeClassName="active">
              <FaRoute /> Community Highlights:
            </NavLink>
          </li> */}
          {/* <li>
            <NavLink to="/dashboard/overview" activeClassName="active">
              <FaRoute /> Job Opportunities
            </NavLink>
          </li> */}
          {/* <li>
            <NavLink to="/dashboard/overview" activeClassName="active">
              <FaRoute /> Notifications
            </NavLink>
          </li> */}
        </ul>

        <ul className="sidebar-lists">
          <li>
            <NavLink to="/about" activeClassName="active">
              <FaLayerGroup /> About Us
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/settings" activeClassName="active">
              <FaCog /> Settings
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/settings" activeClassName="active">
              <FaMailBulk /> Feedback
            </NavLink>
          </li>
          <li>
            <NavLink to="/" activeClassName="active">
              <FaSignOutAlt /> Logout
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
