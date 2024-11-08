// src/components/Dashboard/DashboardSections/Courses.jsx

import courses from "/src/data/coursesData.js";
import CourseCard from "./CourseCard";
import "./LearnAboutCourses.css";

function Courses() {
  return (
    <div className="learn-about-courses">
      <h1>Learn About Courses</h1>
      <div className="course-list">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
}

export default Courses;
