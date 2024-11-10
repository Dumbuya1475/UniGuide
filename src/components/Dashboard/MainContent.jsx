// src/components/Dashboard/MainContent.jsx
import { Route, Routes, Navigate } from "react-router-dom";
import { useState } from "react";
import Overview from "./DashboardSections/Overview";
import Courses from "./DashboardSections/Courses";
import Careers from "./DashboardSections/Careers";
import Skills from "./DashboardSections/Skills";
import Settings from "./DashboardSections/Settings";
import DashboardHome from "./DashboardSections/DashboardHome";
import DashboardNavbar from "./DashboardNavbar";
import Sidebar from "./Sidebar";
import Universities from "./DashboardSections/Universities";

import "./MainContent.css";

function MainContent() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Handlers to open and close sidebar
  const openSidebar = () => setIsSidebarOpen(true);
  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <div className="main-content">
      <DashboardNavbar openSidebar={openSidebar} />

      {isSidebarOpen && <Sidebar closeSidebar={closeSidebar} />}

      {/* Dashboard Routes */}
      <Routes>
        <Route path="/home" element={<DashboardHome />} />
        <Route path="/overview" element={<Overview />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/explore-universities" element={<Universities />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/" element={<Navigate to="/home" replace />} />{" "}
      </Routes>
    </div>
  );
}

export default MainContent;
