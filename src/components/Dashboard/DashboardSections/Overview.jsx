// src/components/Dashboard/DashboardSections/Overview.jsx
import { FaRoad } from "react-icons/fa";
import { useEffect, useState } from "react";
import { auth, db } from "../../../firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";

import "./Overview.css";

function Overview() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Listen for changes in the authentication state
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        // Fetch user data from Firestore if user is authenticated
        try {
          const userDoc = await getDoc(doc(db, "users", user.uid));
          if (userDoc.exists()) {
            setUserData(userDoc.data());
          } else {
            console.error("No such document!");
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      } else {
        console.log("No user is signed in.");
      }
    });

    // Cleanup subscription on component unmount
    return () => unsubscribe();
  }, []);

  return (
    <div className="overview-container">
      <div className="overview-heading">
        <h2>Your Overview</h2>
        <p>Welcome back! Here’s a summary of your recent activities:</p>
      </div>
      <ul>
        <li>
          <FaRoad />
          <div className="text">
            <h2>Career Path</h2>
            <p>
              <span>Career Choice: </span>
              {userData?.careerChoice || "Not specified"}
            </p>
          </div>
        </li>
      </ul>

      <div className="notification-center">
        <h2>Notification Center</h2>
        <div className="notifications">
          <ul>
            <li>
              {userData ? (
                <p>
                  <strong>Welcome,</strong> {userData.fullName || "User"}
                </p>
              ) : (
                <div>...</div>
              )}
              <p>You have just signed up</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Overview;
