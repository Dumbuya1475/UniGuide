// src/components/Universities.jsx
import universities from "../../../data/universitiesData";
import { useNavigate } from "react-router-dom";
import "./Universities.css";

function Universities() {
  const navigate = useNavigate();

  const handleLearnMore = (universityId) => {
    navigate(`/universities/${universityId}`);
  };

  return (
    <div className="universities-page">
      <h1>Explore Universities in Sierra Leone</h1>
      <p>
        Discover higher education institutions and their available programs.
      </p>

      <div className="universities-container">
        {universities.map((uni) => (
          <div key={uni.id} className="university-card">
            <img src={uni.logo} alt={uni.name} className="university-logo" />
            <h2>{uni.name}</h2>
            <p className="tagline">{uni.description}</p>
            <p className="location">
              <strong>Location:</strong> {uni.location}
            </p>
            <p className="type">
              <strong>Type:</strong> {uni.type}
            </p>
            <p className="program">
              <strong>Programs:</strong> {uni.programs.join(", ")}
            </p>
            <div className="action-btn">
              <button
                onClick={() => handleLearnMore(uni.id)}
                className="learn-more-button"
              >
                Learn More
              </button>
              <a
                href={uni.website}
                target="_blank"
                rel="noopener noreferrer"
                className="website-link"
              >
                Visit Website
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Universities;
