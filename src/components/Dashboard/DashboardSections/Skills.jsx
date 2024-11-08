// src/components/Dashboard/DashboardSections/Skills.jsx
import { useEffect, useState } from "react";
import { auth, db } from "../../../firebase"; // Adjust imports based on your structure
import { doc, getDoc, setDoc } from "firebase/firestore";

const careerPaths = [
  {
    name: "Web Development",
    questions: [
      {
        question: "How comfortable are you with JavaScript?",
        options: ["Not at all", "Somewhat", "Very Comfortable"],
      },
      {
        question: "Do you know how to use version control systems (e.g., Git)?",
        options: ["No", "Yes, but not proficient", "Yes, proficient"],
      },
      {
        question: "How familiar are you with HTML and CSS?",
        options: ["Not at all", "Somewhat", "Very Familiar"],
      },
    ],
  },
  {
    name: "Data Science",
    questions: [
      {
        question: "How comfortable are you with Python?",
        options: ["Not at all", "Somewhat", "Very Comfortable"],
      },
      {
        question: "Do you understand basic statistics?",
        options: ["No", "Yes, but not proficient", "Yes, proficient"],
      },
      {
        question: "Have you worked with data visualization tools?",
        options: ["No", "Some experience", "Proficient"],
      },
    ],
  },
  // Add more career paths and their respective questions as needed
];

function Skills() {
  const [selectedCareer, setSelectedCareer] = useState("");
  const [answers, setAnswers] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [userData, setUserData] = useState(null);

  const user = auth.currentUser; // Get the current user

  useEffect(() => {
    const fetchUserData = async () => {
      if (user) {
        const userDoc = await getDoc(doc(db, "users", user.email));
        if (userDoc.exists()) {
          setUserData(userDoc.data());
          // Load previous assessment results if they exist
          if (userDoc.data().assessmentResults) {
            setSelectedCareer(userDoc.data().assessmentResults.careerPath);
            setAnswers(
              userDoc.data().assessmentResults.answers ||
                Array(questions.length).fill("")
            );
            setQuestions(userDoc.data().assessmentResults.questions || []);
          }
        }
      }
    };

    fetchUserData();
  }, [user]);

  const handleCareerChange = (e) => {
    const selected = careerPaths.find((path) => path.name === e.target.value);
    setSelectedCareer(selected.name);
    setQuestions(selected.questions);
    setAnswers(Array(selected.questions.length).fill(""));
  };

  const handleOptionChange = (index, value) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (user) {
        // Save assessment results to Firestore
        await setDoc(
          doc(db, "users", user.email),
          {
            assessmentResults: {
              careerPath: selectedCareer,
              questions: questions,
              answers: answers,
            },
          },
          { merge: true }
        ); // Use merge to avoid overwriting existing data
      }
      alert("Assessment submitted! Your answers: " + JSON.stringify(answers));
    } catch (error) {
      console.error("Error saving assessment: ", error);
      alert("Error saving assessment. Please try again.");
    }
  };

  return (
    <div className="skills-assessment-container">
      <h2>Skills Assessment</h2>
      <label>
        Select a Career Path:
        <select value={selectedCareer} onChange={handleCareerChange} required>
          <option value="">--Select a Career Path--</option>
          {careerPaths.map((path, index) => (
            <option key={index} value={path.name}>
              {path.name}
            </option>
          ))}
        </select>
      </label>

      {questions.length > 0 && (
        <form onSubmit={handleSubmit}>
          {questions.map((question, index) => (
            <div key={index} className="question">
              <p>{question.question}</p>
              {question.options.map((option, i) => (
                <label key={i}>
                  <input
                    type="radio"
                    name={`question${index}`}
                    value={option}
                    checked={answers[index] === option}
                    onChange={() => handleOptionChange(index, option)}
                    required
                  />
                  {option}
                </label>
              ))}
            </div>
          ))}
          <button type="submit">Submit Assessment</button>
        </form>
      )}

      {userData && userData.assessmentResults && (
        <div className="previous-results">
          <h3>Your Previous Assessment Results</h3>
          <p>Career Path: {userData.assessmentResults.careerPath}</p>
          {userData.assessmentResults.questions.map((q, index) => (
            <div key={index}>
              <p>{q.question}</p>
              <p>Your Answer: {userData.assessmentResults.answers[index]}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Skills;
