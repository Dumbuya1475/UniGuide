import { FaArrowLeft } from "react-icons/fa";
import { useState } from "react";
import "./Skills.css";

function RecommendationTool() {
  const [step, setStep] = useState(-1); // Initial state for welcome screen
  const [selectedAnswers, setSelectedAnswers] = useState({
    interest: "",
    goal: "",
    skills: "",
    timeCommitment: "",
  });

  const [recommendation, setRecommendation] = useState(""); // Holds the recommended career path

  const questions = [
    {
      question: "What are you most interested in?",
      options: [
        "Engineering",
        "Health Sciences",
        "Business",
        "Arts & Humanities",
        "Cybersecurity",
        "Environmental Science",
        "Education",
        "Data Science",
      ],
      field: "interest",
    },
    {
      question: "What is your career goal?",
      options: [
        "Work in technology",
        "Provide healthcare",
        "Run a business",
        "Be a creative professional",
        "Protect digital information",
        "Study and protect the environment",
        "Teach and educate others",
        "Analyze and interpret data",
      ],
      field: "goal",
    },
    {
      question: "Which skills do you want to improve?",
      options: [
        "Analytical Thinking",
        "Creativity",
        "Leadership",
        "Problem Solving",
        "Technical Skills",
        "Scientific Research",
        "Communication",
        "Data Analysis",
      ],
      field: "skills",
    },
    {
      question: "How much time can you dedicate to developing skills?",
      options: ["5-10 hours a week", "10-20 hours a week", "20+ hours a week"],
      field: "timeCommitment",
    },
  ];

  const careerRecommendations = {
    Engineering:
      "Consider a career in engineering, such as a software engineer or mechanical engineer.",
    "Health Sciences":
      "Consider a career in healthcare, such as a doctor, nurse, or medical researcher.",
    Business:
      "Consider a career in business, such as a manager, entrepreneur, or financial analyst.",
    "Arts & Humanities":
      "Consider a career in arts and humanities, such as a designer, writer, or educator.",
    Cybersecurity:
      "Consider a career in cybersecurity, such as a cybersecurity analyst or security consultant.",
    "Environmental Science":
      "Consider a career in environmental science, such as an environmental scientist or conservationist.",
    Education:
      "Consider a career in education, such as a teacher, professor, or educational consultant.",
    "Data Science":
      "Consider a career in data science, such as a data scientist or data analyst.",
  };

  const handleAnswer = (option) => {
    setSelectedAnswers({ ...selectedAnswers, [questions[step].field]: option });
  };

  const handleNext = () => {
    if (selectedAnswers[questions[step].field]) {
      if (step < questions.length - 1) {
        setStep(step + 1);
      } else {
        setRecommendation(
          careerRecommendations[selectedAnswers.interest] ||
            "No specific career recommendation found."
        );
        setStep(step + 1); // Proceed to the conclusion screen
      }
    } else {
      alert("Please select an option before proceeding.");
    }
  };

  const handleBack = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  const restart = () => {
    setSelectedAnswers({
      interest: "",
      goal: "",
      skills: "",
      timeCommitment: "",
    });
    setRecommendation("");
    setStep(-1); // Go back to welcome screen
  };

  const showCompletionMessage = () => (
    <div className="completion-message">
      <p>Thank you for completing the career path quiz!</p>
      <p>Recommended Career Path:</p>
      <p className="recommendation">{recommendation}</p>
      <button className="restart-btn" onClick={restart}>
        Restart Career Path Quiz
      </button>
    </div>
  );

  const showWelcomeScreen = () => (
    <div className="welcome-screen">
      <h2>Hello! Welcome to UniGuide</h2>
      <p>
        Are you ready to discover a career that will best suit you but are not
        sure where to start? Use our tool to guide you on which career might fit
        you and your career goals best. It only takes a minute.
      </p>
      <button className="start-btn" onClick={() => setStep(0)}>
        Start
      </button>
    </div>
  );

  return (
    <div className="recommendation-tool">
      <div className="navigation-buttons">
        {step > 0 && (
          <button onClick={handleBack} className="back-btn">
            <FaArrowLeft />
            Back
          </button>
        )}
      </div>

      {step === -1 ? (
        showWelcomeScreen()
      ) : step < questions.length ? (
        <div>
          <h3>{questions[step].question}</h3>
          <div className="options">
            {questions[step].options.map((option) => (
              <label key={option} className="option">
                <input
                  type="radio"
                  name={`question-${step}`}
                  value={option}
                  checked={selectedAnswers[questions[step].field] === option}
                  onChange={() => handleAnswer(option)}
                />
                {option}
              </label>
            ))}
          </div>
          <div className="navigation-buttons">
            <button className="next-btn" onClick={handleNext}>
              Next
            </button>
          </div>
        </div>
      ) : (
        showCompletionMessage()
      )}
    </div>
  );
}

export default RecommendationTool;
