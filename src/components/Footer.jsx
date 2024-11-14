// Footer.jsx
// import React from "react";
import {
  FaLinkedin,
  FaFacebook,
  FaWhatsapp,
  FaPhone,
  FaInstagram,
  FaYoutube,
  // FaSignOutAlt,
  // FaHome,
  // FaBook,
  // FaUniversity,
  // FaToolbox,
  // FaLayerGroup,
} from "react-icons/fa";

import { NavLink } from "react-router-dom";
import "../components/styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="top">
          <div className="navbar-logo">
            <NavLink to="/" activeClassName="active">
              <span>Uni</span>Guide
            </NavLink>
          </div>
          <div className="media-icons">
            <a href="https://www.facebook.com/profile.php?id=100070279923303">
              <FaFacebook />
            </a>
            <a href="https://www.instagram.com/techinspiresl?igsh=YmFvaDByejJ3NmNy">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com/company/tech-inspire-sl/?viewAsMember=true">
              <FaLinkedin />
            </a>
            <a href="#">
              <FaYoutube />
            </a>
            <a href="#">
              <FaWhatsapp />
            </a>
          </div>
        </div>

        <div className="link-boxes">
          <ul className="box">
            <div className="navbar-logo">
              <NavLink to="/" activeClassName="active">
                <span>Uni</span>Guide
              </NavLink>
            </div>
            <p>
              Your guide to understanding courses and choosing the right career
              path.
            </p>
          </ul>
          <ul className="box">
            <li className="link_name">UniGuide</li>
            <li>
              <a href="#about">About Us</a>
            </li>
            <li>
              <a href="#features">Features</a>
            </li>
            <li>
              <a href="#faq">FAQ</a>
            </li>
            <li>
              <a href="/signup">Sign Up</a>
            </li>
            <li>
              <a href="/login">Login</a>
            </li>
          </ul>
          {/* <ul className="box"> */}
            {/* <li className="link_name">Dashboard</li>
            <li>
              <a href="">Home</a>
            </li> */}
            {/* <li>
              <a href="">Courses</a>
            </li>
            <li>
              <a href="">Universities</a>
            </li>
            <li>
              <a href="">Skills</a>
            </li> */}
          {/* </ul> */}
          <ul className="box">
            <li className="link_name">Tech Inspire SL</li>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Events</a>
            </li>
            <li>
              <a href="">FAQs</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
          <ul className="box">
            <li className="link_name">How to reach us</li>
            <li>
              <p>
                {" "}
                <FaPhone /> +23274523500
              </p>
              <p>
                {" "}
                <FaWhatsapp /> +23274523500
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} UniGuide. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
