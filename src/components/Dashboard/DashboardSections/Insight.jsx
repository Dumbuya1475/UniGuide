import { useState, useEffect } from "react";
import "./Insight.css";
// import imgs from "/src/assets/BG-Images/university_st.png";
import careerTerms from "../../../data/InsightData/CareerTerms";
import quotes from "../../../data/InsightData/quotes";
import careerTips from "../../../data/InsightData/careerTips";

// Daily facts data
const dailyFacts = [
  "Did you know? The first job board was created in 1994.",
  "Over 70% of jobs are found through networking.",
  "Employers value communication skills above technical skills in most fields.",
  "Learning one new skill can increase your chances of a promotion by 25%.",
  "Remote work has increased by 159% since 2005.",
  "The average person changes jobs 12 times in their career.",
  "Only 15% of employees worldwide are engaged in their jobs.",
  "The healthcare industry is the fastest-growing sector, projected to grow by 14% through 2028.",
  "Cybersecurity jobs are among the highest in demand, with a 32% growth rate expected by 2028.",
  "The tech industry continues to offer the highest median salaries among career fields.",
  "Soft skills such as adaptability and problem-solving are increasingly sought after by employers.",
  "Women now hold 25% of computing jobs, a significant increase from previous years.",
  "Continuous learning and professional development are key factors in long-term career success.",
];

// Job market insights
const jobMarketStats = [
  "Tech jobs are projected to grow by 22% over the next decade.",
  "The demand for cybersecurity professionals has grown by 30% in the last 5 years.",
  "Healthcare professionals are expected to see an average salary increase of 5% in 2024.",
  "Remote work opportunities have increased by 159% since 2005.",
  "Data science roles are expected to grow by 28% by 2026.",
  "The renewable energy sector is set to expand with a 10% increase in job openings.",
  "Digital marketing jobs have surged, with a 15% growth in demand this year.",
  "The need for cloud computing skills has grown, with related jobs increasing by 25%.",
  "Project management roles are expected to grow by 12% through 2028.",
  "AI and machine learning jobs are projected to grow by 35% over the next decade.",
];

// Skills in demand
const inDemandSkills = [
  { skill: "Python", industry: "Tech" },
  { skill: "Project Management", industry: "Business" },
  { skill: "Data Analysis", industry: "Tech" },
  { skill: "Communication", industry: "All Industries" },
  { skill: "Cloud Computing", industry: "Tech" },
  { skill: "Cybersecurity", industry: "Tech" },
  { skill: "Digital Marketing", industry: "Marketing" },
  { skill: "Machine Learning", industry: "Tech" },
  { skill: "Leadership", industry: "All Industries" },
  { skill: "Critical Thinking", industry: "All Industries" },
  { skill: "Adaptability", industry: "All Industries" },
  { skill: "Sales", industry: "Business" },
  { skill: "Customer Service", industry: "All Industries" },
  { skill: "UX/UI Design", industry: "Tech" },
  { skill: "Financial Analysis", industry: "Finance" },
];

// Industry spotlights
const industrySpotlights = [
  {
    industry: "AI",
    description:
      "Artificial Intelligence is transforming industries like healthcare, finance, and transportation.",
    opportunities: "AI engineers, Data Scientists, Robotics experts.",
  },
  {
    industry: "Healthcare",
    description:
      "Healthcare continues to be one of the fastest-growing sectors with a wide range of career paths.",
    opportunities: "Doctors, Nurses, Medical Research Analysts.",
  },
  {
    industry: "Cybersecurity",
    description:
      "With increasing digital threats, cybersecurity is critical in protecting data and systems.",
    opportunities:
      "Cybersecurity Analysts, Ethical Hackers, Security Engineers.",
  },
  {
    industry: "Renewable Energy",
    description:
      "Renewable energy is expanding rapidly, focusing on sustainable power sources.",
    opportunities:
      "Solar Panel Installers, Wind Turbine Technicians, Renewable Energy Consultants.",
  },
  {
    industry: "Finance",
    description:
      "Finance is essential for economic stability and growth, offering diverse career paths.",
    opportunities: "Financial Analysts, Investment Bankers, Accountants.",
  },
  {
    industry: "Education",
    description:
      "Education continues to evolve with new technologies and methodologies for learning.",
    opportunities:
      "Teachers, Educational Technologists, Curriculum Developers.",
  },
  {
    industry: "Logistics",
    description:
      "Logistics ensures the efficient movement of goods and services globally.",
    opportunities:
      "Logistics Coordinators, Supply Chain Managers, Transport Planners.",
  },
  {
    industry: "Biotechnology",
    description:
      "Biotechnology leverages biological systems to develop new products and technologies.",
    opportunities:
      "Biotechnologists, Research Scientists, Quality Control Analysts.",
  },
  {
    industry: "Construction",
    description:
      "The construction industry is vital for infrastructure development and urban planning.",
    opportunities: "Civil Engineers, Project Managers, Construction Workers.",
  },
  {
    industry: "Retail",
    description:
      "Retail is adapting to e-commerce trends and consumer behavior changes.",
    opportunities:
      "Retail Managers, E-commerce Specialists, Customer Service Representatives.",
  },
];

