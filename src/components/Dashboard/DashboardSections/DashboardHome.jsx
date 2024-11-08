// src/components/DashboardSections/DashboardHome.jsx
// import React from "react";
import VideoWalkthrough from "../../VideoWalkthrough"; // Adjust the path as needed

function DashboardHome() {
  return (
    <div className="dashboard-home">
      <VideoWalkthrough />{" "}
      {/* This will show the video only on the Dashboard Home */}
    </div>
  );
}

export default DashboardHome;
