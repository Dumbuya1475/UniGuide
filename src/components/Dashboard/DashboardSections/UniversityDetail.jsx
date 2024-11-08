// src/components/UniversityDetail.jsx
import { useEffect } from "react";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import universities from "../../../data/universitiesData";
import Sidebar from "../Sidebar";
import "./UniversityDetail.css";

function UniversityDetail() {
  const navigate = useNavigate();
  const { universityId } = useParams();
  const university = universities.find((uni) => uni.id === universityId);

  // Effect to scroll to the top when the component mounts
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page
  }, []); // Empty dependency array means this effect runs once on mount

  const handleLearnMore = () => {
    navigate(`/dashboard/explore-universities`);
  };

  if (!university) return <p>University not found</p>;

  return (
    <div className="university-detail-page">
      <Sidebar />
      <div className="university-detail-container">
        <button onClick={() => handleLearnMore()} className="backBtn">
          <FaArrowAltCircleLeft />
          Back
        </button>{" "}
        <div className="heading">
          <h1>{university.name}</h1>
          <p>{university.description}</p>
        </div>
        <section className="details">
          <div className="university-logo">
            <img
              src={university.logo}
              alt={university.name}
              className="university-detail-logo"
            />
          </div>
          <div className="university-info">
            <h2>About {university.name}</h2>
            <p>{university.about}</p>
            <h3>Location</h3>
            <p>{university.location}</p>
            <h3>Type</h3>
            <p>{university.type}</p>
            <h3>Available Tech Courses</h3>
            <ul className="uni-detail">
              {university.techCourses.map((course, index) => (
                <li key={index}>{course}</li>
              ))}
            </ul>

            <h3>Available Non-Tech Courses</h3>
            <ul className="uni-detail">
              {university.nonTechCourses.map((course, index) => (
                <li key={index}>{course}</li>
              ))}
            </ul>

            <h3>Facilities & Features</h3>
            <ul className="uni-detail">
              {university.facilities.map((facility, index) => (
                <li key={index}>{facility}</li>
              ))}
            </ul>
          </div>
        </section>
        <h3>Contact Information</h3>
        <p>Email: {university.contactInfo.email}</p>
        <p>Phone: {university.contactInfo.phone}</p>
        <a
          href={university.website}
          target="_blank"
          rel="noopener noreferrer"
          className="website-link"
        >
          Visit {university.name} Website
        </a>
      </div>
    </div>
  );
}

export default UniversityDetail;
