// src/components/SignOutButton.jsx
// import React from "react";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase"; // Import configured Firebase auth instance

function SignOutButton() {
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      navigate("/login"); // Redirect to login page after signing out
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <button onClick={handleSignOut} className="signout-button">
      Sign Out
    </button>
  );
}

export default SignOutButton;
