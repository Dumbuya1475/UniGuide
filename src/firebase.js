// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth"; // Import getAuth

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCmnLzBXn3A9Jifi5BpaCHqQ7wnfWwwhoE",
  authDomain: "uniguide-b996d.firebaseapp.com",
  projectId: "uniguide-b996d",
  storageBucket: "uniguide-b996d.firebasestorage.app",
  messagingSenderId: "118560661648",
  appId: "1:118560661648:web:805b34d37f8617c5d0b815",
  measurementId: "G-D5NMCTTNJ9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app); // Make sure 'db' is exported here

// Initialize Firebase

// Initialize Firebase Authentication and Firestore
export const auth = getAuth(app); // Export the auth object
// export { auth }; // Ensure this line is included

// Optionally, you can add other exports as necessary