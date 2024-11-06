// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LandingPage from "./components/LandingPage";
import About from "./components/About";
import FAQ from "./components/FAQ";
import Feedback from "./components/Feedback";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Dashboard from "./components/Dashboard/Dashboard";
import "./App.css";
import CareerDetail from "./components/Dashboard/DashboardSections/CareerDetail";
import Universities from "./components/Dashboard/DashboardSections/Universities";
import UniversityDetail from "./components/Dashboard/DashboardSections/UniversityDetail";
import LearnAboutCourses from "./components/Dashboard/DashboardSections/LearnAboutCourses";

// Inside your Routes component

// Inside your Routes
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
        <Route
          path="/about"
          element={
            <>
              <Navbar />
              <About />
              <Footer />
            </>
          }
        />
        <Route
          path="/faq"
          element={
            <>
              <Navbar />
              <FAQ />
              <Footer />
            </>
          }
        />
        <Route
          path="/feedback"
          element={
            <>
              <Navbar />
              <Feedback />
              <Footer />
            </>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard/*" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
