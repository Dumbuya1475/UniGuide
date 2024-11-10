// fetchUserData.js
import { db } from ".././firebaseConfig"; // Ensure the correct path to your Firebase config
import { doc, getDoc } from "firebase/firestore";
// import { db } from ".././firebase"

export const fetchUserData = async (email) => {
  try {
    const docRef = doc(db, "users", email);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return docSnap.data(); // Returns the user data
    } else {
      console.log("No such document!");
      return null;
    }
  } catch (error) {
    console.error("Error fetching user data: ", error);
    return null;
  }
};
