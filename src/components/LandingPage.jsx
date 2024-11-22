// src/components/LandingPage.jsx

// Jsx file import
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import About from "./About";
import Features from "./Features";
import Team from "./Team";
import FAQs from "./FAQ";

// Css style import
import "../components/styles/LandingPage.css";
import "../components/styles/About.css";
import "../components/styles/Features.css";
import "../components/styles/Team.css";
import vision_img from "/src/assets/images/vision.png";

function LandingPage() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    // Navigate to main page
    navigate("/dashboard/home");
  };

  return (
    <div className="landing-page">
      <Navbar />
      <div className="landing-page-container">
        <div className="content">
          <div className="landing-hero">
            <h3>Welcome to</h3>
            <h1>
              <span>Uni</span>Guide
            </h1>
            <p>
              Your guide to understanding courses and choosing the right career
              path.
            </p>
            <p>
              UniGuide is designed to help students explore diverse career
              options, get in-depth course descriptions, and understand what
              each path has to offer. Choose wisely, knowing exactly what awaits
              you.
            </p>
          </div>
          <button className="get-started-button" onClick={handleGetStarted}>
            Get Started
          </button>
        </div>
      </div>
      <About />
      <Features />
      <Team />
      <section className="team-section">
        <div className="team-container">
          <div className="contents">
            <div className="team-header">
              <h2 className="team-title">We Helped Them Choose</h2>
            </div>
            <div className="team-member-container">
              <div className="team-member">
                <div className="container">
                  <img src={vision_img} alt="" />
                  <h3 className="team-name">Joshua D. Kajua</h3>
                </div>
                <p>Making career info accessible to students is huge</p>
              </div>
              <div className="team-member">
                <div className="container">
                  <img src={vision_img} alt="" />
                  <h3 className="team-name">Zainab Kamara</h3>
                </div>
                <p>
                  Helping students make informed career choices is so important!
                  Great work, and best of luck with UniGuide!
                </p>
              </div>
              <div className="team-member">
                <div className="container">
                  <img src={vision_img} alt="" />
                  <h3 className="team-name">Abdul Aziz</h3>
                </div>
                <p>
                  UniGuide looks like such a valuable tool for students! Can’t
                  wait to see how it helps with career decisions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FAQs />
    </div>
  );
}

export default LandingPage;
