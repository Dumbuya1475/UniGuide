// src/components/Dashboard.jsx
import React from "react";
import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard">
      <h1>Welcome to UniGuide Dashboard</h1>
      <div className="dashboard-widgets">
        <div className="widget">
          <h2>Course Updates</h2>
          <p>Stay updated on the latest courses and resources added.</p>
        </div>
        <div className="widget">
          <h2>Announcements</h2>
          <p>View the latest news and updates from Tech Inspire SL.</p>
        </div>
        <div className="widget">
          <h2>Messages</h2>
          <p>Check any new messages or notifications.</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
