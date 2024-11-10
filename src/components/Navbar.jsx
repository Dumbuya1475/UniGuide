// src/components/Navbar.jsx
import { useState } from "react"; // Import useState from React
import { Link } from "react-router-dom";
import "../components/styles/Navbar.css";

function Navbar() {
  // State to manage the navbar visibility
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the navbar
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <span>Uni</span>Guide
        </Link>
      </div>
      <div className="navbar-toggle" onClick={toggleNavbar}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <ul className={`navbar-links ${isOpen ? "active" : ""}`}>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#features">Features</a>
        </li>
        <li>
          <a href="#faq">FAQ</a>
        </li>
        <li>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSemlJkZC6bX1YnrOO8e7txzBWcyrebW2uxay1HwVj1n6lmYlg/viewform?usp=sf_link">
            Feedback
          </a>
        </li>
        <li>
          <Link to="/Login">Login</Link>
        </li>
        <li>
          <Link to="/Signup">Signup</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
