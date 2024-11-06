// src/data/userAuth.js
import { auth } from "../firebase";
import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

export const observeUser = (setCurrentUser) => {
  const unsubscribe = onAuthStateChanged(auth, (user) => {
    setCurrentUser(user);
  });
  return unsubscribe;
};

export const loginUser = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.error("Error logging in:", error);
  }
};

export const logoutUser = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error("Error logging out:", error);
  }
};
