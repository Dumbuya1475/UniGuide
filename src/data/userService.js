// src/data/userService.js

import { db } from "../firebase"; // Ensure this is your Firebase configuration
import { doc, setDoc, getDoc } from "firebase/firestore";

/**
 * Saves user data to Firestore
 * @param {Object} user - The user object containing user data
 */
export const saveUserData = async (user) => {
  try {
    // Use the user's unique UID as the document ID in the 'users' collection
    const userRef = doc(db, "users", user.uid);
    await setDoc(userRef, {
      fullName: user.displayName || "No Name",
      email: user.email,
      careerChoice: user.careerChoice || "Not specified", // Customize as needed
      chosenCareer: user.chosenCareer || "Not specified",
    });
    console.log("User data saved successfully!");
  } catch (error) {
    console.error("Error saving user data:", error);
  }
};

/**
 * Fetches user data from Firestore
 * @param {string} userId - The UID of the user to fetch
 * @returns {Object|null} - Returns user data if found, otherwise null
 */
export const fetchUserData = async (userId) => {
  try {
    const userRef = doc(db, "users", userId);
    const userDoc = await getDoc(userRef);

    if (userDoc.exists()) {
      console.log("User data fetched successfully!");
      return userDoc.data();
    } else {
      console.log("No such document!");
      return null;
    }
  } catch (error) {
    console.error("Error fetching user data:", error);
    return null;
  }
};
