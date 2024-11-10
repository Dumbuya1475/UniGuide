import { signOut } from "firebase/auth";
import { auth } from "../firebaseConfig"; // Adjust based on your file structure

export const signOutUser = async () => {
  try {
    await signOut(auth);
    alert("You have been signed out.");
    // Optionally, you can redirect the user to the login page after sign out
    window.location.href = "/login"; // Or use React Router for navigation
  } catch (error) {
    console.error("Error signing out: ", error);
    alert("Error signing out. Please try again.");
  }
};
