import { useState } from "react";
import PropTypes from "prop-types"; // Import PropTypes for validation
import "./CourseCard.css";

function CourseCard({ course }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="course-card">
      <h2>{course.name}</h2>
      <p>{course.overview}</p>
      <button onClick={() => setExpanded(!expanded)}>
        {expanded ? "Show Less" : "Learn More"}
      </button>

      {expanded && (
        <div className="course-details">
          <h3>Skills Acquired</h3>
          <ul>
            {course.skillsAcquired.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>

          <h3>Duration</h3>
          <p>{course.duration}</p>

          <h3>Key Modules</h3>
          <ul>
            {course.keyModules.map((module, index) => (
              <li key={index}>{module}</li>
            ))}
          </ul>

          <h3>Career Paths</h3>
          <ul>
            {course.careerPaths.map((career, index) => (
              <li key={index}>{career}</li>
            ))}
          </ul>

          <h3>Average Starting Salary</h3>
          <p>{course.averageSalary}</p>
        </div>
      )}
    </div>
  );
}

// Define prop types for CourseCard
CourseCard.propTypes = {
  course: PropTypes.shape({
    name: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
    skillsAcquired: PropTypes.arrayOf(PropTypes.string).isRequired,
    duration: PropTypes.string.isRequired,
    keyModules: PropTypes.arrayOf(PropTypes.string).isRequired,
    careerPaths: PropTypes.arrayOf(PropTypes.string).isRequired,
    averageSalary: PropTypes.string.isRequired,
  }).isRequired,
};

export default CourseCard;
