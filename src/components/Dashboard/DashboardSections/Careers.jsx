// src/components/Dashboard/DashboardSections/Careers.jsx
import { useNavigate } from "react-router-dom";

import "./Careers.css";

function Careers() {
  const navigate = useNavigate(); // Hook for navigation

  const careers = [
    {
      id: "computer-science",
      title: "Computer Science",
      overview: "Explore how computers solve real-world problems.",
      skills: ["Programming", "Data Analysis", "Problem Solving"],
      opportunities: [
        "Software Developer",
        "Data Scientist",
        "Systems Analyst",
      ],
    },
    {
      id: "engineering",
      title: "Engineering",
      overview: "Design and create solutions to complex problems.",
      skills: ["Critical Thinking", "Mathematics", "Technical Writing"],
      opportunities: [
        "Mechanical Engineer",
        "Civil Engineer",
        "Electrical Engineer",
      ],
    },
    {
      id: "healthcare",
      title: "Healthcare",
      overview: "Help people live healthier, happier lives.",
      skills: ["Empathy", "Medical Knowledge", "Communication"],
      opportunities: ["Doctor", "Nurse", "Pharmacist"],
    },
    {
      id: "business",
      title: "Business",
      overview: "Plan, organize, and oversee projects to success.",
      skills: ["Leadership", "Strategic Thinking", "Financial Acumen"],
      opportunities: ["Business Analyst", "Entrepreneur", "Consultant"],
    },
    {
      id: "art",
      title: "Art",
      overview: "Express creativity through various visual mediums.",
      skills: ["Creativity", "Visual Communication", "Design Principles"],
      opportunities: ["Graphic Designer", "Illustrator", "Art Director"],
    },
    {
      id: "cybersecurity",
      title: "Cybersecurity",
      overview: "Protect systems and data from digital threats.",
      skills: ["Network Security", "Risk Management", "Ethical Hacking"],
      opportunities: [
        "Cybersecurity Analyst",
        "Security Consultant",
        "Penetration Tester",
      ],
    },
    {
      id: "environmental-science",
      title: "Environmental Science",
      overview: "Address environmental challenges through science.",
      skills: [
        "Environmental Analysis",
        "Sustainability Practices",
        "Field Research",
      ],
      opportunities: [
        "Environmental Scientist",
        "Sustainability Consultant",
        "Conservation Specialist",
      ],
    },
    {
      id: "digital-marketing",
      title: "Digital Marketing",
      overview: "Market products and services using digital platforms.",
      skills: ["SEO", "Content Marketing", "Social Media Marketing"],
      opportunities: [
        "Digital Marketer",
        "SEO Specialist",
        "Content Strategist",
      ],
    },
  ];

  const handleLearnMore = (careerId) => {
    navigate(`/careers/${careerId}`);
  };

  return (
    <div className="career-page">
        <h1>Explore Career Paths</h1>
      <div className="career-paths-container">
        {careers.map((career, index) => (
          <div key={index} className="career-card">
            <h2>{career.title}</h2>
            <p className="career-overview-p">{career.overview}</p>
            <p className="title">Skills:</p>
            <ul>
              {career.skills.map((skill, idx) => (
                <li key={idx}>{skill}</li>
              ))}
            </ul>
            <p className="title">Career Opportunities:</p>
            <ul>
              {career.opportunities.map((opportunity, idx) => (
                <li key={idx}>{opportunity}</li>
              ))}
            </ul>
            <button
              className="learn-more-button"
              onClick={() => handleLearnMore(career.id)}
            >
              Learn More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Careers;
