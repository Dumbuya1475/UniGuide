// Import necessary Firebase functions
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../firebase"; // Import configured Firebase instance
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import "../components/styles/SignUp.css";

import { createUserWithEmailAndPassword } from "firebase/auth"; // Import necessary function
import { auth } from "../firebase"; // Adjust this import based on your file structure


function SignUp() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    careerChoice: "",
    chosenCareer: "",
  });
  const [step, setStep] = useState(1);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // const handleOptionChange = (e) => {
  //   setFormData({
  //     ...formData,
  //     chosenCareer: e.target.value === "yes",
  //     careerChoice: "",
  //   });
  // };

  const handleOptionChange = (e) => {
    setFormData({
      ...formData,
      chosenCareer: e.target.value === "yes", // true if "Yes", false if "No"
      careerChoice: "", // Clear career choice when option changes
    });
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  const {
    fullName,
    email,
    password,
    confirmPassword,
    careerChoice,
    chosenCareer,
  } = formData;

  if (step === 1) {
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // Check for password length
    if (password.length < 6) {
      alert("Password must be at least 6 characters long!");
      return;
    }

    if (fullName && email && password) {
      setStep(2);
    } else {
      alert("Please fill in all required fields.");
    }
  } else if (step === 2) {
    // If user chose "Yes," they must select a career choice
    if (chosenCareer && !careerChoice) {
      alert("Please specify your chosen career.");
      return;
    }

    try {
      // Store data in Firebase Firestore
      await setDoc(doc(db, "users", email), {
        fullName,
        email,
        careerChoice: chosenCareer ? careerChoice : "Undecided",
        chosenCareer,
        createdAt: serverTimestamp(),
      });

      navigate("/dashboard/home");
    } catch (error) {
      console.error("Error adding document: ", error);
      alert("There was an error saving your data. Please try again.");
    }
  }
};

  // localStorage.setItem("userEmail", email); // Store the email in local storage

  // Predefined career options for user selection
  const careerOptions = [
    "Software Engineering",
    "Graphic Design",
    "Data Science",
    "Cybersecurity",
    "Undecided", // Option for undecided users
  ];

  return (
    <div className="signup-container">
      <div className="signup-contents">
        <h2>Create an Account</h2>
        <form className="signup-form" onSubmit={handleSubmit}>
          {/* Step 1: User enters basic info */}
          {step === 1 && (
            <>
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
              <button type="submit" className="signup-button">
                Next
              </button>
            </>
          )}

          {/* Step 2: User selects career choice */}
          {step === 2 && (
            <>
              <label>Do you have a chosen career path?</label>
              <div>
                <label>Do you have a chosen career path?</label>
                <div>
                  <label>
                    <input
                      type="radio"
                      name="careerDecision"
                      value="yes"
                      checked={formData.chosenCareer === true}
                      onChange={handleOptionChange}
                    />
                    Yes
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="careerDecision"
                      value="no"
                      checked={formData.chosenCareer === false}
                      onChange={handleOptionChange}
                    />
                    No, I want to explore
                  </label>
                </div>
              </div>

              {/* Dropdown for career choice if user selected "Yes" */}
              {/* Dropdown for career choice if user selected "Yes" */}
              {formData.chosenCareer && (
                <div>
                  <label>Choose Your Career Path:</label>
                  <select
                    name="careerChoice"
                    value={formData.careerChoice}
                    onChange={handleChange}
                    required
                  >
                    <option value="" disabled>
                      Select a career
                    </option>
                    {careerOptions.map((career) => (
                      <option key={career} value={career}>
                        {career}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              {/* Navigation buttons: Back and Sign Up */}
              <div className="action-buttons">
                <button
                  type="button"
                  className="back-button"
                  onClick={() => setStep(1)}
                >
                  Back
                </button>
                <button type="submit" className="signup-button">
                  Sign Up
                </button>
              </div>
            </>
          )}
        </form>
        <p>
          Already have an account? <a href="/login">Log in here</a>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
