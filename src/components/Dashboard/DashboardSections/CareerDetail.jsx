// src/components/Dashboard/DashboardSections/CareerDetail.jsx
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DashboardNavbar from "../DashboardNavbar";
import Sidebar from "../Sidebar";
import "./careerDetail.css";

import { useParams } from "react-router-dom";
// import "./CareerDetail.css"; // Assuming you have a CSS file for styling

function CareerDetail() {
  const { careerId } = useParams();

  // Comprehensive data for demonstration; this should ideally come from an API or a state management store
  const careerData = {
    "computer-science": {
      title: "Computer Science",
      description:
        "Computer Science is the study of computation, automation, and information. It involves both theoretical studies of algorithms and practical engineering of software systems.",
      jobOpportunities: [
        "Software Developer",
        "Data Scientist",
        "Systems Analyst",
      ],
      skills: ["Programming", "Data Analysis", "Problem Solving"],
      workingAreas: ["Technology", "Finance", "Healthcare"],
      educationalPath:
        "Typically requires a Bachelor's degree in Computer Science, Software Engineering, or a related field.",
      salaryRange: "$60,000 - $120,000",
      globalNotableCompanies: ["Google", "Microsoft", "Facebook"],
      notableCompaniesSierraLeone: [
        "Rokel Communications",
        "Meltwater Entrepreneurial School of Technology",
        "SLCS",
      ],
      futureOutlook:
        "Growing demand due to the increasing reliance on technology and data.",
    },
    engineering: {
      title: "Engineering",
      description:
        "Engineering applies scientific principles to design, build, and analyze solutions to technical problems. It encompasses various fields like mechanical, civil, and electrical engineering.",
      jobOpportunities: [
        "Mechanical Engineer",
        "Civil Engineer",
        "Electrical Engineer",
      ],
      skills: ["Critical Thinking", "Mathematics", "Technical Writing"],
      workingAreas: ["Construction", "Manufacturing", "Energy"],
      educationalPath:
        "Typically requires a Bachelor's degree in Engineering. Specializations may require further education or certification.",
      salaryRange: "$70,000 - $110,000",
      globalNotableCompanies: ["General Electric", "Siemens", "Boeing"],
      notableCompaniesSierraLeone: [
        "Sierra Leone Ports Authority",
        "Sierra Leone Roads Authority",
        "Addax Bioenergy Sierra Leone",
      ],
      futureOutlook:
        "Stable demand with opportunities in emerging technologies and renewable energy.",
    },
    healthcare: {
      title: "Healthcare",
      description:
        "Healthcare focuses on the maintenance and improvement of physical and mental health through medical services. It includes various professions dedicated to diagnosis, treatment, and prevention of illnesses.",
      jobOpportunities: ["Doctor", "Nurse", "Pharmacist"],
      skills: ["Empathy", "Medical Knowledge", "Communication"],
      workingAreas: ["Hospitals", "Clinics", "Pharmaceuticals"],
      educationalPath:
        "Typically requires relevant degrees and certifications. For example, doctors need a medical degree and residency training.",
      salaryRange: "$50,000 - $200,000",
      globalNotableCompanies: [
        "Mayo Clinic",
        "Johns Hopkins Medicine",
        "Pfizer",
      ],
      notableCompaniesSierraLeone: [
        "Sierra Leone Ministry of Health and Sanitation",
        "Mercy Ships Sierra Leone",
        "King's Sierra Leone Partnership",
      ],
      futureOutlook:
        "High demand due to ongoing health challenges and an aging population.",
    },
    business: {
      title: "Business",
      description:
        "Business involves the organization and management of resources to achieve economic goals. It covers various domains such as finance, marketing, and entrepreneurship.",
      jobOpportunities: ["Business Analyst", "Entrepreneur", "Consultant"],
      skills: ["Leadership", "Strategic Thinking", "Financial Acumen"],
      workingAreas: ["Corporate", "Startups", "Consulting"],
      educationalPath:
        "Typically requires a Bachelor's degree in Business Administration or a related field. MBA is often preferred for higher roles.",
      salaryRange: "$55,000 - $150,000",
      globalNotableCompanies: ["Goldman Sachs", "McKinsey & Company", "Apple"],
      notableCompaniesSierraLeone: [
        "Orange Sierra Leone",
        "Airtel Sierra Leone",
        "Sierra Leone Brewery Limited",
      ],
      futureOutlook:
        "Growing opportunities with a focus on innovation and digital transformation.",
    },
    art: {
      title: "Art",
      description:
        "Art encompasses the creation of visual, auditory, or performance pieces that express imaginative or technical skill. It includes disciplines like painting, sculpture, music, and film.",
      jobOpportunities: ["Graphic Designer", "Illustrator", "Art Director"],
      skills: ["Creativity", "Visual Communication", "Design Principles"],
      workingAreas: ["Advertising", "Media", "Publishing"],
      educationalPath:
        "Typically requires a degree in Fine Arts, Graphic Design, or a related field. Portfolio is often crucial.",
      salaryRange: "$40,000 - $90,000",
      globalNotableCompanies: ["Pixar", "Disney", "Adobe"],
      notableCompaniesSierraLeone: [
        "National Museum of Sierra Leone",
        "Sierra Leone Arts and Crafts Market",
        "Freetown Arts Gallery",
      ],
      futureOutlook:
        "Steady demand with opportunities in digital media and creative industries.",
    },

    cybersecurity: {
      title: "Cybersecurity",
      description:
        "Cybersecurity is the practice of protecting systems, networks, and programs from digital attacks. It involves safeguarding sensitive data from breaches and ensuring the integrity and confidentiality of information.",
      jobOpportunities: [
        "Cybersecurity Analyst",
        "Security Consultant",
        "Penetration Tester",
      ],
      skills: ["Network Security", "Risk Management", "Ethical Hacking"],
      workingAreas: ["Technology", "Finance", "Government"],
      educationalPath:
        "Typically requires a Bachelor's degree in Cybersecurity, Information Technology, or a related field. Certifications such as CISSP are highly valued.",
      salaryRange: "$70,000 - $150,000",
      globalNotableCompanies: ["IBM", "Cisco", "Palo Alto Networks"],
      notableCompaniesSierraLeone: [
        "Sierra Leone Computer Security Association",
        "Sierra Leone Government Cybersecurity Agency",
      ],
      futureOutlook:
        "High demand with increasing importance of data security in all sectors.",
    },
    "environmental-science": {
      title: "Environmental Science",
      description:
        "Environmental Science integrates physical, biological, and information sciences to study and manage the environment. It aims to understand and solve environmental problems.",
      jobOpportunities: [
        "Environmental Scientist",
        "Sustainability Consultant",
        "Conservation Specialist",
      ],
      skills: [
        "Environmental Analysis",
        "Sustainability Practices",
        "Field Research",
      ],
      workingAreas: ["Research", "Government", "Non-Profits"],
      educationalPath:
        "Typically requires a Bachelor's degree in Environmental Science or a related field. Advanced roles may require a Master's or PhD.",
      salaryRange: "$50,000 - $90,000",
      globalNotableCompanies: [
        "Environmental Protection Agency",
        "World Wildlife Fund",
        "Greenpeace",
      ],
      notableCompaniesSierraLeone: [
        "Environment Protection Agency Sierra Leone",
        "Freetown City Council's Environment Division",
      ],
      futureOutlook:
        "Growing importance due to climate change and environmental protection efforts.",
    },
    "digital-marketing": {
      title: "Digital Marketing",
      description:
        "Digital Marketing involves promoting products and services through digital channels such as social media, search engines, and email. It leverages online tools and strategies to reach and engage customers.",
      jobOpportunities: [
        "Digital Marketer",
        "SEO Specialist",
        "Content Strategist",
      ],
      skills: ["SEO", "Content Marketing", "Social Media Marketing"],
      workingAreas: ["Advertising", "E-commerce", "Consulting"],
      educationalPath:
        "Typically requires a degree in Marketing, Communications, or a related field. Practical experience and certifications are also valuable.",
      salaryRange: "$45,000 - $100,000",
      globalNotableCompanies: ["Google", "HubSpot", "Facebook"],
      notableCompaniesSierraLeone: [
        "Sierra Leone Yellow Pages",
        "SL Trade Network",
        "Insight Sierra Leone",
      ],
      futureOutlook:
        "High demand as digital presence becomes crucial for all businesses.",
    },
  };

  const career = careerData[careerId];

  const navigate = useNavigate();

  const handleLearnMore = () => {
    navigate(`/dashboard/careers`);
  };

  // Effect to scroll to the top when the component b
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <div className="career-detail-page">
      <DashboardNavbar/>
      <Sidebar />
      <div className="career-detail-container">
        <button onClick={() => handleLearnMore()} className="backBtn">
          <FaArrowAltCircleLeft />
          Back
        </button>{" "}
        {career ? (
          <>
            <h1>{career.title}</h1>
            <p>{career.description}</p>
            <h3>Job Opportunities</h3>
            <ul>
              {career.jobOpportunities.map((job, index) => (
                <li key={index}>{job}</li>
              ))}
            </ul>
            <h3>Skills Required</h3>
            <ul>
              {career.skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
            <h3>Working Areas</h3>
            <ul>
              {career.workingAreas.map((area, index) => (
                <li key={index}>{area}</li>
              ))}
            </ul>
            <h3>Educational Path</h3>
            <p>{career.educationalPath}</p>
            <h3>Salary Range</h3>
            <p>{career.salaryRange}</p>
            <h3>Notable Companies Globally</h3>
            <ul>
              {career.globalNotableCompanies.map((company, index) => (
                <li key={index}>{company}</li>
              ))}
            </ul>
            <h3>Notable Companies In Sierra Leone</h3>
            <ul>
              {career.notableCompaniesSierraLeone.map((company, index) => (
                <li key={index}>{company}</li>
              ))}
            </ul>
            <h3>Future Outlook</h3>
            <p>{career.futureOutlook}</p>
          </>
        ) : (
          <p>Career not found.</p>
        )}
      </div>
    </div>
  );
}

export default CareerDetail;
