// src/components/Features.jsx
import {
  FaBookOpen,
  FaBriefcase,
  FaWrench,
  // FaHandshake,
  // FaChartLine,
  // FaGift,
  // FaFacebook,
  // FaLinkedin,
  // FaTwitter,
} from "react-icons/fa"; // Icons for feature highlights

// import React from "react";
import "../components/styles/Features.css";

function Features() {
  return (
    <section className="features-section" id="features">
      <div className="features-container">
        <div className="contents">
          <div className="features-header">
            <h2 className="features-title">Why Choose UniGuide?</h2>
            <p className="features-intro">
              UniGuide offers essential insights to help you make informed
              decisions about your educational and career journey. Here’s what
              makes us unique:
            </p>
          </div>
          <div className="features-grid">
            <div className="feature-card">
              <FaBookOpen className="feature-icon" />
              <h3 className="feature-title">Explore Courses</h3>
              <p className="feature-description">
                Access detailed information about tech and non-tech courses,
                helping you make informed choices about your education.
              </p>
            </div>
            <div className="feature-card">
              <FaBriefcase className="feature-icon" />
              <h3 className="feature-title">Career Paths</h3>
              <p className="feature-description">
                Gain insights into various career opportunities, growth
                potential, and work environments suited to different fields.
              </p>
            </div>
            <div className="feature-card">
              <FaWrench className="feature-icon" />
              <h3 className="feature-title">Skills Required</h3>
              <p className="feature-description">
                Discover the essential skills you need and start preparing for a
                successful career in your chosen field.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