// Success stories
const successStories = [
  {
    name: "Jane Doe",
    career: "Software Engineer",
    story:
      "Jane transitioned from a teacher to a software engineer through bootcamps and self-learning.",
    image: "", // Replace with actual image URL
  },
  {
    name: "John Smith",
    career: "Data Scientist",
    story:
      "John changed careers after pursuing a master's in data science and now works for a top tech company.",
    image: "", // Replace with actual image URL
  },
];

// Recommended courses
const recommendedCourses = [
  {
    course: "Introduction to Python",
    platform: "Coursera",
    link: "https://www.coursera.org",
  },
  {
    course: "Data Science Specialization",
    platform: "Udemy",
    link: "https://www.udemy.com",
  },
];

const Insight = () => {
  const [randomTerm, setRandomTerm] = useState({});
  const [randomFact, setRandomFact] = useState("");
  const [randomTip, setRandomTip] = useState("");
  const [randomQuote, setRandomQuote] = useState("");
  const [randomJobStat, setRandomJobStat] = useState("");
  const [randomIndustry, setRandomIndustry] = useState({});
  const [randomSuccessStory, setRandomSuccessStory] = useState({});
  const [randomCourse, setRandomCourse] = useState({});

  useEffect(() => {
    // Randomly pick a career term, daily fact, career tip, quote, job market stat, industry spotlight, success story, and course when the page is refreshed
    setRandomTerm(careerTerms[Math.floor(Math.random() * careerTerms.length)]);
    setRandomFact(dailyFacts[Math.floor(Math.random() * dailyFacts.length)]);
    setRandomTip(careerTips[Math.floor(Math.random() * careerTips.length)]);
    setRandomQuote(quotes[Math.floor(Math.random() * quotes.length)]);
    setRandomJobStat(
      jobMarketStats[Math.floor(Math.random() * jobMarketStats.length)]
    );
    setRandomIndustry(
      industrySpotlights[Math.floor(Math.random() * industrySpotlights.length)]
    );
    setRandomSuccessStory(
      successStories[Math.floor(Math.random() * successStories.length)]
    );
    setRandomCourse(
      recommendedCourses[Math.floor(Math.random() * recommendedCourses.length)]
    );
  }, []);

  return (
    <section className="insight-section">
      {/* <div className="insight-header">
        <h2>Insight</h2>
      </div> */}
      {/* Display Career Term */}
      <div className="insight-container">
        <div className="insight-container-box">
          {/* Display Quote of the Day */}
          <div className="quote-of-the-day">
            <h3>Quote of the Day</h3>
            <p>{randomQuote}</p>
          </div>

          {/* Display Daily Fact */}
          <div className="daily-fact">
            <h3>Daily Career Fact</h3>
            <p>{randomFact}</p>
          </div>

          {/* Display Career Tip */}
          <div className="career-tip">
            <h3>Career Tip</h3>
            <p>{randomTip}</p>
          </div>
        </div>

        <div className="insight-container-box">
          <div className="career-term">
            <h3>{randomTerm.term}</h3>
            <p>{randomTerm.definition}</p>
            <img src={randomTerm.image} alt={randomTerm.term} />
          </div>

          {/* Display Job Market Insight */}
          <div className="job-market-insight">
            <h3>Job Market Insight</h3>
            <p>{randomJobStat}</p>
          </div>
        </div>

        <div className="insight-container-box">
          {/* Display Industry Spotlight */}
          <div className="industry-spotlight">
            <h3>{randomIndustry.industry} Spotlight</h3>
            <p>{randomIndustry.description}</p>
            <p>
              <strong>Opportunities:</strong> {randomIndustry.opportunities}
            </p>
          </div>

          <div className="insight-container-box">
            {/* Display Success Story */}
            <div className="success-story">
              <h3>Success Story: {randomSuccessStory.name}</h3>
              {/* <p>
                <strong>Career:</strong> {randomSuccessStory.career}
              </p> */}
              {/* <p>{randomSuccessStory.story}</p> */}
              {/* <img
                src={randomSuccessStory.image}
                alt={randomSuccessStory.name}
              /> */}
            </div>
          </div>

          {/* Display Recommended Course */}
          <div className="recommended-course">
            <h3>Recommended Course</h3>
            <p>
              {randomCourse.course} - {randomCourse.platform}
            </p>
            <a
              href={randomCourse.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Enroll Now
            </a>
          </div>
        </div>
        
        <div className="insight-container-box">
          {/* Display Skills in Demand */}
          <div className="skills-in-demand">
            <h3>Skills in Demand</h3>
            <ul>
              {inDemandSkills.map((skill, index) => (
                <li key={index}>
                  <strong>{skill.skill}</strong> in <em>{skill.industry}</em>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Insight;
