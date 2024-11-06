// Import necessary Firebase functions
import { db, auth } from "../firebase"; // Import configured Firebase instance
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

// Import style files
import "../components/styles/SignUp.css";

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

  const handleOptionChange = (e) => {
    setFormData({
      ...formData,
      chosenCareer: e.target.value === "yes",
      careerChoice: "", // Reset career choice if user changes option
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
      if (chosenCareer && !careerChoice) {
        alert("Please specify your chosen career.");
        return;
      }

      try {
        // Register user with email and password
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        const user = userCredential.user;

        // Save user data to Firestore
        await setDoc(doc(db, "users", user.uid), {
          uid: user.uid,
          fullName,
          email,
          careerChoice: chosenCareer ? careerChoice : "Undecided",
          chosenCareer,
          createdAt: serverTimestamp(),
        });

        alert("Signup successful! Redirecting to dashboard...");
        navigate("/dashboard/home");
      } catch (error) {
        console.error("Error signing up: ", error);
        alert("Error signing up: " + error.message);
      }
    }
  };

  const careerOptions = [
    "Software Engineering",
    "Graphic Design",
    "Data Science",
    "Cybersecurity",
    "Undecided",
  ];

  return (
    <div className="signup-container">
      <div className="signup-contents">
        <h2>Create an Account</h2>
        <form className="signup-form" onSubmit={handleSubmit}>
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

          {step === 2 && (
            <>
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
