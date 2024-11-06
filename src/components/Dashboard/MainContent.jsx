// src/components/Dashboard/MainContent.jsx
import { Route, Routes, Navigate } from "react-router-dom";
import Overview from "./DashboardSections/Overview";
import Courses from "./DashboardSections/Courses";
import Careers from "./DashboardSections/Careers";
import Skills from "./DashboardSections/Skills";
import Settings from "./DashboardSections/Settings";
import DashboardHome from "./DashboardSections/DashboardHome";
import DashboardNavbar from "./DashboardNavbar";
import Universities from "./DashboardSections/Universities";

import "./MainContent.css";

function MainContent() {
  return (
    <div className="main-content">
      <DashboardNavbar />
      {/* Dashboard Routes */}
      <Routes>
        <Route path="/home" element={<DashboardHome />} />
        <Route path="/overview" element={<Overview />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/explore-universities" element={<Universities />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/settings" element={<Settings />} />
        {/* Redirect to DashboardHome when accessing the base path */}
        <Route path="/" element={<Navigate to="/home" replace />} />{" "}
        {/* Default route */}
      </Routes>
    </div>
  );
}

export default MainContent;
