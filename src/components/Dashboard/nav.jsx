// src/components/DashboardNavbar.jsx
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import Sidebar from "./Sidebar";
import "./DashboardNavbar.css";

function DashboardNavbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); // Sidebar open by default

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen); // Toggle the sidebar state
  };

  return (
    <div>
      <nav className="dashboard-navbar">
        <FaBars onClick={toggleSidebar} className="menu-icon" />
        <p>Welcome, User</p>
      </nav>
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
    </div>
  );
}

export default DashboardNavbar;
