// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LandingPage from "./components/LandingPage";
// import About from "./components/About";  
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Dashboard from "./components/Dashboard/Dashboard";
import CareerDetail from "./components/Dashboard/DashboardSections/CareerDetail";
import Universities from "./components/Dashboard/DashboardSections/Universities";
import UniversityDetail from "./components/Dashboard/DashboardSections/UniversityDetail";
import LearnAboutCourses from "./components/Dashboard/DashboardSections/LearnAboutCourses";
import NotFoundPage from "./pages/NotFoundPage";

import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/careers/:careerId" element={<CareerDetail />} />;
        <Route path="/universities" element={<Universities />} />
        <Route path="/learn-about-courses" element={<LearnAboutCourses />} />
        <Route
          path="/universities/:universityId"
          element={<UniversityDetail />}
        />
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <LandingPage />
              <Footer />
            </>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard/*" element={<Dashboard />} />
        {/* 404 route as a catch-all for undefined paths */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
