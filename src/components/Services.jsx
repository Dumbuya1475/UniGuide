// src/components/Services.jsx
// import React from "react";
import "../components/styles/Services.css";

function Services() {
  const servicesList = [
    {
      title: "Personalized Course Guidance",
      description:
        "Get tailored advice to choose the best courses based on your interests and career goals.",
      icon: "📚", // You can replace these with actual icons
    },
    {
      title: "Career Development Resources",
      description:
        "Access resources and tools to help you develop skills that enhance your employability.",
      icon: "💼",
    },
    {
      title: "Job Placement Assistance",
      description:
        "We connect you with potential employers to kickstart your career.",
      icon: "🤝",
    },
    {
      title: "Mentorship Programs",
      description:
        "Engage with industry professionals for guidance and advice throughout your educational journey.",
      icon: "🌟",
    },
  ];

  return (
    <div className="services-section">
      <h2>Our Services</h2>
      <div className="services-container">
        {servicesList.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
