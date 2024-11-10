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
    // Observe authentication state
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        // Fetch user data from Firestore
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

    return () => unsubscribe(); // Cleanup subscription on unmount
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
            {/* <p>Computer Science</p> */}
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
                  <strong> Welcome, </strong> {userData.fullName || "User"}
                </p>
              ) : (
                <div>...</div>
              )}

              {/* <strong>Welcome</strong> */}
              <p>You have just Sign up </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Overview;
