import { useState } from "react";

function RecommendationTool() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({
    interest: "",
    goal: "",
    skills: "",
  });

  const questions = [
    {
      question: "What are you most interested in?",
      options: ["Programming", "Design", "Management", "Data Science"],
      field: "interest",
    },
    {
      question: "What is your career goal?",
      options: [
        "Become a Developer",
        "Project Management",
        "UI/UX Design",
        "Data Analyst",
      ],
      field: "goal",
    },
    {
      question: "Which skills do you want to improve?",
      options: [
        "Problem Solving",
        "Creativity",
        "Leadership",
        "Analytical Thinking",
      ],
      field: "skills",
    },
  ];

  const handleAnswer = (option) => {
    setAnswers({ ...answers, [questions[step].field]: option });
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      showRecommendation();
    }
  };

  const showRecommendation = () => {
    let recommendation = "";

    if (
      answers.interest === "Programming" &&
      answers.goal === "Become a Developer"
    ) {
      recommendation =
        "We recommend you pursue a course in Full-Stack Development or Software Engineering.";
    } else if (
      answers.interest === "Design" &&
      answers.goal === "UI/UX Design"
    ) {
      recommendation =
        "Consider exploring courses in UX/UI Design or Graphic Design.";
    } else if (
      answers.interest === "Data Science" &&
      answers.goal === "Data Analyst"
    ) {
      recommendation =
        "Data Science or Machine Learning could be a great path for you.";
    } else {
      recommendation =
        "Explore general courses in your area of interest to get started.";
    }

    alert(recommendation);
  };

  return (
    <div className="recommendation-tool">
      <h2>Find Your Ideal Course or Career Path</h2>
      {step < questions.length ? (
        <div>
          <h3>{questions[step].question}</h3>
          <div className="options">
            {questions[step].options.map((option) => (
              <button key={option} onClick={() => handleAnswer(option)}>
                {option}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <p>
          Thank you! Based on your answers, we have found a recommendation for
          you.
        </p>
      )}
    </div>
  );
}

export default RecommendationTool;
