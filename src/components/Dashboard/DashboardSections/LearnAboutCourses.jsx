// import React from "react";
// import courses from "../../data/coursesData";
import courses from "/src/data/coursesData.js";
import CourseCard from "./CourseCard";
import "./LearnAboutCourses.css";

function LearnAboutCourses() {
  return (
    <div className="learn-about-courses">
      <h1>Learn About Our Courses</h1>
      <div className="course-list">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
}

export default LearnAboutCourses;
