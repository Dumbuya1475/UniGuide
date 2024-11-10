// src/contexts/ProfileContext.js
import { createContext, useContext, useState } from "react";

const ProfileContext = createContext();

export const useProfile = () => useContext(ProfileContext);

export const ProfileProvider = ({ children }) => {
  const [profilePic, setProfilePic] =
    useState <
    string >
    (localStorage.getItem("profilePic") || "default-profile.png");

  const saveProfilePic = (newProfilePic: string) => {
    localStorage.setItem("profilePic", newProfilePic); // Save to localStorage
    setProfilePic(newProfilePic); // Update the state
  };

  return (
    <ProfileContext.Provider value={{ profilePic, saveProfilePic }}>
      {children}
    </ProfileContext.Provider>
  );
};
