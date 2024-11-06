// import React from "react";
import Sidebar from "./Sidebar";
import "../styles/App.css"; // Import styles for this component

import "./MainPage.css"
const MainPage = () => {
  return (
    <div className="main-page">
      <Sidebar/>
      <h2>Explore Tech Courses</h2>
      <p>
        Select a course to understand the skills, opportunities, and career
        paths.
      </p>
      {/* Add more components for course cards, navigation, etc. */}
    </div>
  );
};

export default MainPage;
